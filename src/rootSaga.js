import {
    takeLatest
 } from 'redux-saga/effects';

import flags from './flags';

import { 
    fetchCurrencies,
    fetchCalculate
} from './actions';


export default function* rootSaga() {
    yield takeLatest(flags.getCurrencies, fetchCurrencies);
    yield takeLatest(flags.requestCalculate, fetchCalculate)
}