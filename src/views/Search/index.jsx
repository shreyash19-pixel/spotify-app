import React, { useState, useEffect, useContext } from 'react'
import { Hero, HeroTop,HeroTopLeft,HeroBottom,HeroIcons,HeroTopRight, IconWrapper,  SongWrapper, SongWrapperTop, SongImg, SongName, SongWrapperBottom, ArtistName } from '../../styles/HomePage'
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
import {BiSolidUser} from 'react-icons/bi'
import { InputWrapper, SearchBar, SearchBarWrapper, SearchedSongs } from '../../styles/Search'
import { HiOutlineSearch } from 'react-icons/hi';
import AppContext from '../../AppContext'

const Search = () => {
    const [search, setSearch] = useState('')
  

    const {setSongArray,song,setAuto} = useContext(AppContext)


      const handleSongs = (track) =>{
          setSongArray(track)
          setAuto(true)
      }

      const handleSearch = (e) => {
        setSearch(e.target.value)
      }

      const convertToLowerCase = (name) => {
        return name.toLowerCase()
      }

      
  return (
    <Hero>
        <HeroTop>
        <HeroTopLeft>
            <HeroIcons>
              <AiOutlineLeft />
            </HeroIcons>
            <HeroIcons>
              <AiOutlineRight />
            </HeroIcons>
            <SearchBarWrapper>
                <InputWrapper>
                    <IconWrapper style = {{color : "white"}}>
                    <HiOutlineSearch />
                    </IconWrapper>
                    <SearchBar type = "text" placeholder='What do you want to listen?' onChange = {handleSearch}/>
                </InputWrapper>
            </SearchBarWrapper>
          </HeroTopLeft>
          <HeroTopRight>
            <HeroIcons>
              <BiSolidUser />
            </HeroIcons>
          </HeroTopRight>
        </HeroTop>
        <HeroBottom>
            <SearchedSongs>
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