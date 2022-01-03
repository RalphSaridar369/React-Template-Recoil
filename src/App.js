import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from './Screens/Auth/Login';
import Home from './Screens/Home/Home';

import Protected from './Components/Protected';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    // localStorage.setItem("User",1234)
  },[])

  return (
  <BrowserRouter>
    <Routes>
      {/* <Protected exact path="/" element={<Home />} /> */}
      <Route path="/login" element={<Login/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
