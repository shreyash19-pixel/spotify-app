import React, {useEffect, useContext} from 'react'
import {HomeSect,HomeWrapper,Hero,HeroBottom,HeroMusicSec,SongWrapper,LikeWrapper,SongWrapperTop,SongImg,SongName,SongWrapperBottom,ArtistName} from '../../styles/HomePage'
import {MdFavorite} from 'react-icons/md'
import {AiOutlineHeart} from 'react-icons/ai'
import Search from '../Search'
import Favorites from '../Favorites';
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AudioPlayer from '../AudioPlayer';
import AppContext from '../../AppContext';
import Playlist from '../Playlist';
import SelectedPlaylist from '../SelectedPlaylist';
import MyPlaylist from '../MyPlaylist';
import NavigationBar from '../../components/NavigationBar'
import MobileView from '../../components/MobileView'


const HomePage = () => {


  const {activeSec, 
    isLiked, 
    setIsLiked,
    setSongIndexValue,
    setSongArray, 
    song, 
    setSongData,
    playlist, 
    setAuto,
    isReduced, 
    } 
    = useContext(AppContext)

    

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

  const toggleLiked = (index,track) => {
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

  return (
   <HomeSect>
    <HomeWrapper isOpen = {playlist}>
      <NavigationBar />
     {activeSec === 'home' && ( <Hero isClosed = {isReduced}>
        <HeroBottom isClosed = {isReduced}>
          <HeroMusicSec isClosed = {isReduced}>    
            {song.map((track, index) => (
                  <SongWrapper isClosed = {isReduced} key={index} onClick = {() => handleSongs(index)}>
                   <LikeWrapper onClick={(e) => {e.stopPropagation();toggleLiked(index,track);}}>
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
     {activeSec === 'search' && (
      <Search />
     )}
     {activeSec === 'favorite' && (
     <Favorites/>
     )}
     
     {activeSec === 'selectedplaylist' && (<SelectedPlaylist />)}
     {activeSec === 'myplaylist' && (<MyPlaylist />)}
    </HomeWrapper>
    <MobileView />
    {playlist && (<Playlist />)}  
    <ToastContainer position="bottom-center" />
    <AudioPlayer/>
   </HomeSect>
  )
}

export default HomePage;