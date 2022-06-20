import axios from "axios";
import { URL } from '../api'

export const getSession = (data) => {
    return axios.post(`${URL}/client/getsession`, data)
}
export const getBusLocation = (data) => {
    return axios.post(`${URL}/location/getbuslocations`, data)
}

export const getJourneys = (data) => {
    return axios.post(`${URL}/journey/getbusjourneys`, data)
}