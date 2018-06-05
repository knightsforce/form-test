import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';

// export default class TextFieldCustom extends Component {

//     render() {
//         //Не деструктуризирую - так как нет смысла
//         return (
//             <TextField
//                 {...this.props.input}
//             />
//         );
//     }
// }

export default function TextFieldCustom(props) {
    
    return (
        <TextField
            {...props.input}
            //onChange = { this.props.onChange ? this.props.onChange(1) : null }
        />
    );
    
}