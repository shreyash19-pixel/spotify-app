import React, {useState, useEffect,useContext} from 'react'
import {SongName,ArtistName, Hero, HeroBottom, HeroIcons, HeroTop, HeroTopLeft, HeroTopRight, SongImg, SongWrapper, SongWrapperBottom, SongWrapperTop} from '../../styles/HomePage'
import { SearchedSongs } from '../../styles/Search'
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
import {BiSolidUser} from 'react-icons/bi'
import AppContext from '../../AppContext'

const MyPlaylist = () => {

    const [myPlaylist, setMyPlaylist] = useState([])

    const {setSongArray, setSongIndexValue,setAuto} = useContext(AppContext)

    useEffect(() => {
        fetch('/songs.json')
          .then((res) => res.json())
          .then((data) => {
            setMyPlaylist(data.playlist);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []);

      const handlePlaySong = (index) => {
            setSongArray(myPlaylist)
            setSongIndexValue(index)
            setAuto(true)
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
      </HeroTopLeft>
      <HeroTopRight>
        <HeroIcons>
            <BiSolidUser />
        </HeroIcons>
      </HeroTopRight>
      </HeroTop>
      <HeroBottom>
        <SearchedSongs>
            {myPlaylist.map((songs, index) => (
                <SongWrapper key = {index} onClick = {() => handlePlaySong(index)}>
                    <SongWrapperTop>
                        <SongImg src = {songs.imageUrl}/>
                        <SongName>{songs.name}</SongName>
                    </SongWrapperTop>
                    <SongWrapperBottom>
                        <ArtistName>
                            {songs.artist}
                        </ArtistName>
                    </SongWrapperBottom>
                </SongWrapper>
            ))}
        </SearchedSongs>
      </HeroBottom>
    </Hero>
  )
}

export default MyPlaylist