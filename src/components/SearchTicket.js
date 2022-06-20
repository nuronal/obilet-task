import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, FormGroup, Input, Label, NavItem, Row } from 'reactstrap'
import { MapPin } from 'react-feather'
import { Calendar } from 'react-feather'
import Select from 'react-select'
import { Controller, useForm } from 'react-hook-form'
import '../assets/css/SearchTicket.css'
import { useDispatch, useSelector } from 'react-redux'
import { GetBusLocation, GetSession } from '../redux/oBilet/action'
import { useNavigate } from 'react-router-dom'
import { RiSwapLine } from "react-icons/ri"

const SearchTicket = () => {

    const { handleSubmit, register, control } = useForm();
    const onSubmit = (data) => {
        console.log("datam", data)
    }


    const dispatch = useDispatch()
    const { session, locationList } = useSelector(state => state.oBiletReducer)

    const navigate = useNavigate()

    const sessionData = JSON.parse(localStorage.getItem('localStorageData'));

    const convertDate = (date) => {
        return date.toJSON().split('T')[0];
    }

    var now = new Date();
    var today = convertDate(now);
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow = convertDate(tomorrow);

    const [from, setfrom] = useState(JSON.parse(localStorage.getItem("from")) || { value: 349, label: "İstanbul Avrupa" })
    const [to, setto] = useState(JSON.parse(localStorage.getItem("to")) || { value: 356, label: "Ankara" })
    const [departureDate, setdepartureDate] = useState(today)


    const swapLocation = () => {
        const temp = from
        setfrom(to)
        setto(temp)
    }

    useEffect(() => {
        let data = {
            type: 1,
            connection: { "ip-address": "165.114.41.21", "port": "5117" },
            browser: { "name": "Chrome", "version": "102.0.5005.63" }
        }
        dispatch(GetSession(data))

        let locationData = {
            data: null,
            "device-session": {
                "session-id": sessionData.sessionId,
                "device-id": sessionData.deviceId
            },
            "date": "2016-03-11T11:33:00",
            "language": "tr-TR"
        }

        dispatch(GetBusLocation(locationData))

    }, [])

    const cityOptions = []
    locationList?.map((item) => {
        const city = { value: item.id, label: item.name }
        cityOptions.push(city)
    })

    return (
        <Card className='formCard' >
            <Form className='p-3' onSubmit={handleSubmit(onSubmit)} style={{ height: '100%' }}>
                <Row className='formFromInput'>
                    <Col style={{ heigth: '100%' }}>
                        <Label className='inputLabel'>
                            Kalkış Noktası
                        </Label>
                        <FormGroup className='inputFormGroup' >
                            <MapPin color='gray' />
                            <Controller style={{ width: '100%', height: '100%' }}
                                control={control}
                                name="from"
                                render={({
                                }) => (
                                    <Select style={{ justifyContent: 'center', width: "100%", height: '100%' }}
                                        options={cityOptions}
                                        placeholder="İl veya ilçe adı yazın"
                                        innerRef={register()}
                                        onChange={(e) => { if (e.value == to.value) { setfrom(to); setto(from) } else { setfrom(e) } }}
                                        value={from}
                                    />
                                )}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <RiSwapLine color='d23b38' onClick={() => { swapLocation() }} style={{ fontSize: '2rem', cursor: 'pointer', position: 'absolute', top: "24%", right: "15%" }} />
                <Row className='formFromInput'>

                    <Col lg="12" style={{ heigth: '100%' }}>
                        <Label className='inputLabel'>
                            Varış Noktası
                        </Label>
                        <FormGroup className='inputFormGroup' >
                            <MapPin color='gray' />
                            <Controller style={{ width: '100%' }}
                                control={control}
                                name="to"
                                render={({
                                }) => (
                                    <Select style={{ justifyContent: 'center', width: "100%" }}
                                        options={cityOptions}
                                        value={to}
                                        innerRef={register()}
                                        placeholder="İl veya ilçe adı yazın"
                                        onChange={(e) => { if (e.value == from.value) { setto(from); setfrom(to) } else { setto(e) } }}
                                    />
                                )}
                            />
                        </FormGroup>
                    </Col>

                </Row>
                <Row style={{ height: '25%', alignItems: 'center' }}>
                    <Col lg='8' md='8' sm='8' xs='8' style={{ heigth: '100%' }}>
                        <Label className='inputLabel'>
                            Yolculuk Tarihi
                        </Label>
                        <FormGroup style={{ display: 'flex', alignItems: 'center', height: '85%' }}>
                            <Calendar color='gray' />
                            <Input className='border-0 calen'
                                id="journeyDate"
                                name="journeyDate"
                                placeholder="Tarih seçin"
                                innerRef={register()}
                                type="date"
                                onChange={(e) => setdepartureDate(e.target.value)}
                                defaultValue={today}
                                value={departureDate}
                            ></Input>
                        </FormGroup>
                    </Col>

                    <Col lg='4' md='4' sm='4' xs='4' style={{ flexDirection: 'column', alignItems: 'center', paddingLeft: '10%', heigth: '100%' }}>
                        <Row className='m-1' style={{ display: 'flex', alignItems: 'center' }}>
                            <Button onClick={() => { setdepartureDate(today) }}
                                className='dateButtons'>Bugün</Button>
                        </Row>
                        <Row className='m-1' style={{ display: 'flex', alignItems: 'center' }}>
                            <Button onClick={() => setdepartureDate(tomorrow)}
                               className='dateButtons'>Yarın</Button>
                        </Row>
                    </Col>
                </Row>
                <Row style={{ height: '25%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Button onClick={
                        () => {
                            navigate(`/journeyList/${from.value}/${to.value}/${departureDate}`)
                            localStorage.setItem("from", JSON.stringify(from))
                            localStorage.setItem("to", JSON.stringify(to))
                        }
                    }

                        style={{ height: '60%', width: '90%', backgroundColor: '#d23b38', border: 'none', borderRadius: '10px' }}
                    >
                        OTOBÜS BİLETİ BUL
                    </Button>
                </Row>
            </Form>
        </Card>
    )
}

export default SearchTicket