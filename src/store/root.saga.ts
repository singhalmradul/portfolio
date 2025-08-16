import { all, fork } from 'redux-saga/effects';
import themeSaga from './theme/theme.saga';

export default function* rootSaga() {
  yield all([
    fork(themeSaga),
  ]);
}
