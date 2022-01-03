import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useEffect } from 'react';

import { AppContext } from './AppContext';
import { routes } from './Routes';
import Protected from './Components/Protected';
import Header from './Components/Header/Header';


function App() {

  useEffect(() => {
    localStorage.setItem("User",1234)
  }, [])

  return (
    <div className='App'>
      <Router>
        <AppContext.Provider value={{user:'1244'}}>
          <Header />
          <Switch>
            {routes.map((item, index) => item.type==="normal"?
              <Route key={index} exact={item.exact} path={item.path}>
                {item.component}
              </Route>:
              <Protected key={index} exact={item.exact} path={item.path}>
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
