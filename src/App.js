// import SignIn from "./components/SignIn";
// import SignUp from "./components/SignUp";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import Favorites from "./views/Favorites";
import AppContext from './AppContext'
import {useState} from 'react'

function App() {

  const [songIndexValue, setSongIndexValue] = useState();
  const[songArray, setSongArray] = useState([]);
  const sharedData = {
    songArray,
    setSongArray,
    songIndexValue,
    setSongIndexValue,
  };

  return (
      <Router>
      <AppContext.Provider value={sharedData}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path = "/SignIn" element = {<SignIn />} /> */}
          {/* <Route path = "/SignUp" element = {<SignUp />} /> */}
          <Route path = "/HomePage" element = {<HomePage />} />
        </Routes>
        </AppContext.Provider>
      </Router>
  );
}

export default App;
