import React, {useContext} from 'react'
import {ExpandTabletPlayer,CloseBar,SongInformation,SongImgWrapper,SongImage,SongArtistWrapper,AudioName,AudioArtist,AudioControlWrap,ProgressBarWrap} from '../../styles/MobileView'
import {StartTimeWrapper,StartTime,EndTimeWrapper,ControlsWrapper,NextWrapper,PlayWrapper,ProgressBar} from '../../styles/AudioPlayer'
import { AddPlaylist } from '../../styles/Playlist';
import {RxCross1} from 'react-icons/rx'
import {ImLoop} from 'react-icons/im';
import {GoUnmute,GoMute} from "react-icons/go";
import {BiSkipPrevious, BiSkipNext} from 'react-icons/bi'
import {AiOutlinePause} from 'react-icons/ai'
import {BsPlayFill} from 'react-icons/bs';
import AppContext from '../../AppContext'

const ExpandedTabletPlayer = () => {
    const {
        songArray,
        songIndexValue,
        setSongIndexValue,
        setAuto,
        isReduced, 
        setMinPlayer,
        setMaxPlayer,
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
        audioRef,
        } = useContext(AppContext)

        const handleMinPlayer = () => {
            setMinPlayer(true)
            setMaxPlayer(false)
          }
        
        const handlePlayPause = () => {
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
  return (
    <ExpandTabletPlayer >
        <CloseBar>
          <AddPlaylist onClick = {handleMinPlayer}>
            <RxCross1 />
          </AddPlaylist>
          </CloseBar>
          <SongInformation>
            <SongImgWrapper>
              <SongImage src = {songArray[songIndexValue]?.imageUrl} />
            </SongImgWrapper>
            <SongArtistWrapper>
              <AudioName>{songArray[songIndexValue]?.name}</AudioName>
              <AudioArtist>{songArray[songIndexValue]?.artist}</AudioArtist>
            </SongArtistWrapper>
            <AudioControlWrap>
                <ProgressBarWrap>
                  <ProgressBar type="range"
                  isClosed = {isReduced}
                  min={0}
                  max={end}
                  value={start ? start : 0}
                  step={1}
                  onChange={handleSeek} />
                 <StartTimeWrapper begin> 
                  <StartTime begin>{currentTime ? currentTime : "0:00"}</StartTime>
                </StartTimeWrapper>
                <EndTimeWrapper begin>
                  <StartTime begin>{duration ? duration : "0:00"}</StartTime>
                </EndTimeWrapper>
                </ProgressBarWrap>
                <ControlsWrapper>
                <NextWrapper onClick = {handleLoop} style ={{boxShadow: isLooping ? "0 0 20px rgba(52, 152, 219, 0.9)" : "none"}}>
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
            </AudioControlWrap>
          </SongInformation>
  
      </ExpandTabletPlayer>
  )
}

export default ExpandedTabletPlayer