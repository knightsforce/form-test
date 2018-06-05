import {
    select,
    call,
    put,
  } from 'redux-saga/effects';

import { fetchApi } from '../../tools/tools';
import flags from '../../flags';

import { 
    selectCurrencies
} from './currencies';

export function requestCalculate(values) {
    return {
        type: flags.requestCalculate,
        values
    }
}

function compliteCalculate(price) {
    return {
        type: flags.compliteCalculate,
        price
    }
}

function errorCalculate(errorText) {
    return {
        type: flags.errorCalculate,
        errorText
    }
}

export function* fetchCalculate({ values }) {

    try {

        let list = ( yield select(selectCurrencies) ).list;

        let from = values.from,
            to = values.to,
            currencyFrom = values.currencyFrom,
            currencyTo = values.currencyTo;
            
        if(currencyFrom === undefined) {

            currencyFrom = list[0].id;

        } else {

            currencyFrom = list.filter((item) => {
                return currencyFrom == item.name; 
            })
            [0].id;

            
        }
        
        if(currencyTo === undefined) {

            currencyTo = list[0].symbol;

        } else {

            currencyTo = list.filter((item) => {
                return currencyTo == item.name; 
            })
            [0].symbol;


        }

        let { status, data, error } = yield call(() => (
            fetchApi(`/ticker/${currencyFrom}/?convert=${currencyTo}`, {
                method: 'GET'
            })
        ));

        if(error) {
            yield put(errorCalculate(error));
        } else {
            switch(status) {
                case 200:

                    let price = data[0][`price_${currencyTo.toLowerCase()}`];

                    yield put(compliteCalculate((1 / price) * from / to));

                    price = null;

                    break;
                
                default:
                    yield put(errorCalculate(status));
            }
        }

    } catch(e) {
        put(errorCalculate('Ошибка'));
    }
}