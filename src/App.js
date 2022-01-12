import './App.scss'
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import React, { useEffect, useRef } from 'react';

import { routes } from './Routes';
import Protected from './Components/Protected';
import Header from './Components/Header/Header';
import { useRecoilState } from 'recoil';
import { alert } from './shared/globalState';
import { AlertBox } from './Components/Alert/Alert';

const screensWithoutHeader = [
	"/login",
	"/register",
]

function App() {
	const [alertData, setAlertData] = useRecoilState(alert);
	const alertDataRef = useRef(alertData);
	useEffect(()=>{
		setTimeout(()=>setAlertData({}),5000)
	},[Object.keys(alertData).length !== 0])
	return (
			<div className='App'>
				{Object.keys(alertData).length !== 0 && <AlertBox {...alertData} style={{ marginBottom: '1rem' }}/>}
				<Router>
					<Switch>
						{routes.map((item, index) => item.type === "normal" ?
							<Route key={index} exact={item.exact} path={item.path}>
								{screensWithoutHeader.includes(item.path) ? null : <Header />}
								{item.component}
							</Route> :
							<Protected key={index} exact={item.exact} path={item.path}>
								{screensWithoutHeader.includes(item.path) ? null : <Header />}
								{item.component}
							</Protected>
						)}
					</Switch>
				</Router>
			</div>

	);
}

export default App;
