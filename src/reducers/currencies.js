import flags from '../flags';

const initState = {
    list: [],
    status: '',
    errorText: ''
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
            return {
                ...state,
                status: initState.status,
                errorText: action.errorText,
            }

        default:
            return state;
    }
}