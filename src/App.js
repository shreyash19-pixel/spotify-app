import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import Favorites from "./views/Favorites";
import AppContext from './AppContext'
import {useState,useEffect} from 'react'

function App() {

  const storedPlaylistInfo = JSON.parse(localStorage.getItem("playlistInfo")) || []
  
  const [songIndexValue, setSongIndexValue] = useState();
  const[songArray, setSongArray] = useState([]);
  const [playlistName, setPlaylistName] = useState()
  const [playlistDesc, setPlaylistDesc] = useState()
  const [image, setImage] = useState()
  const [playlistInfo, setPlaylistInfo] = useState(storedPlaylistInfo)


  const sharedData = {
    songArray,
    setSongArray,
    songIndexValue,
    setSongIndexValue,
    playlistName, 
    setPlaylistName, 
    playlistDesc, 
    setPlaylistDesc, 
    image, 
    setImage,
    playlistInfo, 
    setPlaylistInfo
  };
  return (
      <Router>
      <AppContext.Provider value={sharedData}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path = "/HomePage" element = {<HomePage />} />
        </Routes>
        </AppContext.Provider>
      </Router>
  );
}

export default App;
