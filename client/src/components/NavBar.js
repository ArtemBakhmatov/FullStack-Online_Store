import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import { Context } from '../index';
import { SHOP_ROUTE } from '../utils/consts';

const NavBar = observer(() => {
    const { user } = useContext(Context);
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink to={ SHOP_ROUTE } style={{ color: 'white' }}>КупиДевайс</NavLink>
                {
                    user.isAuth ?
                        <Nav className="ml-auto" style={{ color: 'white' }}>
                            <Button variant="outline-light">Адним панель</Button>
                            <Button variant="outline-light" className='ms-1'>Войти</Button>
                        </Nav>
                    :
                        <Nav className="ml-auto" style={{ color: 'white' }}>
                            <Button 
                                variant="outline-light" 
                                onClick={ () => user.setIsAuth(true) }
                            >
                                Авторизация
                            </Button>
                        </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;