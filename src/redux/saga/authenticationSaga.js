import {createSliceSaga, SagaType} from 'redux-toolkit-saga';
import {put, call} from 'redux-saga/effects';
import {flowRequest} from '../service/FlowRequest';
import * as authReducer from '../reducers/authenticationSlice';
const slice = createSliceSaga({
  name: 'authSaga',
  sagaType: SagaType.TakeLatest,
  caseSagas: {
    *sigin(action) {
      yield console.log('Sigin', action);
    },
    *siginSuccess(action) {
      yield console.log('Sigin success', action);
    },
    *siginError(action) {
      yield console.log('Sigin error', action);
    },
  },
});
const authSaga = slice.saga;
export default authSaga;
export const {sigin, siginSuccess, siginError} = slice.actions;
