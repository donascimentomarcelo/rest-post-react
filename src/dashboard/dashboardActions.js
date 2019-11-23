import Axios from "axios";

const api_url = 'http://localhost:8080/api/dashboard'

export function getDashboard() {
    const req = Axios.get(api_url);
    return {
        type: 'DASHBOARD_FETCHED',
        payload: req
    }
}