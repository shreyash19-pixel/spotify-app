import React,{useRef, useState,useContext,useEffect} from 'react'
import {CreateButton,PlaylistDesc,Modal,PlaylistName,ModalMiddleWrapper,ModalTopWrapper ,AddPlaylist, PlaylistWrapper, ModalWrapper, ModalHeading,ModalMiddleTop, ModalTopLeft, ModalMiddleTopLeft, ModalMiddleTopRight, ModalMiddleBottom, ImagePreview, HiddenInput, SelectImage } from '../../styles/Playlist'
import {RxCross1} from "react-icons/rx"
import {FiMusic} from "react-icons/fi"
import AppContext from '../../AppContext';
import {toast} from "react-toastify"

const Playlist = () => {
    const imageRef = useRef(null)
    const inputRef = useRef(null)
    const textAreaRef = useRef(null) 

    const {setMinPlayer, song,playlist, setPlaylist,playlistName, setPlaylistName, playlistDesc, setPlaylistDesc, image, setImage,playlistInfo,setPlaylistInfo} = useContext(AppContext)

    const createPlaylist = () => {
        setMinPlayer(true)
        setPlaylist(!playlist)
        inputRef.current.value = ''
          textAreaRef.current.value = ''
          setImage(null)
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
        if (
          playlistName !== undefined &&
          playlistDesc !== undefined &&
          image !== undefined
        ) {
          const newPlaylistInfo = {
            name: playlistName,
            description: playlistDesc,
            image: image,
            audio: song,
            songs: []
          };
          setPlaylistInfo([...playlistInfo, newPlaylistInfo]);
          setImage(null)
          inputRef.current.value = ''
          textAreaRef.current.value = ''
          toast.success("Playlist created successfully!", {
            autoClose: 2000, 
            hideProgressBar: false, 
            closeOnClick: true, 
            pauseOnHover: true, 
          });
        } else {
          toast.error("Playlist name cannot be empty!", { autoClose: 2000 });
        }
      };

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
            <ModalWrapper>
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
                                <PlaylistName  ref = {inputRef} type = "text" placeholder='Name' onChange = {handleNewPlaylistName}/>
                                <PlaylistDesc ref = {textAreaRef} placeholder = "Add an optional description..." onChange = {handleNewPlaylistDesc}></PlaylistDesc>
                            </ModalMiddleTopRight>
                        </ModalMiddleTop>
                        <ModalMiddleBottom>
                            <CreateButton onClick = {handlePlaylistInfo}>
                                Create
                            </CreateButton>
                        </ModalMiddleBottom>
                    </ModalMiddleWrapper>
                </Modal>
            </ModalWrapper>
  )
}

export default Playlist
