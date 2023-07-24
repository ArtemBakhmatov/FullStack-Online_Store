import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Spinner from 'react-bootstrap/Spinner';

import { Context } from './index';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { check } from './http/userApi';

const App = observer(() => {
	const { user } = useContext(Context);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			check().then(data => {
				user.setUser(true);
				user.setIsAuth(true);
			}).finally(() => setLoading(false))
		}, 1000)
		
	}, []);

	if (loading) {
		return <Spinner animation='grow'/>
	}

	return (
		<Router>
			<NavBar />
			<AppRouter />
		</Router>
	);
});

export default App;