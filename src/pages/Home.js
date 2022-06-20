import React from 'react'
import { Button, Col, Row } from 'reactstrap'
import SearchTicket from '../components/SearchTicket'
import { FaBus,FaShip } from 'react-icons/fa'
import { GiCommercialAirplane } from 'react-icons/gi'
import '../assets/css/Home.css'

const Home = () => {
    return (
        <div style={{ height: '90vh', width: '100%' }}>
            <div style={{ height: '10%', display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Row className='p-3' style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
                    <Col xl='7' lg='7' md='10' sm='12' xs='12' style={{ display: 'flex', alignItems:'center', justifyContent: 'center', }} >
                        <Button style={{ marginRight: '5%', borderRadius: '20px', border: 'none', backgroundColor: '#d23b38' }}>
                            <FaBus style={{ marginRight: '3px' }} />
                            Otobüs
                        </Button>
                        <Button style={{ marginRight: '5%', border: 'gray solid 1px', borderRadius: '20px', backgroundColor: 'white', color: 'black' }}>
                            <GiCommercialAirplane style={{ marginRight: '3px', color: '#d23b38' }} />
                            Uçak
                        </Button>
                        <Button style={{ marginRight: '5%', border: 'gray solid 1px', borderRadius: '20px', backgroundColor: 'white', color: 'black' }}>
                            <FaShip style={{ marginRight: '3px', color: '#d23b38' }} />
                            Feribot
                        </Button>
                    </Col>
                </Row>
            </div>
            <div style={{ height: '90%', display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Row className='imgRow'>
                    <Col xl='5' lg='7' md='12' sm='12' xs='12' className='searchTicketCol'>
                        <SearchTicket />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Home