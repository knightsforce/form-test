import { regNoNum } from './tools';

export default function maskNumper(prev, next) {
    console.warn('Проверить')
    if(regNoNum.test(next)) return prev;
    return parseFloat(next) || '';
    
}