import React, { useContext } from 'react';
import {Routes, Route } from 'react-router-dom';

import { authRoutes, publicRoutes } from '../routes';
import { Context } from '../index';

const AppRouter = () => {
    const { user } = useContext(Context);
    console.log(user)

    return (
        <Routes>
            {
                user.isAuth && authRoutes.map(({path, component}) => 
                    <Route key={ path } path={ path } element={ component } exact />
                )
            },
            {
                publicRoutes.map(({path, component}) => 
                    <Route key={ path } path={ path } element={ component } exact />
                )
            }
        </Routes>
    );
};

export default AppRouter;