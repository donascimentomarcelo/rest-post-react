import * as CONST from './../helpers/constants';
import Moment from 'moment';

export function randId() {
    return CONST.ONE + Math.random() * (CONST.ONEHUNDRED - CONST.ONE);
}

export function getToday() {
    return Moment().format(CONST.FORMATDATEBR);
}