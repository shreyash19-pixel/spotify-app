import React, { useContext, useEffect, useState } from 'react'
import {HeroIcons, HeroTop, HeroTopLeft, HeroTopRight, IconWrapper} from '../../styles/HomePage'
import AppContext from '../../AppContext'
import {AiOutlineLeft,AiOutlineRight,AiOutlinePlus,AiOutlineHeart} from 'react-icons/ai'
import {BiSolidUser} from 'react-icons/bi'
import { InputWrapper, SearchBar, SearchBarWrapper, PlaylistsWrapper,AddSongs,AddWrapper, AdddedSongsWrapper, ArtistName, ArtistWrapper, HeroTopWrapper, HeroWrapper, PlayListName, PlayListNameDesc, PlaylistDesc, PlaylistImage, PlaylistInfo, PlaylistInfoLeft, PlaylistInfoRight, PlaylistInfoWrapper, SearchAndAdd, SearchWrapper, SongCard, SongDetails, SongImg, SongName, AddedSongs, ShuffleAddedWrapper, ShuffleWrapper, Shuffle } from '../../styles/SelectedPlaylist'
import {HiOutlineSearch} from 'react-icons/hi'
import { toast,ToastContainer } from "react-toastify";
import {TiTickOutline} from 'react-icons/ti'
import {BsShuffle} from 'react-icons/bs'
import {MdFavorite} from 'react-icons/md'

const SelectedPlaylist = () => {


  
  const [search, setSearch] = useState('')
  const {playlistNumber,playlistInfo,setPlaylistInfo,song, setSongArray, setSongIndexValue,setAuto,isReduced,isExpanded} = useContext(AppContext)


  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const convertToLowerCase = (name) => {
    return name.toLowerCase()
  }


  const handleAddedSongs = (track) => {
    let increm = 0
    for(let i = 0; i <= playlistInfo[playlistNumber].audio.length; i++)
    {
       if(playlistInfo[playlistNumber].audio[i] !== track)
       {
        increm++
        continue
       }
       else
       {
          break
       }
    }

    const updatedPlaylist = [...playlistInfo]
    updatedPlaylist[playlistNumber].songs.push(track)
    updatedPlaylist[playlistNumber].audio.splice(increm,1)
    setPlaylistInfo(updatedPlaylist)
    localStorage.setItem('playlistInfo',JSON.stringify(updatedPlaylist))
  };
  
  const handleRemoveSongs = (index,track) => {
    const updatedPlaylistInfo = [...playlistInfo];
    updatedPlaylistInfo[playlistNumber].audio.push(track)
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

  const handleShuffle = () => {
    let increm = 1
    const updatedPlaylist = [...playlistInfo]

    for(let i = 0; i <= updatedPlaylist[playlistNumber].songs.length % 2; i++)
    {
      const initialSong = updatedPlaylist[playlistNumber].songs[i]
      updatedPlaylist[playlistNumber].songs[i] = updatedPlaylist[playlistNumber].songs[updatedPlaylist[playlistNumber].songs.length - increm]
      updatedPlaylist[playlistNumber].songs[updatedPlaylist[playlistNumber].songs.length - increm] = initialSong
      increm++
    }

    setPlaylistInfo(updatedPlaylist);
    localStorage.setItem('playlistInfo', JSON.stringify(updatedPlaylist));
  }
  

  return (
    <HeroWrapper style = {{maxWidth: isReduced ? "1250px" : "1040px"}}>
     <HeroTop style = {{maxWidth: isReduced ? "1250px" : "1040px"}}>
     <SearchAndAdd style = {{maxWidth: isReduced ? "1250px" : "1040px"}}>
        <SearchWrapper>
          {isExpanded && (<SearchBarWrapper style = {{maxWidth : "986px"}}>
            <InputWrapper>
              <IconWrapper style = {{color : "white"}}>
                <HiOutlineSearch />
              </IconWrapper>
              <SearchBar type = "text" placeholder = 'Add songs from here' onChange = {handleSearch} />
            </InputWrapper>
          </SearchBarWrapper>)}
          {isReduced && (<SearchBarWrapper style = {{maxWidth : "1250px"}}>
            <InputWrapper>
              <IconWrapper style = {{color : "white"}}>
                <HiOutlineSearch />
              </IconWrapper>
              <SearchBar type = "text" placeholder = 'Add songs from here' onChange = {handleSearch}/>
            </InputWrapper>
          </SearchBarWrapper>)}
        </SearchWrapper>
        {search && (<AddWrapper style = {{maxWidth: isReduced ? "1170px" : "946px"}} onBlur = {() => setSearch()}>
        {playlistInfo[playlistNumber].audio.filter((item) => {      
                    return search ? convertToLowerCase(item.name).includes(convertToLowerCase(search)) : ""
                  }).map((track,index) => (
          <SongCard key = {index} style = {{maxWidth: isReduced ? "1250px" : "986px"}}>
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
        </AddWrapper>)}
     </SearchAndAdd>
     </HeroTop>
     <PlaylistsWrapper style = {{maxWidth: isReduced ? "1200px" : "986px"}}>
     <PlaylistInfoWrapper style = {{maxWidth: isReduced ? "1250px" : "986px"}}>
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
      <ShuffleAddedWrapper style = {{maxWidth: isReduced ? "1250px" : "986px"}}>
        <ShuffleWrapper style = {{maxWidth: isReduced ? "1250px" : "986px"}}>
          <Shuffle>Playlist</Shuffle>
          <AddedSongs style={{fontSize : "20px", cursor: "pointer"}} onClick={handleShuffle}><BsShuffle /> </AddedSongs>
        </ShuffleWrapper>
      <AdddedSongsWrapper style = {{maxWidth: isReduced ? "1250px" : "986px"}}>  
        {playlistInfo[playlistNumber]?.songs?.map((song, index) => (
          <SongCard key = {index} onClick = {() => handlePlaySongs(index)} style = {{maxWidth: isReduced ? "1250px" : "986px"}}>
            <SongDetails>
              <SongImg src = {song.imageUrl}/>
            
            <ArtistWrapper>
              <SongName>{song.name}</SongName>
              <ArtistName>{song.artist}</ArtistName>
            </ArtistWrapper>
            </SongDetails>
            <AddSongs onClick={(e) => {e.stopPropagation(); handleRemoveSongs(index,song)}}>
              REMOVE
            </AddSongs>
          </SongCard>
          ))}
         
      </AdddedSongsWrapper>
      </ShuffleAddedWrapper>
     </PlaylistsWrapper>
    </HeroWrapper>
  )
}

export default SelectedPlaylist 