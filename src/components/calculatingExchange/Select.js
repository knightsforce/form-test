import React, { Component } from 'react';
import Select from '@material-ui/core/Select';

import './Select.css';

export default function SelectCustom (props) {
    return (
        <Select
            children = {props.options}
            native = {true}
            className = 'Select' 
        />
    );
}