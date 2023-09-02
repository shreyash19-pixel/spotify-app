import React, { useState, useEffect, useContext } from 'react'
import { Hero, HeroTop,HeroTopLeft,HeroBottom,HeroIcons,HeroTopRight, IconWrapper,  SongWrapper, SongWrapperTop, SongImg, SongName, SongWrapperBottom, ArtistName } from '../../styles/HomePage'
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
import {BiSolidUser} from 'react-icons/bi'
import { InputWrapper, SearchBar, SearchBarWrapper, SearchedSongs } from '../../styles/Search'
import { HiOutlineSearch } from 'react-icons/hi';
import AppContext from '../../AppContext'

const Search = () => {
    const [search, setSearch] = useState('')
    const [song, setSongData] = useState([]);

    const {setSongIndexValue,setSongArray} = useContext(AppContext)

    function convertFirstLetterToCaps(name)
    {
       const convertedName = (name.charAt(0).toUpperCase() + name.slice(1,name.length))
       return convertedName
    }

    useEffect(() => {
        fetch('/songs.json')
          .then((res) => res.json())
          .then((data) => {
            setSongData(data.tracks);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []);

      const handleSongs = (track) =>{
          setSongArray(track)
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
                    <SearchBar type = "text" placeholder='What do you want to listen?' onChange = {(e) => setSearch(e.target.value)}/>
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
                    return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search) ||
                     search.toUpperCase() === ""
                    ? item
                    : item.name.toUpperCase().includes(search) ||
                    convertFirstLetterToCaps(search) === '' 
                    ? item 
                    : convertFirstLetterToCaps(item.name).includes(search)
                    
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