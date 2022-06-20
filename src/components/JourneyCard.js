import React from 'react'
import { Button, Card, CardBody, CardText, CardTitle, Col, Row } from 'reactstrap'
import { Clock } from 'react-feather'

const JourneyCard = ({ item }) => {
    const time = new Date(item.journey.departure).toLocaleTimeString('en',
        { timeStyle: 'short', hour12: false, timeZone: 'Europe/Istanbul' });


    var date = new Date(`0001-01-01T${item.journey.duration}`);
    var hours = date.getHours();
    var minutes = date.getMinutes();

    const money = item.journey["internet-price"].toLocaleString('tr-TR', {
        style: 'currency',
        currency: 'TRY',
        minimumFractionDigits: 2
    })


    return (
        <div style={{ width: '60%', margin: '0 auto' }}>
            <Card className='mb-3 mt-3 shadow' style={{ padding: '8px 12px', borderRadius: '0.5em' }}
                body
            >
                <CardBody style={{ padding: '4px 0px' }}>
                    <Row className='pt-1 pb-1' style={{ borderBottom: '1px solid lightgray' }}>
                        <Col style={{ display: 'flex', justifyContent: 'center' }}>
                            <CardTitle tag="h5">
                                <img src={`https://s3.eu-central-1.amazonaws.com/static.obilet.com/images/partner/${item["partner-id"]}-sm.png`} style={{ width: "100px" }} />
                            </CardTitle>
                        </Col>
                        <Col >
                            <div style={{ display: 'flex', justifyContent: 'center' }}>

                                <Clock color='gray' width={20} style={{ marginRight: 3 }} /> {time}
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', fontSize: 14 }}>
                                ({hours !== 0 && `${hours} Saat`} {minutes !== 0 && `${minutes} Dakika`})*
                            </div>
                        </Col>
                        <Col>
                            <CardTitle tag="h6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '0' }}>
                                <img src={`https://s3.eu-central-1.amazonaws.com/static.obilet.com/images/feature/5.svg`} style={{ width: "30px" }} />
                                {item["bus-type"]}
                            </CardTitle>
                            <CardText style={{ fontSize: '13px' }}>
                                {item.journey.origin} {'>'} {item.journey.destination}
                            </CardText>
                        </Col>
                        <Col>
                            <CardTitle tag="h5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                {money}
                            </CardTitle>
                        </Col>
                        <Col style={{ margin: '0 auto', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <Button style={{ backgroundColor: '#d23b38', border: 'none' }}>
                                Koltuk Seç
                            </Button>
                            <CardText style={{ fontSize: '13px' }}>
                                {item["available-seats"] < 10 && `Son ${item["available-seats"]} Koltuk`}
                            </CardText>
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col style={{ display: 'flex', justifyContent: 'center' }}>
                            {
                                item.features?.map((feature, key) => (
                                    <img key={key} src={`https://s3.eu-central-1.amazonaws.com/static.obilet.com/images/feature/${feature.id}.svg`} style={{ width: "20px" }} />
                                ))
                            }
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    )
}

export default JourneyCard