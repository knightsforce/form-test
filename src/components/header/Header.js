import React from 'react';
import './Header.css';
import AppBar from '@material-ui/core/AppBar';

export default function Header () {
    return (
        <AppBar
            position="static"
            //color={primary}
            className = 'AppBar'
            >
             Расчет курса
        </AppBar>
    );
}