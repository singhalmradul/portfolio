import { all, fork } from 'redux-saga/effects';
import themeSaga from './theme/theme.saga';
import portfolioSaga from './portfolio/portfolio.saga';

export default function* rootSaga() {
  yield all([
    fork(themeSaga),
    fork(portfolioSaga),
  ]);
}
