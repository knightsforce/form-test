import { regNoNum } from './tools';

// export default function maskNumber(value = '') {
    
//     if(regNoNum.test(value)) {

//         return value.replace(regNoNum, '');

//     }

//     return value;
    
// }

export default (value = '') => value.replace(regNoNum, '');