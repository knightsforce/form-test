import {
    //select,
    call,
    //all,
    put,
  } from 'redux-saga/effects';

import { fetchApi } from '../../tools/tools';
import flags from '../../flags';

const urlApp = 'https://api.coinmarketcap.com/v1';

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
        fetchApi(`${urlApp}/ticker/?limit=0`, {
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