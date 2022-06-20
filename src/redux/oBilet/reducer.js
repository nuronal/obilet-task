const initialState = {
    locationList: [],
    session: [],
    journeys: []
}


const oBiletReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SESSION':
            return ({
                ...state,
                session: action.session
            })
        case 'GET_BUS_LOCATION':
            return ({
                ...state,
                locationList: action.locationList
            })
        case 'GET_JOURNEYS':
            return ({
                ...state,
                journeys: action.journeys
            })

        default:
            return state
    }
}

export default oBiletReducer