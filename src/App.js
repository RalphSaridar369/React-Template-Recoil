import './App.css'
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import { useEffect, useState } from 'react';

import { AppContext, userState } from './AppContext';
import { routes } from './Routes';
import Protected from './Components/Protected';
import Header from './Components/Header/Header';
import Login from './Screens/Auth/Login';


const screensWithoutHeader = [
	"/login",
	"/register",
]

function App() {
	const [userData,setUserData] = useState(userState);
	useEffect(() => {
		// localStorage.setItem("User",1234)
	}, [])
	
	return (
		<div className='App'>
				<Router>
					<AppContext.Provider value={{userData:userData, setUserData:(e,t)=>{
						setUserData({...userData,[t]:e});
						console.log(userData)
						}}}>
						<Switch>
							{routes.map((item, index) => item.type==="normal"?
								<Route key={index} exact={item.exact} path={item.path}>
									{screensWithoutHeader.includes(item.path)?null:<Header />}
									{item.component}
								</Route>:
								<Protected key={index} exact={item.exact} path={item.path}>
								{screensWithoutHeader.includes(item.path)?null:<Header />}
									{item.component}
								</Protected>
							)}
						</Switch>
					</AppContext.Provider>
				</Router>
		</div>
	);
}

export default App;
