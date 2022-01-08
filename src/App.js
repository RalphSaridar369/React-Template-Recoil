import './App.css'
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import React, { useEffect } from 'react';

import { routes } from './Routes';
import Protected from './Components/Protected';
import Header from './Components/Header/Header';
import { RecoilRoot } from 'recoil';
import { usertoken, userdata } from './shared/globalState';

const screensWithoutHeader = [
	"/login",
	"/register",
]

function App() {
	useEffect(()=>{
		// alert(13)
	},[usertoken,userdata])
	return (
		<RecoilRoot>
			<div className='App'>
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
		</RecoilRoot>

	);
}

export default App;
