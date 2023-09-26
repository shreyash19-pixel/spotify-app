import React, { useContext, useEffect, useState } from 'react'
import {HeroIcons, HeroTop, HeroTopLeft, HeroTopRight, IconWrapper} from '../../styles/HomePage'
import AppContext from '../../AppContext'
import {AiOutlineLeft,AiOutlineRight,AiOutlinePlus} from 'react-icons/ai'
import {BiSolidUser} from 'react-icons/bi'
import { PlaylistsWrapper,AddSongs,AddWrapper, AdddedSongsWrapper, ArtistName, ArtistWrapper, HeroTopWrapper, HeroWrapper, PlayListName, PlayListNameDesc, PlaylistDesc, PlaylistImage, PlaylistInfo, PlaylistInfoLeft, PlaylistInfoRight, PlaylistInfoWrapper, SearchAndAdd, SearchWrapper, SongCard, SongDetails, SongImg, SongName } from '../../styles/SelectedPlaylist'
import { InputWrapper, SearchBar, SearchBarWrapper } from '../../styles/Search'
import {HiOutlineSearch} from 'react-icons/hi'
import { toast,ToastContainer } from "react-toastify";

const SelectedPlaylist = () => {


  
  const [search, setSearch] = useState('')
  const {playlistNumber,playlistInfo,setPlaylistInfo,song, setSongArray, setSongIndexValue,setAuto} = useContext(AppContext)


  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const convertToLowerCase = (name) => {
    return name.toLowerCase()
  }


  const handleAddedSongs = (track) => {
    // Check if the track is already in the playlist
    let isTrackPresent = false;
  
    playlistInfo[playlistNumber].songs.forEach((song) => {
      if (song === track) {
        isTrackPresent = true;
        return; // Break out of the forEach loop early if the track is found
      }
    });
  
    // If the track is not present, add it
    if (isTrackPresent === false) {
      // Create a copy of the playlistInfo to avoid mutating the state directly
      const updatedPlaylistInfo = [...playlistInfo];
      
      // Add the track to the playlist
      updatedPlaylistInfo[playlistNumber].songs.push(track);
  
      // Update the state with the new playlistInfo
      setPlaylistInfo(updatedPlaylistInfo);
  
      // Update localStorage
      localStorage.setItem('playlistInfo', JSON.stringify(updatedPlaylistInfo));
    }
  };
  
  const handleRemoveSongs = (index) => {
    const updatedPlaylistInfo = [...playlistInfo];
    updatedPlaylistInfo[playlistNumber].songs.splice(index,1)
    setPlaylistInfo(updatedPlaylistInfo)
    localStorage.setItem('playlistInfo',JSON.stringify(updatedPlaylistInfo))
    toast.error("Song deleted", { autoClose: 2000 });
  }

  const handlePlaySongs = (index) =>{
    setSongArray(playlistInfo[playlistNumber].songs)
    setSongIndexValue(index)
    setAuto(true)
  }
  

  return (
    <HeroWrapper>
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
     <PlaylistsWrapper>
     <PlaylistInfoWrapper>
        <PlaylistInfoLeft>
            <PlaylistImage src = {playlistInfo[playlistNumber]?.image}/>
        </PlaylistInfoLeft>
        <PlaylistInfoRight>
        <PlayListNameDesc>
          <PlayListName>{playlistInfo[playlistNumber]?.name}</PlayListName>
          <PlaylistDesc>{playlistInfo[playlistNumber]?.description}</PlaylistDesc>
        </PlayListNameDesc>
        </PlaylistInfoRight>
      </PlaylistInfoWrapper>
      <AdddedSongsWrapper>
        {playlistInfo[playlistNumber]?.songs?.map((song, index) => (
          <SongCard key = {index} onClick = {() => handlePlaySongs(index)}>
            <SongDetails>
              <SongImg src = {song.imageUrl}/>
            
            <ArtistWrapper>
              <SongName>{song.name}</SongName>
              <ArtistName>{song.artist}</ArtistName>
            </ArtistWrapper>
            </SongDetails>
            <AddSongs onClick={(e) => {e.stopPropagation(); handleRemoveSongs(index)}}>
              REMOVE
            </AddSongs>
          </SongCard>
          ))}
      </AdddedSongsWrapper>
     <SearchAndAdd>
        <SearchWrapper>
          <SearchBarWrapper>
            <InputWrapper>
              <IconWrapper style = {{color : "white"}}>
                <HiOutlineSearch />
              </IconWrapper>
              <SearchBar type = "text" placeholder = 'Add songs from here' onChange = {handleSearch}/>
            </InputWrapper>
          </SearchBarWrapper>
        </SearchWrapper>
        <AddWrapper>
        {song?.filter((item) => {      
                    return search ? convertToLowerCase(item.name).includes(convertToLowerCase(search)) : ""
                  }).map((track,index) => (
          <SongCard key = {index}>
            <SongDetails>
              <SongImg src = {track.imageUrl}/>
              <ArtistWrapper>
                <SongName>{track.name}</SongName>
                <ArtistName>{track.artist}</ArtistName>
              </ArtistWrapper>
            </SongDetails>
            <AddSongs onClick = {(e) => {e.stopPropagation(); handleAddedSongs(track)}}>
              ADD
              <AiOutlinePlus/>
              </AddSongs>
          </SongCard>
          ))}
        </AddWrapper>
     </SearchAndAdd>
     </PlaylistsWrapper>
    </HeroWrapper>
  )
}

export default SelectedPlaylist 