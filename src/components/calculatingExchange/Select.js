import React, { Component } from 'react';
import Select from '@material-ui/core/Select';

import './Select.css';

export default function SelectCustom (props) {

    return (
        <Select
            {...props.input}
            children = { props.children }
            native = { true }
            className = 'Select' 
        />
    );
    
}