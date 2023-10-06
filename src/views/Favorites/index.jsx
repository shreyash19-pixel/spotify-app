import React, { useState,useContext} from 'react'
import {Hero,HeroTop,HeroIcons, HeroTopLeft, HeroTopRight, HeroBottom, SongWrapper, SongWrapperTop, SongImg, SongName, SongWrapperBottom, ArtistName, LikeWrapper} from '../../styles/HomePage'
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
import {BiSolidUser} from 'react-icons/bi'
import { SearchedSongs } from '../../styles/Search'
import {MdFavorite} from 'react-icons/md'
import {AiOutlineHeart} from 'react-icons/ai'
import AudioPlayer from '../AudioPlayer'
import AppContext from '../../AppContext'

const Favorites = ({ likedSongs}) => {


    const [isLiked,setIsLiked] = useState(likedSongs)

    const {setSongIndexValue,setSongArray,setAuto,isReduced} = useContext(AppContext)

    const toggleLike = (index) => {
        if (isLiked[index]) {
            setIsLiked((prevLiked) => {
                const newLiked = [...prevLiked];
                newLiked[index] = false;
                localStorage.setItem("likedSongs",JSON.stringify(newLiked))
                return newLiked;
            });
        }
    }

    const handleSongs = (index) => {
        setSongIndexValue(index)
        setSongArray(isLiked)
        setAuto(true)
    }
    
  return (
    <Hero isClosed = {isReduced}>
        <HeroBottom isClosed = {isReduced}>
            <SearchedSongs isClosed = {isReduced}>
            {isLiked.map((track, index) => (
                    <SongWrapper key={index} onClick = {() => handleSongs(index)}>
                        <LikeWrapper
                            onClick={(e) => {e.stopPropagation();toggleLike(index);}}
                            disabled={isLiked[index]}
                        >
                            {isLiked[index] ? <MdFavorite /> : <AiOutlineHeart />}
                    </LikeWrapper>
                    <SongWrapperTop>
                        <SongImg src = {track.imageUrl} />
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

export default Favorites