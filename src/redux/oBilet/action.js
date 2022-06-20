import { getBusLocation, getJourneys, getSession } from "../../configs/services/OBiletService"

export const GetSession = (data) => {
    return dispatch => {
        getSession(data).then((res) => {
            dispatch({
                type: 'GET_SESSION',
                session: res.data.data
            })
            const localStorageData = {
                sessionId: res.data.data["session-id"],
                deviceId: res.data.data["device-id"]
            }
         localStorage.setItem("localStorageData", JSON.stringify(localStorageData))
        })
    }
}

export const GetBusLocation = (data) => {
    return dispatch => {
        getBusLocation(data).then((res) => {
            dispatch({
                type: 'GET_BUS_LOCATION',
                locationList: res.data.data
            })
        })
            .catch(err => console.log(err))
    }
}

export const GetJourneys = (data) => {
    return dispatch => {
        getJourneys(data).then((res) => {
            dispatch({
                type: 'GET_JOURNEYS',
                journeys: res.data
            })
        })
    }
}