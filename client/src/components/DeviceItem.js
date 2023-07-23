import React from 'react';
import { useNavigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import star from '../assets/star.svg';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({ device }) => {
    const navigate = useNavigate();

    return (
        <Col md={3} className='mt-3' onClick={ () => navigate(DEVICE_ROUTE + '/' + device.id) }>
            <Card style={{ width: 150, cursor: 'pointer'}} border='light'>
                <Image width={150} height={150} src={ device.img } />
                <div className='text-black-50 mt-1 d-flex justify-content-between align-items-center'>
                    <div>Samsung...</div>
                    <div className='d-flex align-items-center'>
                        <div>{ device.rating }</div>
                        <Image src={ star } style={{ height: 18, width: 18, marginLeft: 5}} />
                    </div>
                </div>
                <div>{ device.name }</div> 
            </Card>
        </Col>
    );
};

export default DeviceItem;