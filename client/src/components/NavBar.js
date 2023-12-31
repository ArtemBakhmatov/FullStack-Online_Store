import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import { Context } from '../index';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    }

    return ( 
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink to={ SHOP_ROUTE } style={{ color: 'white' }}>КупиДевайс</NavLink>
                {
                    user.isAuth ?
                        <Nav className="ml-auto" style={{ color: 'white' }}>
                            <Button 
                                variant="outline-light" 
                                onClick={ () => navigate(ADMIN_ROUTE) }
                            >   
                                Адним панель
                            </Button>
                            <Button 
                                variant="outline-light" 
                                className='ms-1'
                                onClick={ () => logOut() }
                            >   
                                Выйти
                            </Button>
                        </Nav>
                    :
                        <Nav className="ml-auto" style={{ color: 'white' }}>
                            <Button 
                                variant="outline-light" 
                                onClick={ () => navigate(LOGIN_ROUTE) }
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