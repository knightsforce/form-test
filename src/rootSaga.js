import {
    takeLatest
 } from 'redux-saga/effects';

import flags from './flags';

import { 
    fetchCurrencies
} from './actions/currencies/currencies';

export default function* rootSaga() {
    yield takeLatest(flags.getCurrencies, fetchCurrencies);
}