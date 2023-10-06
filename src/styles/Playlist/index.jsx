import styled from 'styled-components'


export const AddPlaylist = styled.div`
    color : white;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
     font-weight: 500;
     cursor:pointer;

     @media (min-width: 1367px) and (max-width:1440px)
    {
       font-size: 27px;
    }

`

export const PlaylistWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    position : absolute;
    top:100px;
    left:200px;

     @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: 1030px;
        min-height: 450px;
    }
`

export const ModalWrapper = styled.div`
    width: 100%;
    max-width: 600px;
    min-height: 400px;
    background-color: #282828; 
    border-radius: 10px; 
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;

    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: 630px;
        min-height: 430px;
    }
`


export const Modal = styled.div`
    width:100%;
    max-width: 530px;
    min-height: 330px;
    display: flex;
    flex-direction: column;
    gap:40px;

    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: 560px;
        min-height: 360px;
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

    @media (min-width: 1367px) and (max-width:1440px)
    {
        font-size: 30px;
    }
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

    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: 230px;
        min-height: 230px;
    }
    
`


export const ModalMiddleTopRight = styled.div`
    min-height: 200px;
    width: 100%;
    max-width: 310px;   
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: 340px;
        min-height: 230px;
    }
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

    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: 340px;
        min-height: 50px;
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

    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: 340px;
        min-height: 160px;
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
    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: 95px;
        min-height: 50px;
        font-size: 17px;
    }
`

export const ImagePreview = styled.img`
    width:200px;
    height:200px;

    @media (min-width: 1367px) and (max-width:1440px)
    {
        width: 230px;
        height: 230px;
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

@media (min-width: 1367px) and (max-width:1440px)
    {
        width: 230px;
        height: 230px;
    }
`