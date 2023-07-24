import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

import { Context } from '../../index';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


const CreateDevice = ({ show, onHide }) => {
    const { device } = useContext(Context);
    const [info, setInfo] = useState([]);

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }]);
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number));
    }

    return ( 
        <Modal
            show={ show }
            onHide={ onHide }
            size="lg"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Добавить устройтсво
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Dropdown className='mt-2'>
                    <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                    <Dropdown.Menu>
                        { device.types.map(type => 
                            <Dropdown.Item key={ type.id }>{ type.name }</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className='mt-2'>
                    <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
                    <Dropdown.Menu>
                        { device.brands.map(brand => 
                            <Dropdown.Item key={ brand.id }>{ brand.name }</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control 
                    className='mt-3'
                    placeholder='Введите название устройтсва'
                />

                <Form.Control 
                    className='mt-3'
                    placeholder='Введите стоимость устройтсва'
                    type='number'
                />

                <Form.Control 
                    className='mt-3'
                    type='file'
                />
                <hr />
                <Button
                    variant='outline-dark'
                    onClick={ addInfo }
                >   
                    Добавить новое свойтсво
                </Button>
                {
                    info.map(i => 
                        <Row className='mt-2' key={i.number}>
                            <Col md={4}>
                                <Form.Control 
                                    placeholder='Введите название свойства'
                                /> 
                            </Col>

                            <Col md={4}>
                                <Form.Control 
                                    placeholder='Введите описание свойства'
                                /> 
                            </Col>
                            <Col md={4}>
                                <Button 
                                    variant='outline-danger'
                                    onClick={ () => removeInfo(i.number) }
                                >   
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )
                }
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant='outline-danger' onClick={ onHide }>Закрыть</Button>
            <Button variant='outline-success' onClick={ onHide }>Добавить</Button>
        </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;