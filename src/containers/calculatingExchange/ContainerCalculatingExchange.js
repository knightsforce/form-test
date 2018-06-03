import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Throuber } from '../../components/common/throuber';

import CalculatingExchange from '../../components/calculatingExchange/CalculatingExchange';

import maskNumber from '../../tools/maskNumber';

class ContainerCalculatingExchange extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            valueFrom: '',
            valueTo: ''
        }

    }

    onChange = (type) => {
       
        let value = '';
       
        return (e) => {
            value = e.target.value;

            this.setState((prevState) => {
                return {
                    [type]: maskNumber(prevState[type], value)
                }
            });
        }
    }

    onSubmit = ({ nativeEvent, ...values }) => {
        nativeEvent.preventDefault();
        console.log(values)

    }

    render() {
        
        let {
            status,
            list,
            errorText
        } = this.props.currencies;

        let {
            valueFrom,
            valueTo
        } = this.state;

        return (
            <CalculatingExchange
                list = { list }
                errorText = { errorText }

                valueFrom = { valueFrom }
                valueTo = { valueTo }

                disableButton = { !valueFrom || !valueTo }

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
    (state) => {console.log(state)
        return {
            currencies: state.currencies
        };
    },
    (dispatch) => {
        return {
            
        };
    }
)(ContainerCalculatingExchange);