import React, {useContext} from 'react'
import AppContext from '../../AppContext'
import {LibrarySect,LibraryHeadingWrap,LibraryHeading} from '../../styles/MobileView'
import {NewPlaylist,MyPlaylistWrapper,ShowPlaylists,ShowPlaylistLeft,PlaylistsImage,PlaylistsName,ShowPlaylistContainer,ShowPlaylistsWrapper,DeletePlaylist} from '../../styles/NavigationBar'
import {RiDeleteBin6Line} from 'react-icons/ri'
import MyPlaylistImg from '../../assets/nerverland.jpg'
import {AiOutlinePlus} from 'react-icons/ai'
import { toast} from "react-toastify";

const MobileLibrary = () => {

    const {
        playlistInfo,
        setPlaylist,
        setPlaylistInfo,   
        setMinPlayer,
        setPlaylistNumber,
        setActiveSec

        } = useContext(AppContext)

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

      const handleActivePage = (activatedSec) => {
        setActiveSec(activatedSec)
      }

  return (
    <LibrarySect>
            <LibraryHeadingWrap>
              <LibraryHeading>
                Your Library
              </LibraryHeading>
              <NewPlaylist style={{color : "white"}} onClick = {(e) => {e.stopPropagation();handleAddPlaylists()}}>
              <AiOutlinePlus/>
              </NewPlaylist>
            </LibraryHeadingWrap>
           <MyPlaylistWrapper onClick = {() => handleActivePage('myplaylist')}>
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
            <ShowPlaylists
            key={index}
            onClick={() => {
              handlePlaylistNumber(index);
              handleActivePage('selectedplaylist');
            }}
          >
              <ShowPlaylistLeft>
                <PlaylistsImage src = {playlist?.image}/>
                <PlaylistsName>
                  {playlist?.name}
                </PlaylistsName>
              </ShowPlaylistLeft>
              <DeletePlaylist style = {{color: "white"}} onClick = {(e) => {e.stopPropagation();handleDeletePlaylists(index)}}>
                  <RiDeleteBin6Line/>
              </DeletePlaylist>
            </ShowPlaylists>
            ))}
          </ShowPlaylistsWrapper>
          </ShowPlaylistContainer>
          </LibrarySect>
  )
}

export default MobileLibrary