import React, {useState,useRef, useContext} from 'react'
import {SongInfoImg,StartTimeWrapper,MusicPlayer,ProgressBar,EndTimeWrapper, MusicPlayerWrapper, SongAudio, SongInfo, SongInfoArtistName, SongInfoArtistWrap, SongInfoImgWrap, SongInfoSongName, StartTime, ControlsWrapper, NextWrapper, PlayWrapper} from '../../styles/AudioPlayer'
import {BiSkipPrevious, BiSkipNext} from 'react-icons/bi'
import {AiOutlinePause} from 'react-icons/ai'
import {BsPlayFill} from 'react-icons/bs'
import AppContext from '../../AppContext'
import { ImLoop } from "react-icons/im";
import {GoUnmute,GoMute} from "react-icons/go"

const AudioPlayer = () => {

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState();
  const [isLooping, setisLooping] = useState(false);
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [duration, setDuration] = useState();
  const [mute, setMute] = useState(false)
  const audioRef = useRef(null)
  const {setSongIndexValue, setSongArray, songIndexValue,songArray} = useContext(AppContext)

  const handlePlay = () => {
    setIsPlaying(true)
  }
  const handlePlayPause = () => {
      setIsPlaying(!isPlaying)

      if(isPlaying === true)
      {
        audioRef.current.pause()
      }
      else
      {
        audioRef.current.play()
      }
  } 

  const handleTimeUpdate = () => {
    const length = audioRef.current.currentTime 
    const mins = Math.floor(length / 60)
    const remainingSeconds = Math.floor(length % 60)
    const formattedSecs = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds 
    const startTime = mins + ":" + formattedSecs
    setStart(length)
    setCurrentTime(startTime)
}

const handleMetaData = () => {
    const length = audioRef.current.duration 
    const mins = Math.floor(length / 60)
    const remainingSeconds = Math.floor(length % 60)
    const formattedSecs = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds 
    const endTime = mins + ":" + formattedSecs
    setEnd(length)
    setDuration(endTime)
};

const handleSeek = (e) => {
  const seekTime = parseFloat(e.target.value);
  audioRef.current.currentTime = seekTime;
  setCurrentTime(seekTime);
};
  
const handlePrev = () => {
  const prev = (songIndexValue - 1) % songArray.length
  setSongIndexValue(prev)
}


const handlePlayNextSong = () => {
  const playNext = (songIndexValue + 1) % songArray.length
  setSongIndexValue(playNext)
}

const handleLoop = () => {
  setisLooping(!isLooping);
};

const handleMute = () => {
  setMute(!mute)
}

  return (
    <MusicPlayerWrapper>
      <SongInfo>
        <SongInfoImgWrap>
          <SongInfoImg src = {songArray[songIndexValue]?.imageUrl || songArray?.imageUrl || "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Black.png/220px-Black.png"}/>
        </SongInfoImgWrap>
        <SongInfoArtistWrap>
          <SongInfoSongName>
              {songArray[songIndexValue]?.name || songArray?.name}
          </SongInfoSongName>
          <SongInfoArtistName>
              {songArray[songIndexValue]?.artist || songArray?.artist}
          </SongInfoArtistName>
        </SongInfoArtistWrap>
      </SongInfo>
      <MusicPlayer>
        <StartTimeWrapper> 
          <StartTime>{currentTime ? currentTime : "0:00"}</StartTime>
        </StartTimeWrapper>
        <EndTimeWrapper>
        <StartTime>{duration ? duration : "0:00"}</StartTime>
        </EndTimeWrapper>
        <ProgressBar type="range"
        min={0}
        max={end}
        value={start ? start : 0}
        step={1}
        onChange={handleSeek} />
        <SongAudio 
        onPlay = {handlePlay}  
        ref={audioRef} 
        src = {songArray[songIndexValue]?.audioUrl || songArray?.audioUrl} 
        onTimeUpdate={handleTimeUpdate} 
        onLoadedMetadata={handleMetaData}  
        loop={isLooping} 
        muted = {mute}
        onEnded={isLooping ? undefined : handlePlayNextSong} autoPlay/>
        <ControlsWrapper>
          <NextWrapper onClick = {handleLoop} style ={{fontSize : "20px" , boxShadow: isLooping ? "0 0 20px rgba(52, 152, 219, 0.9)" : "none"}}>
            <ImLoop />
          </NextWrapper>
          <NextWrapper onClick = {handlePrev}>
             <BiSkipPrevious />
          </NextWrapper>
          <PlayWrapper onClick={handlePlayPause}>
           {isPlaying ? <AiOutlinePause /> : <BsPlayFill />} 
          </PlayWrapper>
          <NextWrapper onClick = {handlePlayNextSong}>
             <BiSkipNext />
          </NextWrapper>
          <NextWrapper onClick = {handleMute}>
            {mute ? <GoMute/> : <GoUnmute />}
          </NextWrapper>
        </ControlsWrapper>
      </MusicPlayer>
    </MusicPlayerWrapper>
  )
}

export default AudioPlayer