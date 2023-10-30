import React, { useContext, useState } from 'react'
import SpotifyLogo from '../../assets/spotify-logo.png'
import { HiHome,HiOutlineSearch } from 'react-icons/hi';
import {MdFavorite} from 'react-icons/md'
import {AiOutlineHeart, AiOutlinePlus} from 'react-icons/ai'
import {VscLibrary} from 'react-icons/vsc'
import {BiSolidPlaylist} from 'react-icons/bi'
import {BsArrowRight,BsArrowLeft} from 'react-icons/bs'
import {PlaylistsImage,PlaylistsName,DeletePlaylist,AddPlaylists,NewPlaylist,MyPlaylistWrapper,ShowPlaylistContainer,ShowPlaylistsWrapper,ShowPlaylistLeft,ShowPlaylists,SideBar,SideBarWrapper,SpotifyHeadingWrapper,LogoWrapper,SpotifyImg,SpotifyName,ExpandWrapper,OptionWrapper,IconWrapper,Home,SideBarTop,SideBarBottom,SideBarBottomUp,SideBarBottomTitleWrap,SideBarBottomTitle} from '../../styles/NavigationBar'
import {RiDeleteBin6Line} from 'react-icons/ri'
import AppContext from '../../AppContext';
import { toast,ToastContainer } from "react-toastify";
import MyPlaylistImg from '../../assets/nerverland.jpg'
const NavigationBar = () => {

  
  const {reduce,setReduce,setPlaylistInfo,setPlaylistNumber,setPlaylist,setMinPlayer,playlistInfo,activeSec, setActiveSec} = useContext(AppContext)

  const handleActivePage = (activatedSec) => {
    setActiveSec(activatedSec)
  }


  const handleAddPlaylists = (activatedSec) => {
         setPlaylist(true)
         setMinPlayer(false)
     }

const handlePlaylistNumber = (index) => {
    setPlaylistNumber(index)
}

const handleDeletePlaylists = (index) => {
  const updatedPlaylists = [...playlistInfo];
  updatedPlaylists.splice(index,1)
  localStorage.setItem('playlistInfo',JSON.stringify(updatedPlaylists))
  setPlaylistInfo(updatedPlaylists)
  toast.error("Playlist deleted", { autoClose: 2000 });
}

  const handleReduceBar = () => {
      setReduce(true)
  }

  const handleExpandBar = () => {
    setReduce(false)
}

  return (
    <SideBar reduce = {reduce}>
        <SideBarWrapper>
          <SideBarTop>
            <SpotifyHeadingWrapper reduce = {reduce}>
              {!reduce && (<LogoWrapper>
                <SpotifyImg src = {SpotifyLogo}/>
                <SpotifyName>Spotify</SpotifyName>
              </LogoWrapper>)}
              {!reduce && (<ExpandWrapper reduce = {reduce} onClick = {handleReduceBar}>
                <BsArrowLeft />
              </ExpandWrapper>)}
              {reduce && (<ExpandWrapper onClick = {handleExpandBar}>
                <BsArrowRight />
              </ExpandWrapper>)}
            </SpotifyHeadingWrapper>
            <OptionWrapper reduce = {reduce} active = {activeSec === 'home'} onClick = {() => handleActivePage('home')}>
              <IconWrapper reduce = {reduce} active = {activeSec === 'home'}>
              <HiHome />
              </IconWrapper>
              {!reduce && (<Home active = {activeSec === 'home'}>Home</Home>)}
            </OptionWrapper>
            <OptionWrapper reduce = {reduce} active = {activeSec === 'search'} onClick = {() => handleActivePage('search')} >
            <IconWrapper reduce = {reduce} active = {activeSec === 'search'}>
              <HiOutlineSearch />
              </IconWrapper>
              {!reduce && (<Home active = {activeSec === 'search'}>Search</Home>)}
            </OptionWrapper>
          </SideBarTop>
          <SideBarBottom>
            <SideBarBottomUp>
            <SideBarBottomTitleWrap>
             {!reduce && ( <IconWrapper>
                <VscLibrary />
              </IconWrapper>)}
              {!reduce && (<SideBarBottomTitle>Library</SideBarBottomTitle>)}
            </SideBarBottomTitleWrap>
            <OptionWrapper reduce = {reduce} active = {activeSec === 'favorite'} onClick = {() => handleActivePage('favorite')}>
            <IconWrapper  reduce = {reduce} active = {activeSec === 'favorite'}>
              <MdFavorite />
              </IconWrapper>
              {!reduce && (<Home active = {activeSec === 'favorite'}>Favorites</Home>)}
            </OptionWrapper>
            <OptionWrapper reduce = {reduce}>
           {!reduce && (<IconWrapper>
              <BiSolidPlaylist />
              </IconWrapper>)}
              <AddPlaylists>
              {!reduce && (<Home>
                Playlists
              </Home>)}
             <NewPlaylist reduce = {reduce} onClick = {(e) => {e.stopPropagation();handleAddPlaylists()}}>
                <AiOutlinePlus/>
                </NewPlaylist>
              </AddPlaylists>
            </OptionWrapper>
            <MyPlaylistWrapper reduce = {reduce} onClick = {() => handleActivePage('myplaylist')}>
              <ShowPlaylists reduce = {reduce}>
                <ShowPlaylistLeft>
                  <PlaylistsImage reduce = {reduce} src = {MyPlaylistImg}/>
                  {!reduce && (<PlaylistsName>
                    My Playlist
                  </PlaylistsName>)}
                </ShowPlaylistLeft>
              </ShowPlaylists>
            </MyPlaylistWrapper>
            </SideBarBottomUp>
            <ShowPlaylistContainer>
            <ShowPlaylistsWrapper reduce = {reduce}>
              {playlistInfo?.map((playlist,index) => (
             <ShowPlaylists reduce = {reduce}
             key={index}
             onClick={() => {
               handlePlaylistNumber(index);
               handleActivePage('selectedplaylist');
             }}
           >
                <ShowPlaylistLeft> 
                  <PlaylistsImage reduce = {reduce} src = {playlist?.image}/>
                  {!reduce && (<PlaylistsName>
                    {playlist?.name}
                  </PlaylistsName>)}
                </ShowPlaylistLeft>
                {!reduce && (<DeletePlaylist onClick = {(e) => {e.stopPropagation();handleDeletePlaylists(index)}}>
                    <RiDeleteBin6Line/>
                </DeletePlaylist>)}
              </ShowPlaylists>
              ))}
            </ShowPlaylistsWrapper>
            </ShowPlaylistContainer>
          </SideBarBottom>
          
        </SideBarWrapper>
      </SideBar>
  )
}

export default NavigationBar