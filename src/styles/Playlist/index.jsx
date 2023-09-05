import styled from 'styled-components'


export const CreatePlaylistWrapper = styled.div`
    border-radius: 30px;
    background-color: #2DB656;
    width: 100%;
    max-width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50px;
    cursor: pointer;
    gap:4px;

    &:hover{
        background-color: #4cce73;
    }
    
`
export const CreatePlaylist = styled.h1`
    color : white;
    font-size: 24px;
    font-weight: 500;
`

export const AddPlaylist = styled.div`
    color : white;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
     font-weight: 500;
     cursor:pointer;
`

export const PlaylistWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const ModalWrapper = styled.div`
    width: 100%;
    max-width: 600px;
    min-height: 400px;
    background-color: #282828;
    position : absolute;
    border-radius: 10px;
    top:30px;
    left:100px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
`


export const Modal = styled.div`
    width:100%;
    max-width: 530px;
    min-height: 330px;
    display: flex;
    flex-direction: column;
    gap:40px;
`
export const ModalTopWrapper = styled.div`
    display:flex;
    justify-content : space-between;

`

export const ModalTopLeft = styled.div`

`

export const ModalHeading = styled.h2`
    color : white;
    font-size : 28px;
`
export const ModalMiddleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 90px;
    gap:10px;
`
export const ModalMiddleTop = styled.div`
    display: flex;
    gap:20px;
`

export const ModalMiddleTopLeft = styled.div`
    min-height: 200px;
    width: 100%;
    max-width: 200px;
    background-color: #3E3E3E;
    font-size : 100px;
    display : flex;
    justify-content: center;
    align-items: center;
    
`


export const ModalMiddleTopRight = styled.div`
    min-height: 200px;
    width: 100%;
    max-width: 310px;   
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ModalMiddleBottom = styled.div`
    display:flex;
    justify-content:flex-end;
`

export const PlaylistName = styled.input`
    width: 100%;
    max-width: 330px;
    min-height: 40px;
    background-color: #3E3E3E;
    border:none;
    padding-left: 15px;
    outline : none;
    color : white;
`

export const PlaylistDesc = styled.textarea`
    width: 100%;
    max-width: 330px;
    background-color: #3E3E3E;
    border:none;
    padding-left: 15px;
    outline : none;
    color : white;
    min-height: 140px;
    padding-left: 15px;
    padding-top: 15px;
`
export const CreateButton = styled.div`
    width: 100%;
    max-width: 90px;
    min-height: 45px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    cursor:pointer;
    font-weight: 500;
`

export const ImagePreview = styled.img`
    width:200px;
    height:200px;
`

export const HiddenInput = styled.input`
    
`

export const SelectImage = styled.div`
width: 200px;
height: 200px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
font-size : 100px;
color : white;
`