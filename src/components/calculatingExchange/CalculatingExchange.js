import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    reduxForm,
    Form,
    Field
} from 'redux-form';

import './CalculatingExchange.css';

import TextField from '../common/textField';

import Button from '@material-ui/core/Button';
import Select from './Select';

import maskNumber from '../../tools/maskNumber';


class CalculatingExchange extends Component {

    constructor(props) {
        super(props);

    }

    renderOption = (item) => {
        return (
            <option
                className = 'Select-Option'
                key = { item.id }
                value={item.name}
            >
                { item.name }
            </option>
        );
    }

    render() {
        
        let {
            list,
            errorText,
            price,
            handleSubmit,
            onSubmit
        } = this.props;

        return (
            <Form
                className = 'CalculatingExchange'
                onSubmit = { this.props.handleSubmit(onSubmit) }
            >
                <Field
                    name = 'from'
                    label = 'From'
                    type= 'number'
                    component = {TextField}
                    parse={ maskNumber }
                />

                {/* <Field
                    name = 'currencyFrom'
                    component = { Select }
                    props = { {options: list.map(this.renderOption)} }
                /> */}
                <Field
                    name = 'currencyFrom'
                    component = { Select }
                >
                    { list.map(this.renderOption) }
                </Field> 

                <Field
                    name = 'to'
                    label = 'to'
                    type= 'number'
                    component = {TextField}
                    parse={ maskNumber }
                />

                <Field
                    name = 'currencyTo'
                    component = { Select }
                >
                    { list.map(this.renderOption) }
                </Field>
                <Button
                    children = 'Submit'
                    type = 'submit'
                    disabled = {this.props.disableButton}
                />
                {
                    price && <span className = 'CalculatingExchange-Result' >{ `Результат: ${price}` }</span>
                }

                {
                    errorText && <span className = 'CalculatingExchange-Error' >{ `Ошибка: ${errorText}` }</span>
                }

                {this.props.children}

            </Form>
        );
    }
}

export default reduxForm({
    form: 'calculating',
})(props => <CalculatingExchange { ...props } />);