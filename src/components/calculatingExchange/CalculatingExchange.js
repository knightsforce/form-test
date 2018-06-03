import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    reduxForm,
    Form,
    Field
} from 'redux-form';

import './CalculatingExchange.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from './Select';

let FormCalculatingExchange = (props) => {
    return <CalculatingExchange { ...props } />
}


class CalculatingExchange extends Component {

    constructor(props) {
        super(props);
alert('Прочесть доки полностью')
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
            errorText
        } = this.props;

        return (
            <Form
                className = 'CalculatingExchange'
                onSubmit = { this.props.onSubmit }
            >
                <Field
                    name = 'from'
                    label = 'From'
                    component = {TextField}
                    type = 'text'
                    props = { {
                        value: this.props.valueFrom,
                        onChange: this.props.onChange('valueFrom')
                    } }
                />

                <Field name="favoriteColor" component = { Select } props = {{options: list.map(this.renderOption)}}/>

                <Field
                    name = 'to'
                    label = 'to'
                    component = {TextField}
                    type = 'text'
                    onChange  = { this.props.onChange('valueTo') }
                    props = { {
                        value: this.props.valueTo,
                        onChange: this.props.onChange('valueTo')
                    } } 
                />

                <Field name = 'favoriteColor' component = { Select } props = {{options: list.map(this.renderOption)}}/>

                <Button
                    children = 'Submit'
                    type = 'submit'
                    disabled = {this.props.disableButton}
                />

                {this.props.children}

            </Form>
        );
    }
}

export default reduxForm({
    form: 'calculating',
})(FormCalculatingExchange);