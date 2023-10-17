import React, {useContext} from 'react'
import {HeroMusicSec ,Hero, HeroBottom, SongWrapper, SongWrapperTop, SongImg, SongName, SongWrapperBottom, ArtistName, LikeWrapper, EmptyMessageWrapper, EmptyMessage, EmptyMessageIcon} from '../../styles/HomePage'
import {MdFavorite} from 'react-icons/md'
import AppContext from '../../AppContext'
import {BiSad} from 'react-icons/bi'

const Favorites = () => {

    const {song,setSongIndexValue,setSongArray,setAuto,isReduced,isLiked, setIsLiked} = useContext(AppContext)

    const toggleLike = (index) => {
        if (isLiked[index]) {
                const updatedArray = [...isLiked]
                updatedArray.splice(index,1)
                localStorage.setItem('likedSongs',JSON.stringify(updatedArray))
                setIsLiked(updatedArray)
            };
        }
    

    const handleSongs = (index) => {
        setSongIndexValue(index)
        setSongArray(isLiked)
        setAuto(true)
    }

  return (
    <Hero isClosed = {isReduced}>
        <HeroBottom isClosed = {isReduced}>
            {isLiked.includes(true) ? 
            (<HeroMusicSec isClosed = {isReduced}>
            {song.filter((_, index) => isLiked[index])
            .map((track, index) => (
                    <SongWrapper isClosed = {isReduced} key={index} onClick = {() => handleSongs(index)}>
                        <LikeWrapper
                            onClick={(e) => {e.stopPropagation();toggleLike(index);}}
                        >
                         <MdFavorite />
                    </LikeWrapper>
                    <SongWrapperTop>
                        <SongImg src = {track?.imageUrl} />
                        <SongName>{track?.name}</SongName>
                    </SongWrapperTop>
                    <SongWrapperBottom>
                        <ArtistName>
                        {track?.artist}
                        </ArtistName>
                    </SongWrapperBottom>
                </SongWrapper>
                ))}
            </HeroMusicSec>) :
            (
                <EmptyMessageWrapper>
                    <EmptyMessage>No Songs Added Yet</EmptyMessage>
                    <EmptyMessageIcon><BiSad/></EmptyMessageIcon>
                </EmptyMessageWrapper>
            ) 
            }
        </HeroBottom>
       
    </Hero>
  )
}

export default Favorites