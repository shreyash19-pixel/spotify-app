import React, { useState,useContext } from 'react'
import { Hero, HeroTop,HeroTopLeft,HeroBottom,  SongWrapper, SongWrapperTop, SongImg, SongName, SongWrapperBottom, ArtistName, HeroMusicSec } from '../../styles/HomePage'
import { InputWrapper, SearchBar, SearchBarWrapper} from '../../styles/Search'
import {IconWrapper} from '../../styles/NavigationBar'
import { HiOutlineSearch } from 'react-icons/hi';
import AppContext from '../../AppContext'

const Search = () => {
    const [search, setSearch] = useState('')
    const {setSongArray,song,setSongIndexValue,setAuto,isReduced} = useContext(AppContext)

    const handleSongs = (track) =>{
        
        let increm = 0

        for(let i = 0; i <= song.length; i++)
        {
            if(song[i] !== track)
            {
                increm++
                continue
            }
            else
            {
                break
            }
        }

        setSongIndexValue(increm)
        setSongArray(song)
        setAuto(true)
      }

      const handleSearch = (e) => {
        setSearch(e.target.value)
      }

      const convertToLowerCase = (name) => {
        return name.toLowerCase()
      }

return (
    <Hero isClosed = {isReduced}> 
        <HeroTop isClosed = {isReduced} topPadding sidePadding>
        <HeroTopLeft>
            <SearchBarWrapper >
                <InputWrapper>
                    <IconWrapper reducePadding style = {{color : "white"}}>
                    <HiOutlineSearch />
                    </IconWrapper>
                    <SearchBar type = "text" placeholder='What do you want to listen?' onChange = {handleSearch}/>
                </InputWrapper>
            </SearchBarWrapper>
          </HeroTopLeft>
        </HeroTop>
        <HeroBottom isClosed = {isReduced} topPadding reducePadding>
            <HeroMusicSec isClosed = {isReduced}>
                {song.filter((item) => {
                    return convertToLowerCase(item.name).includes(convertToLowerCase(search)) 
                    
                }).map((track,index) => (
                <SongWrapper isClosed = {isReduced} key = {index} onClick = {() => handleSongs(track)}>
                    <SongWrapperTop>
                        <SongImg src = {track.imageUrl}/>
                        <SongName>{track.name}</SongName>
                    </SongWrapperTop>
                    <SongWrapperBottom>
                        <ArtistName>
                        {track.artist}
                        </ArtistName>
                    </SongWrapperBottom>
                </SongWrapper>
                ))}
            </HeroMusicSec >
        </HeroBottom>
    </Hero>
  )
}

export default Search