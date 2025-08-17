import { call, put, takeEvery } from 'redux-saga/effects';
import * as yaml from 'js-yaml';
import {
  setLoading,
  setLoadingMessage,
  setError,
  updatePersonalInfo,
  updateExperience,
  updateSkills,
  updateProjects,
  updateBlog,
  requestPortfolioData,
} from './portfolio.slice';
import type {
  PersonalInfo,
  Experience,
  Skills,
  Project,
  BlogData
} from '../../data/portfolio.types';

interface PortfolioData {
  personalInfo: PersonalInfo;
  experience: Experience[];
  skills: Skills;
  projects: Project[];
  blog: BlogData;
}

// Fetch portfolio data from YAML file
function* fetchPortfolioData() {
  try {
    yield put(setLoading(true));
    yield put(setLoadingMessage('Fetching portfolio data...'));
    yield put(setError(null));

    const response: Response = yield call(fetch, '/portfolio.data.yaml');

    if (!response.ok) {
      throw new Error(`Failed to fetch portfolio data: ${response.status}`);
    }

    yield put(setLoadingMessage('Processing portfolio data...'));
    const yamlText: string = yield call([response, 'text']);
    const data: PortfolioData = yaml.load(yamlText) as PortfolioData;

    // Update store with fetched data
    yield put(setLoadingMessage('Updating portfolio sections...'));
    yield put(updatePersonalInfo(data.personalInfo));
    yield put(updateExperience(data.experience));
    yield put(updateSkills(data.skills));
    yield put(updateProjects(data.projects));
    yield put(updateBlog(data.blog));

  } catch (error) {
    yield put(setError(error instanceof Error ? error.message : 'Failed to load portfolio data'));
  } finally {
    yield put(setLoading(false));
    yield put(setLoadingMessage(''));
  }
}

// Watcher saga
function* watchPortfolioActions() {
  yield takeEvery(requestPortfolioData.type, fetchPortfolioData);
}

export default function* portfolioSaga() {
  yield watchPortfolioActions();
}
