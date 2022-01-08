import './App.css'
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import React, { useEffect, useState, useRef } from 'react';

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
	return (
			<div className='App'>
				{Object.keys(alertData).length !== 0 && <AlertBox {...alertData} closable onClose={()=>setAlertData({})}/>}
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
