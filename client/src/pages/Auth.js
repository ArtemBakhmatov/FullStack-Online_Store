import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE; 
    console.log(location);

    return (
        <Container 
            className='d-flex justify-content-center align-items-center'
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{width: 600}} className='p-5'>
                <h2 className='m-auto'>
                    { isLogin ? 'Авторизация' : 'Регистрация' }
                </h2>
                <Form className='d-flex flex-column'>
                    <Form.Control 
                        className='mt-3'
                        placeholder='Введите ваш email...'
                    />
                    <Form.Control 
                        className='mt-3'
                        placeholder='Введите ваш пароль...'
                    />
                    <Row className='d-flex justify-content-between mt-3'>
                        { isLogin ? 
                            <div style={{width: 300}}>
                                Нет аккаунта? <NavLink to={ REGISTRATION_ROUTE }>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div style={{width: 300}}>
                                Есть аккаунт? <NavLink to={ LOGIN_ROUTE }>Войдите!</NavLink>
                            </div>
                        }
                        
                        <Button 
                            variant="outline-success" 
                            style={{ width: 125, marginRight: 10 }}
                        >
                            { isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </Row>
                    
                </Form>
            </Card>
            
        </Container>
    );
};

export default Auth;