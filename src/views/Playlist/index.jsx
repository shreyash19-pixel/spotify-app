import React,{useRef, useState,useContext,useEffect} from 'react'
import {Hero, HeroBottom,HeroBottomTop, HeroBottomTopHeading, HeroIcons, HeroTop, HeroTopLeft, HeroTopRight } from '../../styles/HomePage'
import {AiOutlineLeft,AiOutlineRight,AiOutlinePlus} from 'react-icons/ai'
import {BiSolidUser} from 'react-icons/bi'
import {CreateButton,PlaylistDesc,Modal,PlaylistName,ModalMiddleWrapper,ModalTopWrapper ,CreatePlaylistWrapper,CreatePlaylist,AddPlaylist, PlaylistWrapper, ModalWrapper, ModalHeading,ModalMiddleTop, ModalTopLeft, ModalMiddleTopLeft, ModalMiddleTopRight, ModalMiddleBottom, ImagePreview, HiddenInput, SelectImage } from '../../styles/Playlist'
import {RxCross1} from "react-icons/rx"
import {FiMusic} from "react-icons/fi"
import AppContext from '../../AppContext';

const Playlist = () => {
    const [modal, setModal] = useState(false)
    const imageRef = useRef()

    const {playlistName, setPlaylistName, playlistDesc, setPlaylistDesc, image, setImage,playlistInfo,setPlaylistInfo} = useContext(AppContext)

    const createPlaylist = () => {
        setModal(!modal)
    }

    const handleNewPlaylistName = (e) => {
        setPlaylistName(e.target.value)
    }

    const handleNewPlaylistDesc = (e) => {
        setPlaylistDesc(e.target.value)
    }

  

    useEffect(() => {
        localStorage.setItem("playlistInfo",JSON.stringify(playlistInfo))
    }, [playlistInfo]); 

   

    const handlePlaylistInfo = () => {
        if(playlistName !== undefined && playlistDesc !== undefined && image !== undefined)
        {
            const newPlaylistInfo = {
                name : playlistName,
                description : playlistDesc,
                image : image,
            }
            setPlaylistInfo([...playlistInfo,newPlaylistInfo])
            setModal(!modal)
        }
        else
        {
            alert("Empty")
        }
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setImage(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageClick = () => {
        imageRef.current.click();
    };

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
        <HeroBottomTop>
            <CreatePlaylistWrapper>
             <CreatePlaylist onClick = {createPlaylist}>
                Create Playlists
            </CreatePlaylist>
            <AddPlaylist>
                <AiOutlinePlus/>
            </AddPlaylist>
            </CreatePlaylistWrapper>
        </HeroBottomTop>
        <PlaylistWrapper>
            {modal && (<ModalWrapper>
                <Modal>
                    <ModalTopWrapper>
                        <ModalTopLeft>
                            <ModalHeading>
                                Create Playlist
                            </ModalHeading>
                        </ModalTopLeft>
                        <ModalTopLeft>
                            <AddPlaylist onClick = {createPlaylist}>
                                <RxCross1 />
                            </AddPlaylist>
                        </ModalTopLeft>
                    </ModalTopWrapper>
                    <ModalMiddleWrapper>
                        <ModalMiddleTop>
                            <ModalMiddleTopLeft>
                                <SelectImage onClick = {handleImageClick}>
                                     {image ? <ImagePreview src={image} alt="Uploaded" /> : <FiMusic/>}
                                <HiddenInput ref = {imageRef} type="file"accept="image/*" style = {{display : "none"}} onChange={handleImageChange} />
                                </SelectImage>
                            </ModalMiddleTopLeft>
                            <ModalMiddleTopRight>
                                <PlaylistName  type = "text" placeholder='Name' onChange = {handleNewPlaylistName}/>
                                <PlaylistDesc placeholder = "Add an optional description..." onChange = {handleNewPlaylistDesc}></PlaylistDesc>
                            </ModalMiddleTopRight>
                        </ModalMiddleTop>
                        <ModalMiddleBottom>
                            <CreateButton onClick = {handlePlaylistInfo}>
                                Create
                            </CreateButton>
                        </ModalMiddleBottom>
                    </ModalMiddleWrapper>
                </Modal>
            </ModalWrapper>)}
        </PlaylistWrapper>
      </HeroBottom>
    </Hero>
  )
}

export default Playlist
