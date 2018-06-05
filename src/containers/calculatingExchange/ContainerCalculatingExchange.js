import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Throuber } from '../../components/common/throuber';

import CalculatingExchange from '../../components/calculatingExchange/CalculatingExchange';

import {
    requestCalculate
} from '../../actions'


class ContainerCalculatingExchange extends Component {

    onSubmit = (values) => this.props.requestCalculate(values);

    checkDisable = (calculating = {}) => {
        //Дешевле провереть на undefinde
        let values = calculating.values;
        
        calculating = null;

        if(values == undefined) {
            
            values = null;

            return true;
       
        }

        return !(values.from && values.to);

    }

    render() {
        
        let {
            status,
            list,
            errorText,
            price
        } = this.props.currencies;


        return (
            <CalculatingExchange
                list = { list }
                errorText = { errorText }
                price = { price }

                disableButton = { this.checkDisable(this.props.form.calculating) }

                onChange = { this.onChange }
                onSubmit = { this.onSubmit }
                
            >
                
                {
                    status == 'request' && <Throuber/>
                }

            </CalculatingExchange>
        );
    }
}

export default connect(
    (state) => {
        return {
            currencies: state.currencies,
            form: state.form
        };
    },
    (dispatch) => {
        return {
            requestCalculate: (values) => dispatch(requestCalculate(values))
        };
    }
)(ContainerCalculatingExchange);