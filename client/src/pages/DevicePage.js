import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import star from '../assets/star.svg';
import { fetchOneDevice } from '../http/deviceApi';

const DevicePage = () => {
    const [device, setDevice] = useState({ info: [] });
    const { id } = useParams();

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data));
    }, []);

    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image  width={ 300 } height={ 300 } src={ process.env.REACT_APP_API_URL + device.img } />
                </Col>

                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center'>
                        <h2 style={{ textAlign: 'center '}}>{ device.name }</h2>
                        <div 
                            className='d-flex align-items-center justify-content-center'
                            style={{ 
                                background: `url(${star}) no-repeat center center`, 
                                width: 240, 
                                height: 240, 
                                fontSize: 64 
                            }}
                        >   
                            { device.rating }
                        </div>
                    </Row>
                </Col>

                <Col md={4}>
                    <Card
                        className='d-flex flex-column align-items-center justify-content-around'
                        style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
                    >
                        <h3>От: { device.price } руб.</h3>
                        <Button variant='outline-dark'>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row> 

            <Row className='d-flex flex-column mt-3'>
                <h1>Характеристики</h1>
                { device.info.map((info, i) => 
                    <Row 
                        key={ info.id } 
                        style={{ background: i % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}
                    >
                        { info.title } : { info.description }
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;