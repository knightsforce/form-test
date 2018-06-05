import flags from '../flags';

const initState = {
    list: [],
    status: '',
    errorText: '',
    price: ''
}

export default function currencies(state = initState, action) {
    switch(action.type) {
        case flags.getCurrencies:
            return {
                ...state,
                status: 'request'
            }

        case flags.compliteCurrencies:
            return {
                ...state,
                status: initState.status,
                list: action.list,
            }

        case flags.errorCurrencies:
        case flags.errorCalculate:
            return {
                ...state,
                status: initState.status,
                errorText: action.errorText,
            }

        case flags.requestCalculate:
            return {
                ...state,
                status: 'request',
                price: initState.price
            }

        case flags.compliteCalculate:

            return {
                ...state,
                status: initState.status,
                price: action.price
            }

        default:
            return state;
    }
}