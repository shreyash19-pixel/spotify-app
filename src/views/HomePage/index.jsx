import React, { useState , useEffect, useRef, useContext} from 'react'
import {ShowPlaylistLeft,LikeWrapper,SongName,HeroBottomTop,HomeSect, HomeWrapper, SideBar,Hero, SideBarWrapper, SideBarTop, SpotifyImg, SpotifyName,  SideBarBottom, OptionWrapper, Home,  IconWrapper, HeroTop, HeroBottom, HeroTopLeft, HeroTopRight, HeroIcons, HeroBottomTopHeading, HeroMusicSec, SongWrapper, SongWrapperTop, SongImg, SongWrapperBottom, ArtistName, SideBarBottomTitleWrap, SideBarBottomTitle, ShowPlaylists, SpotifyHeadingWrapper, ShowPlaylistsWrapper, PlaylistsImage, PlaylistsName, DeletePlaylist,AddPlaylists} from '../../styles/HomePage'
import SpotifyLogo from '../../assets/spotify-logo.png'
import { HiHome,HiOutlineSearch } from 'react-icons/hi';
import {BiSolidPlaylist,BiSolidUser} from 'react-icons/bi'
import {MdFavorite} from 'react-icons/md'
import {AiOutlineLeft,AiOutlineRight,AiOutlineHeart, AiOutlinePlus} from 'react-icons/ai'
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

const HomePage = () => {


  const [home, setHome] = useState(true)
  const [search, setSearch] = useState(false)
  const [favorite, setFavorite] = useState(false)
  
  const [isLiked, setIsLiked] = useState([])
  const [selectedPlaylist, setSelectedPlaylist] = useState(false)
  const [personalPlaylist, setPersonalPlaylist] = useState(false)
  const [myPlaylist, setMyPlaylist] = useState([])


  const {setSongIndexValue,
    setSongArray, 
    playlistInfo,
    setPlaylistInfo,
    setPlaylistNumber,
    song, 
    setSongData,
    playlist, 
    setPlaylist,
    setAuto
    } 
    = useContext(AppContext)

  
  const handleHome = () => {
      setHome(true)
      setSearch(false)
      setPlaylist(false)
      setFavorite(false)
      setSelectedPlaylist(false)
      setPersonalPlaylist(false)
  }

  const handleSearch = () => {
      setHome(false)
      setSearch(true)
      setPlaylist(false)
      setFavorite(false)
      setSelectedPlaylist(false)
      setPersonalPlaylist(false)
  }

  const handleAddPlaylists = () => {
    setPlaylist(true)
}

  const handleFavorite = () => {
    setHome(false)
    setSearch(false)
    setPlaylist(false)
    setFavorite(true)
    setSelectedPlaylist(false)
    setPersonalPlaylist(false)
  }

  const handleSelectedPlaylist = (index) => {
    setHome(false)
    setSearch(false)
    setPlaylist(false)
    setFavorite(false)
    setSelectedPlaylist(true)
    setPersonalPlaylist(false)
    setPlaylistNumber(index)
}

const MyPersonalPlaylist = () => {
    setHome(false)
    setSearch(false)
    setPlaylist(false)
    setFavorite(false)
    setSelectedPlaylist(false)
    setPersonalPlaylist(true)
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
      setAuto(true)

  }

  const convertToString = (number) => {
    return number.toString();
  }



  const handleDeletePlaylists = (index) => {
    const updatedPlaylists = [...playlistInfo];
    updatedPlaylists.splice(index,1)
    localStorage.removeItem(convertToString(index))
    localStorage.setItem('playlistInfo',JSON.stringify(updatedPlaylists))
    setPlaylistInfo(updatedPlaylists)
    toast.error("Playlist deleted", { autoClose: 2000 });
  }

  

  return (
   <HomeSect>
    <HomeWrapper style = {{opacity : playlist ? 0.3 : 1}}>
      <SideBar>
        <SideBarWrapper>
          <SideBarTop>
            <SpotifyHeadingWrapper>
              <SpotifyImg src = {SpotifyLogo}/>
              <SpotifyName>Spotify</SpotifyName>
            </SpotifyHeadingWrapper>
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
          </SideBarTop>
          <SideBarBottom>
            <SideBarBottomTitleWrap>
              <IconWrapper style = {{color : "white",fontSize : "26px"}}>
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
            <OptionWrapper>
           <IconWrapper style={{color : "white"}}>
              <BiSolidPlaylist />
              </IconWrapper>
              <AddPlaylists>
              <Home style = {{color: "white"}}>
                Playlists
              </Home>
              <DeletePlaylist style={{color : "white"}} onClick = {(e) => {e.stopPropagation();handleAddPlaylists()}}>
                <AiOutlinePlus/>
                </DeletePlaylist>
              </AddPlaylists>
            </OptionWrapper>
            <ShowPlaylistsWrapper onClick = {MyPersonalPlaylist}>
              <ShowPlaylists>
                <ShowPlaylistLeft>
                  <PlaylistsImage src = {MyPlaylistImg}/>
                  <PlaylistsName>
                    My Playlist
                  </PlaylistsName>
                </ShowPlaylistLeft>
              </ShowPlaylists>
            </ShowPlaylistsWrapper>
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
          </SideBarBottom>
          
        </SideBarWrapper>
      </SideBar>
     {home && ( <Hero>
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
    {playlist && (<Playlist />)}
    <ToastContainer position="bottom-center" />
    <AudioPlayer/>
   </HomeSect>
  )
}

export default HomePage;