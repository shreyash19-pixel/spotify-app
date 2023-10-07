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

    @media (min-width: 1441px) and (max-width:1920px)
    {
       font-size: 38px;
    }

    @media (min-width: 1921px) and (max-width:2560px)
    {
        font-size: 45px;
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

    @media (min-width: 2415px) and (max-width:2560px)
    {
        max-width: 1130px;
        min-height: 720px;
        top:300px;
        left: 700px;
    }

    @media (min-width: 2220px) and (max-width: 2414px)
    {
        max-width: 1130px;
        min-height: 720px;
        top:300px;
        left: 660px;
    }

    @media (min-width: 1921px) and (max-width: 2219px)
    {
        max-width: 1130px;
        min-height: 720px;
        top:300px;
        left: 600px;
    }

     @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: 1030px;
        min-height: 450px;
    }

    @media (min-width: 1880px) and (max-width:1920px)
    {
        max-width: 1070px;
        min-height: 600px;
        left:450px;
    }

    @media (min-width: 1840px) and (max-width:1879px)
    {
        left:480px;
        top: 145px;
    }

    @media (min-width: 1800px) and (max-width:1839px)
    {
        left:490px;
        top: 150px;
        
    }

    @media (min-width: 1750px) and (max-width:1799px)
    {
        left:500px;
        top: 175px;
        
    }

    @media (min-width: 1710px) and (max-width:1749px)
    {
        left:485px;
        top: 175px;
        
    }

    @media (min-width: 1620px) and (max-width:1709px)
    {
        left:445px;
        top: 175px;
        
    }

    @media (min-width: 1580px) and (max-width:1619px)
    {
        left:395px;
        top: 215px;   
    }

    @media (min-width: 1500px) and (max-width:1579px)
    {
        left:365px;
        top: 175px;
        
    }

    @media (min-width: 1441px) and (max-width:1499px)
    {
        left:355px;
        top: 175px;
        
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

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: 800px;
        min-height: 510px;
    }

    @media (min-width: 1921px) and (max-width:2560px)
    {
        max-width: 1080px;
        min-height: 610px;
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

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: 680px;
        min-height: 390px;
    }

    @media (min-width: 1921px) and (max-width:2560px)
    {
        max-width: 970px;
        min-height: 440px;
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

    @media (min-width: 1441px) and (max-width:1920px)
    {
        font-size: 40px;
    }

    @media (min-width: 1921px) and (max-width:2560px)
    {
        font-size: 45px;
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

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: 270px;
        min-height: 270px;
    }

    @media (min-width: 1921px) and (max-width:2560px)
    {
        max-width: 380px;
        min-height: 310px;
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

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: 380px;
        min-height: 260px;
    }

    @media (min-width: 1921px) and (max-width:2560px)
    {
        max-width: 570px;
        min-height: 310px;
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
        font-size: 16px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: 380px;
        min-height: 55px;
        font-size: 19px;
    }

    @media (min-width: 1921px) and (max-width:2560px)
    {
        max-width: 570px;
        min-height: 70px;
        font-size: 24px;
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
        font-size: 16px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: 390px;
        min-height: 200px;
        font-size: 19px;
    }

    @media (min-width: 1921px) and (max-width:2560px)
    {
        max-width: 570px;
        min-height: 220px;
        font-size: 24px;
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

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: 100px;
        min-height: 55px;
        font-size: 20px;
    }

    @media (min-width: 1921px) and (max-width:2560px)
    {
        max-width: 105px;
        min-height: 65px;
        font-size: 22px;
        border-radius: 40px;
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

    @media (min-width: 1441px) and (max-width:1920px)
    {
       width:270px;
       height:270px;
    }

    @media (min-width: 1921px) and (max-width:2560px)
    {
        width:380px;
        height:310px;
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

    @media (min-width: 1441px) and (max-width:1920px)
    {
       width:270px;
       height:270px;
    }
    @media (min-width: 1921px) and (max-width:2560px)
    {
        width:380px;
        height:310px;
    }
`