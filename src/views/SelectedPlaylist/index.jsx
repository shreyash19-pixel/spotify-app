import React, { useContext, useState } from 'react'
import {EmptyMessage, EmptyMessageIcon, EmptyMessageWrapper, HeroTop} from '../../styles/HomePage'
import AppContext from '../../AppContext'
import {AiOutlinePlus} from 'react-icons/ai'
import { AddedSongContainer,InputWrapper, SearchBar, SearchBarWrapper, PlaylistsWrapper,AddSongs,AddWrapper, AdddedSongsWrapper, ArtistName, ArtistWrapper, HeroWrapper, PlayListName, PlayListNameDesc, PlaylistDesc, PlaylistImage, PlaylistInfoLeft, PlaylistInfoRight, PlaylistInfoWrapper, SearchAndAdd, SearchWrapper, SongCard, SongDetails, SongImg, SongName, AddedSongs, ShuffleAddedWrapper, ShuffleWrapper, Shuffle, AddContainer, PlaylistDescWrapper} from '../../styles/SelectedPlaylist'
import {HiOutlineSearch} from 'react-icons/hi'
import { toast} from "react-toastify";
import {BsShuffle} from 'react-icons/bs'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {BiSad} from 'react-icons/bi'
import {IconWrapper} from '../../styles/NavigationBar'

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
    toast.success("Song deleted", { autoClose: 2000 });
  }

  const handlePlaySongs = (index) =>{
    setSongArray(playlistInfo[playlistNumber].songs)
    setSongIndexValue(index)
    setAuto(true)
  }

  const handleShuffle = () => {
    const updatedPlaylist = [...playlistInfo]

    for(let i = 0; i < updatedPlaylist[playlistNumber].songs.length / 2; i++)
    {
      const initialSong = updatedPlaylist[playlistNumber].songs[i]
      updatedPlaylist[playlistNumber].songs[i] = updatedPlaylist[playlistNumber].songs[updatedPlaylist[playlistNumber].songs.length - (i + 1)]
      updatedPlaylist[playlistNumber].songs[updatedPlaylist[playlistNumber].songs.length - (i+1)] = initialSong
    }

    setPlaylistInfo(updatedPlaylist);
    localStorage.setItem('playlistInfo', JSON.stringify(updatedPlaylist));
  }

  return (
    <HeroWrapper isClosed = {isReduced}>
     <HeroTop isClosed = {isReduced}>
     <SearchAndAdd isClosed = {isReduced}>
        <SearchWrapper>
          {isExpanded && (<SearchBarWrapper isClosed = {isReduced}>
            <InputWrapper>
              <IconWrapper reducePadding style = {{color : "white"}}>
                <HiOutlineSearch />
              </IconWrapper>
              <SearchBar type = "text" placeholder = 'Add songs from here' onChange = {handleSearch} />
            </InputWrapper>
          </SearchBarWrapper>)}
          {isReduced && (<SearchBarWrapper isClosed = {isReduced}>
            <InputWrapper>
              <IconWrapper style = {{color : "white"}}>
                <HiOutlineSearch />
              </IconWrapper>
              <SearchBar type = "text" placeholder = 'Add songs from here' onChange = {handleSearch}/>
            </InputWrapper>
          </SearchBarWrapper>)}
        </SearchWrapper>
        {search && (
        <AddContainer isClosed = {isReduced}>
        <AddWrapper isClosed = {isReduced} onBlur = {() => setSearch()}>
        {playlistInfo[playlistNumber].audio.filter((item) => {      
                    return search ? convertToLowerCase(item.name).includes(convertToLowerCase(search)) : ""
                  }).map((track,index) => (
          <SongCard key = {index} isClosed = {isReduced}>
            <SongDetails>
              <SongImg src = {track.imageUrl}/>
              <ArtistWrapper>
                <SongName>{track.name}</SongName>
                <ArtistName>{track.artist}</ArtistName>
              </ArtistWrapper>
            </SongDetails>  
             <AddSongs onClick = {(e) => {e.stopPropagation(); handleAddedSongs(track)}}>
               <AiOutlinePlus/>
               </AddSongs>
             
          </SongCard>
          ))}
        </AddWrapper>
        </AddContainer>)}
     </SearchAndAdd>
     </HeroTop>
     <PlaylistsWrapper isClosed = {isReduced}>
     <PlaylistInfoWrapper isClosed = {isReduced}>
        <PlaylistInfoLeft>
            <PlaylistImage src = {playlistInfo[playlistNumber]?.image}/>
        </PlaylistInfoLeft>
        <PlaylistInfoRight isClosed = {isReduced}>
        <PlayListNameDesc>
          <PlayListName>{playlistInfo[playlistNumber]?.name}</PlayListName>
          <PlaylistDescWrapper>
          <PlaylistDesc>{playlistInfo[playlistNumber]?.description}</PlaylistDesc>
          </PlaylistDescWrapper>
        </PlayListNameDesc>
        </PlaylistInfoRight>
      </PlaylistInfoWrapper>
      <ShuffleAddedWrapper isClosed = {isReduced}>
        <ShuffleWrapper isClosed = {isReduced}>
          <Shuffle>Playlist</Shuffle>
          <AddedSongs style = {{cursor:"pointer"}} isClosed onClick={handleShuffle}><BsShuffle /> </AddedSongs>
        </ShuffleWrapper>
        <AddedSongContainer>
        {playlistInfo[playlistNumber].songs.length > 0 ?
      (<AdddedSongsWrapper isClosed = {isReduced}>  
        {playlistInfo[playlistNumber]?.songs?.map((song, index) => (
          <SongCard key = {index} onClick = {() => handlePlaySongs(index)} isClosed = {isReduced}>
            <SongDetails>
              <SongImg src = {song.imageUrl}/> 
            
            <ArtistWrapper>
              <SongName>{song.name}</SongName>
              <ArtistName>{song.artist}</ArtistName>
            </ArtistWrapper>
            </SongDetails>
            <AddSongs onClick={(e) => {e.stopPropagation(); handleRemoveSongs(index,song)}}>
            <RiDeleteBin6Line/>
            </AddSongs>
          </SongCard>
          ))}
         
      </AdddedSongsWrapper>):
      (
        <EmptyMessageWrapper>
          <EmptyMessage>No Songs Added Yet</EmptyMessage>
          <EmptyMessageIcon><BiSad/></EmptyMessageIcon>
        </EmptyMessageWrapper>
      )
    }
      </AddedSongContainer>
      </ShuffleAddedWrapper>
     </PlaylistsWrapper>
    </HeroWrapper>
  )
}

export default SelectedPlaylist 