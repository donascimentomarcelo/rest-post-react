import Axios from "axios";
import * as env from "../environment/environment";

const path = '/login';

export function login(login) {
    const req = Axios.post(`${env.API_JWT_URL}${path}`, login);
    return {
        type: 'LOGIN',
        payload: req,
    }
}