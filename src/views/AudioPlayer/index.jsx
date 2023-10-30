import React, {useContext,useEffect} from 'react'
import {SongInfoImg,StartTimeWrapper,MusicPlayer,ProgressBar,EndTimeWrapper, MusicPlayerWrapper, SongAudio, SongInfo, SongInfoArtistName, SongInfoArtistWrap, SongInfoImgWrap, SongInfoSongName, StartTime, ControlsWrapper, NextWrapper, PlayWrapper, SongInfoLeft, SongInfoRight} from '../../styles/AudioPlayer'
import {BiSkipPrevious, BiSkipNext} from 'react-icons/bi'
import {AiOutlinePause} from 'react-icons/ai'
import {BsPlayFill} from 'react-icons/bs'
import AppContext from '../../AppContext'
import { ImLoop } from "react-icons/im";
import {GoUnmute,GoMute} from "react-icons/go"
import {TabletPlayer } from '../../styles/MobileView'

const AudioPlayer = () => {

  const {isPlaying, 
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
    setisLooping,setSongIndexValue, setSongArray, songIndexValue,songArray,setAuto,auto,isReduced, minPlayer, 
    setMinPlayer,
    setMaxPlayer,audioRef,song,reduce,setReduce} = useContext(AppContext)

  const handlePlay = () => {
    setIsPlaying(true)
    
  }
  const handlePlayPause = () => {
    if(songArray.length > 0)
    {
      setIsPlaying(!isPlaying)
      setAuto(true)

      if(isPlaying === true)
      {
        audioRef.current.pause()
      }
      else
      {
        audioRef.current.play()
      }
    }
    else{
      setSongArray(song)
      setAuto(true)
      setIsPlaying(!isPlaying)
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
  if(songIndexValue === 0)
  {
    setSongIndexValue(songArray.length - 1)
  }
  else{
    const prev = (songIndexValue - 1) % songArray.length
    setSongIndexValue(prev)
  }
  
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

const handleMaxPlayer = () => {
  setMinPlayer(false)
  setMaxPlayer(true)
}

useEffect(() => {
  localStorage.setItem("currentSongIndex", JSON.stringify(songIndexValue))
  localStorage.setItem("currentSongArray", JSON.stringify(songArray))
},[songArray,songIndexValue])

  return (
    <MusicPlayerWrapper>
      <SongInfo reduce = {reduce}>
        <SongInfoImgWrap>
          <SongInfoImg src = {songArray[songIndexValue]?.imageUrl || "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Black.png/220px-Black.png"}/>
        </SongInfoImgWrap>
        {!reduce && (<SongInfoArtistWrap>
        <SongInfoSongName>
              {songArray[songIndexValue]?.name}
          </SongInfoSongName>
          <SongInfoArtistName>
              {songArray[songIndexValue]?.artist}
          </SongInfoArtistName>
        </SongInfoArtistWrap>)}
      </SongInfo>
      <MusicPlayer>
        <StartTimeWrapper> 
          <StartTime>{currentTime ? currentTime : "0:00"}</StartTime>
        </StartTimeWrapper>
        <EndTimeWrapper>
        <StartTime>{duration ? duration : "0:00"}</StartTime>
        </EndTimeWrapper>
        
        <ProgressBar type="range"
        isClosed = {isReduced}
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
        onEnded={isLooping ? undefined : handlePlayNextSong} 
        autoPlay = {auto}/>
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

       
      {minPlayer && (<TabletPlayer onClick = {handleMaxPlayer}>
      <ProgressBar type="range"
        isClosed = {isReduced}
        min={0}
        max={end}
        value={start ? start : 0}
        step={1}
        onChange={handleSeek} />
        <SongInfoLeft>
        <SongInfoImgWrap>
          <SongInfoImg src = {songArray[songIndexValue]?.imageUrl || "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Black.png/220px-Black.png"}/>
        </SongInfoImgWrap>
        <SongInfoArtistWrap>
          <SongInfoSongName>
              {songArray[songIndexValue]?.name}
          </SongInfoSongName>
          <SongInfoArtistName>
              {songArray[songIndexValue]?.artist}
          </SongInfoArtistName>
        </SongInfoArtistWrap>
        </SongInfoLeft>
        <SongInfoRight>
        <ControlsWrapper onClick={(e) => {e.stopPropagation()}}>
          <NextWrapper onClick = {handlePrev}>
             <BiSkipPrevious />
          </NextWrapper>
          <PlayWrapper onClick={handlePlayPause}>
           {isPlaying ? <AiOutlinePause /> : <BsPlayFill />} 
          </PlayWrapper>
          <NextWrapper onClick = {handlePlayNextSong}>
             <BiSkipNext />
          </NextWrapper>
        </ControlsWrapper>
        </SongInfoRight>
      </TabletPlayer>)}

    </MusicPlayerWrapper>
  )
}

export default AudioPlayer