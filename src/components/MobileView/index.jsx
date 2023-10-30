import React, { useContext } from 'react'
import AppContext from '../../AppContext'
import { toast} from "react-toastify";
import {HomeWrapperTablet,TabletWidgets} from '../../styles/MobileView'
import {LikeWrapper,HeroBottom, HeroMusicSec,SongWrapper,SongWrapperTop,SongImg,SongName,SongWrapperBottom,ArtistName} from '../../styles/HomePage'
import {IconWrapper} from '../../styles/NavigationBar'
import Search from '../../views/Search'
import Favorites from '../../views/Favorites'
import {MdFavorite} from 'react-icons/md'
import {AiOutlineHeart} from 'react-icons/ai'
import {GoHomeFill,GoHome} from 'react-icons/go'
import {BiSearch,BiSearchAlt,BiLibrary} from 'react-icons/bi'
import {VscLibrary} from 'react-icons/vsc'
import SelectedPlaylist from '../../views/SelectedPlaylist'
import MyPlaylist from '../../views/MyPlaylist'
import ExpandedTabletPlayer from '../../components/ExpandedTabletPlayer';
import MobileLibrary from '../MobileLibrary';

const MobileView = () => {

    const {activeSec, setActiveSec,
        isLiked, 
        setSongIndexValue,
        setAuto,
        setSongArray,
        song,
        isReduced,
        maxPlayer, 
        setIsLiked,
        } = useContext(AppContext)

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

    const handleActivePage = (activatedSec) => {
        setActiveSec(activatedSec)
      }
      
      const handleSongs = (index) => {
        setSongIndexValue(index)
        setSongArray(song)
        setAuto(true)
    }
    
  return (

    <HomeWrapperTablet>
      {maxPlayer && (<ExpandedTabletPlayer />)}
  { activeSec === 'home' && (<HeroBottom>
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
      {activeSec === 'search' && (<Search />)}
      {activeSec === 'favorite' && (<Favorites/>)}
      {activeSec === 'library' && (<MobileLibrary/>)}
      {activeSec === 'myplaylist' && <MyPlaylist />}
      {activeSec === 'selectedplaylist' && (<SelectedPlaylist />)}
  
    <TabletWidgets>
      <IconWrapper onClick = {() => handleActivePage('home')}>
        { activeSec === 'home' ? <GoHomeFill /> : <GoHome />}     
      </IconWrapper>
      <IconWrapper onClick = {() => handleActivePage('search')}>
      { activeSec === 'search' ? <BiSearchAlt/> : <BiSearch />}      
      </IconWrapper>
      <IconWrapper onClick = {() => handleActivePage('favorite')}>
       {activeSec === 'favorite' ? <MdFavorite /> : <AiOutlineHeart/>}
      </IconWrapper>
      <IconWrapper onClick = {() => handleActivePage('library')}>
        {activeSec === 'library' ? <BiLibrary /> : <VscLibrary />}
      </IconWrapper>
    </TabletWidgets>
        </HomeWrapperTablet>
  )
}

export default MobileView