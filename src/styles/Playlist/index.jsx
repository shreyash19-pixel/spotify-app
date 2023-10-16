import styled from 'styled-components'


export const AddPlaylist = styled.div`
    color : white;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
     font-weight: 500;
     cursor:pointer;
`


export const ModalWrapper = styled.div`
    width: 100%;
    max-width: 600px;
    min-height: 400px;
    background: #282828;
    border-radius: 10px; 
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    position: absolute;
    z-index: 56;

    @media (max-width: 768px)
    {
        max-width: 768px;
        background: linear-gradient(to bottom, #ff9966, #ff5e62, #ff355d);
        height: 100%;
        padding-top: 15px;
        border-radius: 0px;
        padding-inline: 20px;
    }
`


export const Modal = styled.div`
    width:100%;
    max-width: 500px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    gap:40px;

    @media (max-width: 768px)
    {
        max-width: 740px;
        height: 100%;
        gap:50px;
    }
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

    @media (max-width: 768px)
    {
        font-size: 25px;   
    }
`
export const ModalMiddleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 90px;
    gap:10px;

    @media (max-width: 768px)
    {
            
    }
`
export const ModalMiddleTop = styled.div`
    display: flex;
    gap:20px;
    justify-content: center;

    @media (max-width:768px)
    {
        flex-direction: column;
        align-items: center;
    }
`

export const ModalMiddleTopLeft = styled.div`
    height:100%;
    max-height: 200px;
    width: 100%;
    max-width: 200px;
    background-color: #3E3E3E;
    font-size : 100px;
    display : flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px)
    {
        max-width: 230px;
        background-color: white;
        max-height: 150px;
    }
`


export const ModalMiddleTopRight = styled.div`
    min-height: 200px;
    width: 100%;
    max-width: 310px;   
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 768px)
    {
        min-height: 130px;
        gap:12px;
        align-items: center;
        justify-content: center;
    }
`

export const ModalMiddleBottom = styled.div`
    display:flex;
    justify-content:flex-end;

    @media (max-width: 768px)
    {
            align-items: center;
            justify-content: center;
            min-height: 70px;
    }
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

    @media (max-width: 768px)
    {
        max-width: 230px;
        min-height: 30px;
        background-color: white;
        color: black;
    }
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

    @media (max-width: 768px)
    {
        max-width: 230px;
        min-height: 125px;
        font-size: 11px;
        background-color: white;
        color: black;
    }
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

    @media (max-width: 768px)
    {
        max-width: 70px;
        min-height: 35px;
        font-size: 14px;

    }
`

export const ImagePreview = styled.img`
    width:200px;
    height:200px;

    @media (max-width: 768px)
    {
        width: 230px;
        height: 150px;

    }
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

@media (max-width: 768px)
    {
        width: 230px;
        height: 150px;
        color: #8B7575;
    }
`