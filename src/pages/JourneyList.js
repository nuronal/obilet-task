import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GetJourneys } from '../redux/oBilet/action'
import JourneyCard from '../components/JourneyCard'

const JourneyList = () => {
    const { originId, destinationId, departureDate } = useParams()
   

    const { journeys } = useSelector(state => state.oBiletReducer)

    const dispatch = useDispatch()
    const sessionData = JSON.parse(localStorage.getItem('localStorageData'));

    useEffect(() => {
        let data = {
            "device-session": {
                "session-id": sessionData.sessionId,
                "device-id": sessionData.deviceId
            },
            "date": "2022-06-14",
            "language": "tr-TR",
            "data": {
                "origin-id": `${originId}`,
                "destination-id": `${destinationId}`,
                "departure-date": `${departureDate}`
            }
        }
        dispatch(GetJourneys(data))
    }, [])
    
    return (
        <div>
            {
            journeys?.data?.length==0?"Sivas - Kırşehir arasında otobüs seferi bulunamamaktadır. Dilerseniz farklı bir tarih seçerek tekrar deneyebilirsiniz":
                journeys?.data?.map((item, key) => (


                    <JourneyCard key={key} item={item} />
                ))
            }
        </div>
    )
}

export default JourneyList