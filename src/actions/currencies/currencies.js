import {
    //select,
    call,
    //all,
    put,
  } from 'redux-saga/effects';

import { fetchApi } from '../../tools/tools';
import flags from '../../flags';

export const selectCurrencies = state => state.currencies;

export function getCurrencies() {
    return {
        type: flags.getCurrencies,
    }
}

function compliteCurrencies(list) {
    return {
        type: flags.compliteCurrencies,
        list
    }
}

function errorCurrencies(errorText) {
    return {
        type: flags.errorCurrencies,
        errorText
    }
}

export function* fetchCurrencies() {
    let { status, data, error } = yield call(() => (
        fetchApi('/ticker/?limit=0', {
            method: 'GET'
        })
    ));

    if(error) {
        yield put(errorCurrencies(error));
    } else {
        switch(status) {
            case 200:
                yield put(compliteCurrencies(data));
                break;
            
            default:
                yield put(errorCurrencies('Ошибка'));
        }
    }
}