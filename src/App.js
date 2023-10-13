import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import Favorites from "./views/Favorites";
import AppContext from './AppContext'
import {useState,useEffect,useRef} from 'react'

function App() {

  const storedPlaylistInfo = JSON.parse(localStorage.getItem("playlistInfo")) || []
  const storedCurrentSongIndex = JSON.parse(localStorage.getItem("currentSongIndex")) || 0
  const storedCurrentSongArray = JSON.parse(localStorage.getItem("currentSongArray")) || []

  const [songIndexValue, setSongIndexValue] = useState(storedCurrentSongIndex);
  const[songArray, setSongArray] = useState(storedCurrentSongArray);
  const [playlistName, setPlaylistName] = useState()
  const [playlistDesc, setPlaylistDesc] = useState()
  const [image, setImage] = useState()
  const [playlistInfo, setPlaylistInfo] = useState(storedPlaylistInfo)
  const [playlistNumber, setPlaylistNumber] = useState()
  const [song, setSongData] = useState([]);
  const [playlist, setPlaylist] = useState(false)
  const [auto, setAuto] = useState(false)
  const [isExpanded, setIsExpanded] = useState(true)
  const [isReduced, setIsReduced] = useState(false)
  const [minPlayer, setMinPlayer] = useState(true)
  const [maxPlayer, setMaxPlayer] = useState(false)

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState();
  const [isLooping, setisLooping] = useState(false);
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [duration, setDuration] = useState();
  const [mute, setMute] = useState(false)
  const audioRef = useRef(null)
 

  const sharedData = {
    isPlaying, 
    setIsPlaying,
    currentTime, 
    setCurrentTime,
    start, 
    setStart,
    end, 
    setEnd,
    duration, 
    setDuration,
    mute, 
    setMute,
    isLooping, 
    setisLooping,
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
    setPlaylistInfo,
    playlistNumber, 
    setPlaylistNumber,
    song, 
    setSongData,
    playlist, 
    setPlaylist,
    auto, 
    setAuto,
    isExpanded, 
    setIsExpanded,
    isReduced, 
    setIsReduced,
    minPlayer, 
    setMinPlayer,
    maxPlayer, 
    setMaxPlayer,
    audioRef
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
