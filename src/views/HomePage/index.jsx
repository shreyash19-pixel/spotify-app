import React, { useState , useEffect, useRef, useContext} from 'react'
import {LikeWrapper,SongName,HeroBottomTop,HomeSect, HomeWrapper, SideBar,Hero, SideBarWrapper, SideBarTop, SpotifyImg, SpotifyName, SideBarMiddle, SideBarBottom, OptionWrapper, Home, SideBarMiddleBottom, IconWrapper, HeroTop, HeroBottom, HeroTopLeft, HeroTopRight, HeroIcons, HeroBottomTopHeading, HeroMusicSec, SongWrapper, SongWrapperTop, SongImg, SongWrapperBottom, ArtistName, SideBarMiddleTitleWrap, SideBarMiddleTitle, ShowPlaylists} from '../../styles/HomePage'
import SpotifyLogo from '../../assets/spotify-logo.png'
import { HiHome,HiOutlineSearch } from 'react-icons/hi';
import {BiSolidPlaylist,BiSolidUser} from 'react-icons/bi'
import {MdFavorite} from 'react-icons/md'
import {AiOutlineLeft,AiOutlineRight,AiOutlineHeart} from 'react-icons/ai'
import Search from '../Search'
import Favorites from '../Favorites';
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AudioPlayer from '../AudioPlayer';
import AppContext from '../../AppContext';
import Playlist from '../Playlist';



const HomePage = () => {


  const [home, setHome] = useState(false)
  const [search, setSearch] = useState(false)
  const [favorite, setFavorite] = useState(false)
  const [playlist, setPlaylist] = useState(true)
  const [song, setSongData] = useState([]);
  const [isLiked, setIsLiked] = useState([])
  
  const {setSongIndexValue,setSongArray} = useContext(AppContext)

  
  const handleHome = () => {
      setHome(true)
      setSearch(false)
      setPlaylist(false)
      setFavorite(false)
  }

  const handleSearch = () => {
      setHome(false)
      setSearch(true)
      setPlaylist(false)
      setFavorite(false)
  }

  const handlePlaylist = () => {
    setHome(false)
    setSearch(false)
    setPlaylist(true)
    setFavorite(false)
  }

  const handleFavorite = () => {
    setHome(false)
    setSearch(false)
    setPlaylist(false)
    setFavorite(true)
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
        toast.error("Removed from Favourites", { autoClose: 2000 });
      }
      return newLiked;
    });
  };
  
  const handleSongs = (index) => {
      setSongIndexValue(index)
      setSongArray(song)

  }
  

  return (
   <HomeSect>
    <HomeWrapper>
      <SideBar>
        <SideBarWrapper>
          <SideBarTop>
            <SpotifyImg src = {SpotifyLogo}/>
            <SpotifyName>Spotify</SpotifyName>
          </SideBarTop>
          <SideBarMiddleBottom>
          <SideBarMiddle>
            <SideBarMiddleTitleWrap>
              <SideBarMiddleTitle>MENU</SideBarMiddleTitle>
            </SideBarMiddleTitleWrap>
            <OptionWrapper onClick = {handleHome} style = {{backgroundColor : home ? "white" : "transparent"}}>
              <IconWrapper style = {{color: home ? "black" : "white"}}>
              <HiHome />
              </IconWrapper>
              <Home style = {{color: home ? "black" : "white"}}>Home</Home>
            </OptionWrapper>
            <OptionWrapper onClick = {handleSearch} style = {{backgroundColor : search ? "white" : "transparent"}}>
            <IconWrapper style = {{color: search ? "black" : "white"}}>
              <HiOutlineSearch />
              </IconWrapper>
              <Home style = {{color: search ? "black" : "white"}}>Search</Home>
            </OptionWrapper>
          </SideBarMiddle>
          <SideBarBottom>
          <SideBarMiddleTitleWrap>
              <SideBarMiddleTitle>LIBRARY</SideBarMiddleTitle>
            </SideBarMiddleTitleWrap>
            <OptionWrapper onClick = {handleFavorite} style = {{backgroundColor : favorite ? "white" : "transparent"}}>
            <IconWrapper style = {{color: favorite ? "black" : "white"}}>
              <MdFavorite />
              </IconWrapper>
              <Home style = {{color: favorite ? "black" : "white"}}>Favorites</Home>
            </OptionWrapper>
            <OptionWrapper onClick = {handlePlaylist} style = {{backgroundColor : playlist ? "white" : "transparent"}}>
           <IconWrapper style = {{color: playlist ? "black" : "white"}}>
              <BiSolidPlaylist />
              </IconWrapper>
              <Home style = {{color: playlist ? "black" : "white"}}>Playlists</Home>
            </OptionWrapper>
          </SideBarBottom>
          <ShowPlaylists>
            
            </ShowPlaylists>
          </SideBarMiddleBottom>
        </SideBarWrapper>
      </SideBar>
     {/* {home && ( <Hero>
        <HeroTop>
          <HeroTopLeft>
            <HeroIcons>
              <AiOutlineLeft />
            </HeroIcons>
            <HeroIcons>
              <AiOutlineRight />
            </HeroIcons>
          </HeroTopLeft>
          <HeroTopRight>
            <HeroIcons>
              <BiSolidUser />
            </HeroIcons>
          </HeroTopRight>
        </HeroTop>
        <HeroBottom>
          <HeroBottomTop>
            <HeroBottomTopHeading>
              Trending 
            </HeroBottomTopHeading>
          </HeroBottomTop>
          <HeroMusicSec>    
            {song.map((track, index) => (
                  <SongWrapper key={index} onClick = {() => handleSongs(index)}>
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
     )} */}
     {/* {search && (
      <Search />
     )}
     {favorite && (
     <Favorites likedSongs={song.filter((_, index) => isLiked[index])}/>
     )} */}
     {playlist && (<Playlist />)}
    </HomeWrapper>
    <ToastContainer position="bottom-center" />
    <AudioPlayer/>
   </HomeSect>
  )
}

export default HomePage;