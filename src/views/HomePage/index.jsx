import React, { useState , useEffect, useRef, useContext} from 'react'
import {NewPlaylist,ShowPlaylistLeft,LikeWrapper,SongName,HeroBottomTop,HomeSect, HomeWrapper, SideBar,Hero, SideBarWrapper, SideBarTop, SpotifyImg, SpotifyName,  SideBarBottom, OptionWrapper, Home,  IconWrapper, HeroTop, HeroBottom, HeroTopLeft, HeroTopRight, HeroIcons, HeroBottomTopHeading, HeroMusicSec, SongWrapper, SongWrapperTop, SongImg, SongWrapperBottom, ArtistName, SideBarBottomTitleWrap, SideBarBottomTitle, ShowPlaylists, SpotifyHeadingWrapper, ShowPlaylistsWrapper, PlaylistsImage, PlaylistsName, DeletePlaylist,AddPlaylists, LogoWrapper, ExpandWrapper, ReducedBarWrapper, HomeWrapperTablet, TabletViewTop, TabletWidgets, ReducedBar, SideBarBottomWrap, ShowPlaylistContainer, MyPlaylistWrapper, SideBarBottomUp, LibrarySect, LibraryHeadingWrap, LibraryHeading, LibraryPlaylists} from '../../styles/HomePage'
import SpotifyLogo from '../../assets/spotify-logo.png'
import { HiHome,HiOutlineSearch } from 'react-icons/hi';
import {BiSolidPlaylist,BiSolidUser,BiSearch,BiSearchAlt,BiLibrary} from 'react-icons/bi'
import {MdFavorite} from 'react-icons/md'
import {AiOutlineLeft,AiOutlineRight,AiOutlineHeart, AiOutlinePlus,AiOutlineHome} from 'react-icons/ai'
import Search from '../Search'
import Favorites from '../Favorites';
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AudioPlayer from '../AudioPlayer';
import AppContext from '../../AppContext';
import Playlist from '../Playlist';
import {VscLibrary} from 'react-icons/vsc'
import SelectedPlaylist from '../SelectedPlaylist';
import {RiDeleteBin6Line} from 'react-icons/ri'
import MyPlaylistImg from '../../assets/nerverland.jpg'
import MyPlaylist from '../MyPlaylist';
import {BsArrowRight,BsArrowLeft, BsFillArrowLeftSquareFill} from 'react-icons/bs'
import {GoHomeFill,GoHome} from 'react-icons/go'
import { InputWrapper, SearchBar, SearchBarWrapper } from '../../styles/Search';
import {SearchedSongs } from '../../styles/Search'
import {AudioArtist, AudioControlWrap, AudioName, CloseBar, ControlsWrapper, EndTimeWrapper, ExpandedTabletPlayer, NextWrapper, PlayWrapper, ProgressBar, ProgressBarWrap, SongArtistWrapper, SongImage, SongImgWrapper, SongInformation, StartTime, StartTimeWrapper} from '../../styles/AudioPlayer'
import { AddPlaylist } from '../../styles/Playlist';
import {RxCross1} from 'react-icons/rx'
import {ImLoop} from 'react-icons/im';
import {GoUnmute,GoMute} from "react-icons/go";
import {BiSkipPrevious, BiSkipNext} from 'react-icons/bi'
import {AiOutlinePause} from 'react-icons/ai'
import {BsPlayFill} from 'react-icons/bs';

const HomePage = () => {
  const [home, setHome] = useState(true)
  const [search, setSearch] = useState(false)
  const [searched, setSearched] = useState('')
  const [favorite, setFavorite] = useState(false)
  const [library, setLibrary] = useState(false)

  const [isLiked, setIsLiked] = useState([])
  const [selectedPlaylist, setSelectedPlaylist] = useState(false)
  const [personalPlaylist, setPersonalPlaylist] = useState(false)
  const [myPlaylist, setMyPlaylist] = useState([])


  const {
    songArray,
    songIndexValue,
    setSongIndexValue,
    setSongArray, 
    playlistInfo,
    setPlaylistInfo,
    setPlaylistNumber,
    song, 
    setSongData,
    playlist, 
    setPlaylist,
    setAuto,
    isExpanded, 
    setIsExpanded,
    isReduced, 
    setIsReduced,
    minPlayer, 
    setMinPlayer,
    maxPlayer, 
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
    audioRef
    } 
    = useContext(AppContext)

  
  const handleHome = () => {
      setHome(true)
      setSearch(false)
      setPlaylist(false)
      setFavorite(false)
      setSelectedPlaylist(false)
      setPersonalPlaylist(false)
      setLibrary(false)
  }

  const handleSearch = () => {
      setHome(false)
      setSearch(true)
      setPlaylist(false)
      setFavorite(false)
      setSelectedPlaylist(false)
      setPersonalPlaylist(false)
      setLibrary(false)
  }

  const handleAddPlaylists = () => {
    setPlaylist(true)
    setMinPlayer(false)
}

  const handleFavorite = () => {
    setHome(false)
    setSearch(false)
    setPlaylist(false)
    setFavorite(true)
    setSelectedPlaylist(false)
    setPersonalPlaylist(false)
    setLibrary(false)
  }

  const handleSelectedPlaylist = (index) => {
    setHome(false)
    setSearch(false)
    setPlaylist(false)
    setFavorite(false)
    setSelectedPlaylist(true)
    setPersonalPlaylist(false)
    setPlaylistNumber(index)
    setLibrary(false)
}

const MyPersonalPlaylist = () => {
    setHome(false)
    setSearch(false)
    setPlaylist(false)
    setFavorite(false)
    setSelectedPlaylist(false)
    setPersonalPlaylist(true)
    setLibrary(false)
}

const handleLibrary = () => {
  setHome(false)
  setSearch(false)
  setFavorite(false)
  setSelectedPlaylist(false)
  setLibrary(true)
  setPersonalPlaylist(false)
}

  useEffect(() => {
    fetch('/songs.json')
      .then((res) => res.json())
      .then((data) => {
        setSongData(data.tracks);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    const likedSongs = JSON.parse(localStorage.getItem('likedSongs') || '[]');
    setIsLiked(likedSongs);

  }, []);

  const toggleLiked = (index) => {
    setIsLiked((prevLiked) => {
      const newLiked = [...prevLiked];
      newLiked[index] = !newLiked[index];
      localStorage.setItem('likedSongs', JSON.stringify(newLiked)); 
      if (newLiked[index]) {
        toast.success("Added To Favourites", { autoClose: 2000 });
      } else {
        toast.success("Removed from Favourites", { autoClose: 2000 });
      }
      return newLiked;
    });
  };
  
  const handleSongs = (index) => {
      setSongIndexValue(index)
      setSongArray(song)
      setAuto(true)
  }


  const handleDeletePlaylists = (index) => {
    const updatedPlaylists = [...playlistInfo];
    updatedPlaylists.splice(index,1)
    localStorage.setItem('playlistInfo',JSON.stringify(updatedPlaylists))
    setPlaylistInfo(updatedPlaylists)
    toast.error("Playlist deleted", { autoClose: 2000 });
  }

  const handleExpanded = () => {
    setIsExpanded(true)
    setIsReduced(false)
  }

  const handleReduced = () => {
    setIsExpanded(false)
    setIsReduced(true)
  }
  
  const handleSearched = (e) => {
    setSearched(e.target.value)
  }

  const convertToLowerCase = (name) => {
    return name.toLowerCase()
  }

  const handleMinPlayer = () => {
    setMinPlayer(true)
    setMaxPlayer(false)
  }

  const handlePlay = () => {
    setIsPlaying(true)
    
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

  return (
   <HomeSect>
    <HomeWrapper style = {{opacity : playlist ? 0.3 : 1}}>
      {isExpanded && (<SideBar>
        <SideBarWrapper>
          <SideBarTop>
            <SpotifyHeadingWrapper>
              <LogoWrapper>
                <SpotifyImg src = {SpotifyLogo}/>
                <SpotifyName>Spotify</SpotifyName>
              </LogoWrapper>
              <ExpandWrapper onClick = {handleReduced}>
                <BsArrowLeft />
              </ExpandWrapper>
            </SpotifyHeadingWrapper>
            <OptionWrapper onClick = {handleHome} style = {{backgroundColor : home ? "white" : "transparent"}}>
              <IconWrapper style = {{color: home ? "black" : "white"}}>
              <HiHome />
              </IconWrapper>
              <Home style = {{color: home ? "black" : "white"}}>Home</Home>
            </OptionWrapper>
            <OptionWrapper onClick = {handleSearch} style = {{backgroundColor : search ? "white" : "transparent"}}>
            <IconWrapper style = {{color: search ? "black" : "white"}} >
              <HiOutlineSearch />
              </IconWrapper>
              <Home style = {{color: search ? "black" : "white"}}>Search</Home>
            </OptionWrapper>
          </SideBarTop>
          <SideBarBottom>
            <SideBarBottomUp>
            <SideBarBottomTitleWrap>
              <IconWrapper style = {{color : "white"}} isClosed = {isReduced}>
                <VscLibrary />
              </IconWrapper>
              <SideBarBottomTitle>Library</SideBarBottomTitle>
            </SideBarBottomTitleWrap>
            <OptionWrapper onClick = {handleFavorite} style = {{backgroundColor : favorite ? "white" : "transparent"}}>
            <IconWrapper style = {{color: favorite ? "black" : "white"}}>
              <MdFavorite />
              </IconWrapper>
              <Home style = {{color: favorite ? "black" : "white"}}>Favorites</Home>
            </OptionWrapper>
            <OptionWrapper >
           <IconWrapper style={{color : "white"}}>
              <BiSolidPlaylist />
              </IconWrapper>
              <AddPlaylists isClosed = {isReduced}>
              <Home style = {{color: "white"}}>
                Playlists
              </Home>
              <NewPlaylist style={{color : "white"}} onClick = {(e) => {e.stopPropagation();handleAddPlaylists()}}>
                <AiOutlinePlus/>
                </NewPlaylist>
              </AddPlaylists>
            </OptionWrapper>
            <MyPlaylistWrapper onClick = {MyPersonalPlaylist}>
              <ShowPlaylists>
                <ShowPlaylistLeft>
                  <PlaylistsImage src = {MyPlaylistImg}/>
                  <PlaylistsName>
                    My Playlist
                  </PlaylistsName>
                </ShowPlaylistLeft>
              </ShowPlaylists>
            </MyPlaylistWrapper>
            </SideBarBottomUp>
            <ShowPlaylistContainer>
            <ShowPlaylistsWrapper>
              {playlistInfo?.map((playlist,index) => (
              <ShowPlaylists key = {index} onClick={() => handleSelectedPlaylist(index)}>
                <ShowPlaylistLeft>
                  <PlaylistsImage src = {playlist?.image}/>
                  <PlaylistsName>
                    {playlist?.name}
                  </PlaylistsName>
                </ShowPlaylistLeft>
                <DeletePlaylist onClick = {(e) => {e.stopPropagation();handleDeletePlaylists(index)}}>
                    <RiDeleteBin6Line/>
                </DeletePlaylist>
              </ShowPlaylists>
              ))}
            </ShowPlaylistsWrapper>
            </ShowPlaylistContainer>
          </SideBarBottom>
          
        </SideBarWrapper>
      </SideBar>)}
      {isReduced && (<ReducedBarWrapper>
        <ReducedBar>
          <SideBarBottomUp>
        <ExpandWrapper onClick = {handleExpanded}>
          <BsArrowRight />
        </ExpandWrapper>
        <OptionWrapper onClick = {handleHome} style = {{backgroundColor : home ? "white" : "transparent" , justifyContent: "center",paddingLeft: "0px" }}>
          <IconWrapper style = {{color: home ? "black" : "white"}} isClosed = {isReduced}>
            <HiHome />
          </IconWrapper>
        </OptionWrapper>
        <OptionWrapper onClick = {handleSearch} style = {{backgroundColor : search ? "white" : "transparent" ,justifyContent: "center",paddingLeft: "0px"}}>
          <IconWrapper style = {{color: search ? "black" : "white"}} isClosed = {isReduced}>
            <HiOutlineSearch />
          </IconWrapper>
        </OptionWrapper>
            <OptionWrapper onClick = {handleFavorite} style = {{backgroundColor : favorite ? "white" : "transparent",justifyContent: "center",paddingLeft: "0px"}}>
            <IconWrapper style = {{color: favorite ? "black" : "white"}} isClosed = {isReduced}>
              <MdFavorite />
              </IconWrapper>
            </OptionWrapper>
            <OptionWrapper isClosed>
              <AddPlaylists>
              <NewPlaylist style={{color : "white"}} isClosed = {isReduced} onClick = {(e) => {e.stopPropagation();handleAddPlaylists()}}>
                <AiOutlinePlus/>
                </NewPlaylist>
              </AddPlaylists>
            </OptionWrapper>
            <MyPlaylistWrapper isClosed onClick = {MyPersonalPlaylist}>
              <ShowPlaylists isClosed>
                <ShowPlaylistLeft isClosed = {isReduced}>
                  <PlaylistsImage isClosed = {isReduced} src = {MyPlaylistImg}/>
                </ShowPlaylistLeft>
              </ShowPlaylists>
            </MyPlaylistWrapper>
            </SideBarBottomUp>
            <ShowPlaylistContainer>
            <ShowPlaylistsWrapper isClosed = {isReduced}>
              {playlistInfo?.map((playlist,index) => (
              <ShowPlaylists isClosed key = {index} onClick={() => handleSelectedPlaylist(index)}>
                <ShowPlaylistLeft sidePadding isClosed = {isReduced}>
                  <PlaylistsImage isClosed = {isReduced} src = {playlist?.image}/>
                </ShowPlaylistLeft>
              </ShowPlaylists>
              ))}
            </ShowPlaylistsWrapper>
            </ShowPlaylistContainer>
            </ReducedBar>
      </ReducedBarWrapper>)}
     {home && ( <Hero isClosed = {isReduced}>
        <HeroBottom isClosed = {isReduced}>
          <HeroMusicSec isClosed = {isReduced}>    
            {song.map((track, index) => (
                  <SongWrapper isClosed = {isReduced} key={index} onClick = {() => handleSongs(index)}>
                   <LikeWrapper onClick={(e) => {e.stopPropagation();toggleLiked(index);}}>
                      {isLiked[index] ? <MdFavorite /> : <AiOutlineHeart />}
                    </LikeWrapper>
                    <SongWrapperTop>
                      <SongImg src={track.imageUrl} />
                      <SongName>{track.name}</SongName>    
                    </SongWrapperTop>
                    <SongWrapperBottom>
                      <ArtistName>{track.artist}</ArtistName>
                    </SongWrapperBottom>
                  </SongWrapper>
                ))}
          </HeroMusicSec>
        </HeroBottom>
      </Hero>
     )}  
     {search && (
      <Search />
     )}
     {favorite && (
     <Favorites likedSongs={song.filter((_, index) => isLiked[index])}/>
     )}
     
     {selectedPlaylist && (<SelectedPlaylist />)}
     {personalPlaylist && (<MyPlaylist />)}
    </HomeWrapper>
    <HomeWrapperTablet>
      {maxPlayer && (<ExpandedTabletPlayer >
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

      </ExpandedTabletPlayer>)}
    { home && (<HeroBottom>
        <HeroMusicSec>
        {song.map((track, index) => (
                  <SongWrapper isClosed = {isReduced} key={index} onClick = {() => handleSongs(index)}>
                   <LikeWrapper onClick={(e) => {e.stopPropagation();toggleLiked(index);}}>
                      {isLiked[index] ? <MdFavorite /> : <AiOutlineHeart />}
                    </LikeWrapper>
                    <SongWrapperTop>
                      <SongImg src={track.imageUrl} />
                      <SongName>{track.name}</SongName>    
                    </SongWrapperTop>
                    <SongWrapperBottom>
                      <ArtistName>{track.artist}</ArtistName>
                    </SongWrapperBottom>
                  </SongWrapper>
                ))}
        </HeroMusicSec>
        </HeroBottom> )
        }
        {search && (
         <Search />
        )}
        {favorite && (
        <Favorites likedSongs={song.filter((_, index) => isLiked[index])}/>
        )}

        {
          library && (
            <LibrarySect style = {{opacity : playlist ? "0.3" : "1"}}>
              <LibraryHeadingWrap>
                <LibraryHeading>
                  Your Library
                </LibraryHeading>
                <NewPlaylist style={{color : "white"}} onClick = {(e) => {e.stopPropagation();handleAddPlaylists()}}>
                <AiOutlinePlus/>
                </NewPlaylist>
              </LibraryHeadingWrap>
             <MyPlaylistWrapper onClick = {MyPersonalPlaylist}>
              <ShowPlaylists>
                <ShowPlaylistLeft>
                  <PlaylistsImage src = {MyPlaylistImg}/>
                  <PlaylistsName>
                    My Playlist
                  </PlaylistsName>
                </ShowPlaylistLeft>
              </ShowPlaylists>
            </MyPlaylistWrapper>
            <ShowPlaylistContainer>
            <ShowPlaylistsWrapper>
              {playlistInfo?.map((playlist,index) => (
              <ShowPlaylists key = {index} onClick={() => handleSelectedPlaylist(index)}>
                <ShowPlaylistLeft>
                  <PlaylistsImage src = {playlist?.image}/>
                  <PlaylistsName>
                    {playlist?.name}
                  </PlaylistsName>
                </ShowPlaylistLeft>
                <DeletePlaylist onClick = {(e) => {e.stopPropagation();handleDeletePlaylists(index)}}>
                    <RiDeleteBin6Line/>
                </DeletePlaylist>
              </ShowPlaylists>
              ))}
            </ShowPlaylistsWrapper>
            </ShowPlaylistContainer>
            </LibrarySect>
          )
        }
        {
          personalPlaylist && <MyPlaylist />
        }
        {
          selectedPlaylist && (     
              <SelectedPlaylist />
          )
        }
      
      <TabletWidgets>
        <IconWrapper onClick = {handleHome}>
          { home ? <GoHomeFill /> : <GoHome />
           }
        </IconWrapper>
        <IconWrapper onClick = {handleSearch}>
        { search ? <BiSearchAlt/> : <BiSearch />
           }
        </IconWrapper>
        <IconWrapper onClick = {handleFavorite}>
         {favorite ? <MdFavorite /> : <AiOutlineHeart/>}
        </IconWrapper>
        <IconWrapper onClick = {handleLibrary}>
          {library ? <BiLibrary /> : <VscLibrary />}
        </IconWrapper>
      </TabletWidgets>
    </HomeWrapperTablet>
    {playlist && (<Playlist />)}
    <ToastContainer position="bottom-center" />
    <AudioPlayer/>
   </HomeSect>
  )
}

export default HomePage;