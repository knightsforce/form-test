import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import flags from '../flags';

import currencies from './currencies';

export default combineReducers({
    form: formReducer,
    currencies
});