import React, { useState, useEffect, useContext } from 'react'
import { Hero, HeroTop,HeroTopLeft,HeroBottom,HeroIcons,HeroTopRight, IconWrapper,  SongWrapper, SongWrapperTop, SongImg, SongName, SongWrapperBottom, ArtistName } from '../../styles/HomePage'
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
import {BiSolidUser} from 'react-icons/bi'
import { InputWrapper, SearchBar, SearchBarWrapper, SearchedSongs } from '../../styles/Search'
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
    <Hero style = {{maxWidth: isReduced ? "1250px" : "1040px"}}> 
        <HeroTop style = {{maxWidth: isReduced ? "1250px" : "1040px"}}>
        <HeroTopLeft>
            <SearchBarWrapper>
                <InputWrapper>
                    <IconWrapper style = {{color : "white"}}>
                    <HiOutlineSearch />
                    </IconWrapper>
                    <SearchBar type = "text" placeholder='What do you want to listen?' onChange = {handleSearch}/>
                </InputWrapper>
            </SearchBarWrapper>
          </HeroTopLeft>
        </HeroTop>
        <HeroBottom style = {{maxWidth: isReduced ? "1250px" : "1040px", paddingTop: "10px"}}>
            <SearchedSongs style = {{maxWidth: isReduced ? "1250px" : "1040px"}}>
                {song.filter((item) => {
                    return convertToLowerCase(item.name).includes(convertToLowerCase(search)) 
                    
                }).map((track,index) => (
                <SongWrapper key = {index} onClick = {() => handleSongs(track)}>
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
            </SearchedSongs>
        </HeroBottom>
    </Hero>
  )
}

export default Search