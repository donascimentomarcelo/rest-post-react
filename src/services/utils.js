import * as CONST from './../helpers/constants';
import Moment from 'moment';

export function getToday() {
    return Moment().format(CONST.FORMATDATEBR);
}