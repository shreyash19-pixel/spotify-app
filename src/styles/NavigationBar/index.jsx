import styled from 'styled-components'


export const SideBar = styled.div`
    width: 100%;
    height: 100%;
    max-width: ${(props) => (props.reduce ? "100px" : "320px")};
    border-radius: 10px;
    height: 100%;
    display: flex;
    justify-content: center;
`
export const SideBarWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap:10px;

`
export const SpotifyHeadingWrapper = styled.div`

    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.reduce ? "center" : "space-between")};
    padding-right: 15px;
`
export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ExpandWrapper = styled.div`
    font-size: 30px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`   



export const SideBarTop = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:15px;
    background-color: #121212;
    height: 100%;
    max-height: 200px;
    border-radius: 10px;
    padding-top: 7px;

    @media (min-width: 769px) and (max-width: 1024px)
    {
        max-height: 164px;
    }
`


export const SideBarBottomTitleWrap = styled.div`
    padding-left: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
`

export const SideBarBottomTitle = styled.h2`
    color: #dadada;
    font-size: 27px;    

    @media (min-width: 769px) and (max-width: 1024px)
    {
        font-size: 21px;
    }
`

export const OptionWrapper = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    padding-left: ${(props) => (props.reduce ? "30px" : "15px")};
    gap:15px;
    background-color: ${(props) => (props.active ? 'white' : 'transparent')};

    @media (min-width: 769px) and (max-width: 1024px)
    {
        padding-left: ${(props) => (props.reduce ? "35px" : "15px")};
    }

`
export const IconWrapper = styled.div`
    font-size: ${(props) => (props.reduce ? "35px" : "27px")};
    display: flex;
    cursor: pointer;
    color : ${(props) => (props.active ? "black" : "white")};

    @media (max-width:768px)
    {   
        font-size: ${(props) => (props.reducePadding ? "21px":"35px")};
        color: white;
    }

    @media (min-width: 769px) and (max-width: 1024px)
    {
        font-size: ${(props) => (props.reduce ? "30px" : "20px")};
    }
    
`
export const AddPlaylists = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-right: 5px;
        

`

export const Home = styled.h3`
    font-size: 22px;
    color : ${(props) => (props.active ? "black" : "white")};

    @media (min-width: 769px) and (max-width: 1024px)
    {
        font-size: 18px;
    }
  
`

export const SideBarBottom = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #121212;
    border-radius: 10px;
    padding-top: 10px;    
    gap: 13px;
    padding-bottom: 70px;
`

export const ShowPlaylistContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y: scroll;
`


export const SpotifyImg = styled.img`
    width: 80px;

    @media (min-width: 769px) and (max-width: 1024px)
    {
        width: 65px;
    }
    

`

export const SpotifyName = styled.h1`
    color : White;
    font-size : 32px;

    @media (min-width: 769px) and (max-width: 1024px)
    {
        font-size: 25px;
    }

`
export const SideBarBottomUp = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 13px;
`

export const ShowPlaylistsWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction : column;
    gap:${(props) => (props.reduce ? "18px" : "17px")};
    padding-left: ${(props) => (props.reduce ? "5px" : "15px")};

    @media (max-width: 768px)
    {
        padding-left: 0px;
      
    }
`

export const MyPlaylistWrapper = styled.div`
    width: 100%;
    display: flex;
    gap:${(props) => (props.reduce ? "18px" : "17px")};
    padding-left: ${(props) => (props.reduce ? "0px" : "15px")};

    @media (max-width: 768px)
    {
        padding-left: 0px;
    }
`

export const ShowPlaylists = styled.div`
    width: 100%;
   display: flex;
   justify-content: ${(props) => (props.reduce ? "center" : "space-between")};
   align-items: center;
   cursor:pointer;
`
export const ShowPlaylistLeft = styled.div`
    display : flex;
    gap:15px;
    padding-left: ${(props) => (props.sidePadding ? "8px" : "0px")}
`

export const NewPlaylist = styled.div`
    
    display : flex;
    align-items: center;
    justify-content : center;
    color : white;
    font-size: ${(props) => (props.reduce ? "35px" : "25px")};
    cursor: pointer;

    @media (min-width: 769px) and (max-width: 1024px)
    {
        font-size: ${(props) => (props.reduce ? "30px" : "20px")};
    }
    
`

export const DeletePlaylist = styled.div`
    display : flex;
    align-items: center;
    justify-content : center;
    color : #adadad;
    font-size: 24px;

    &:hover{
        color: white
    }
`

export const PlaylistsImage = styled.img`
    width: ${(props) => (props.reduce ? "44px" : "32px")};
    height:  ${(props) => (props.reduce ? "44px" : "32px")};

    @media (min-width: 769px) and (max-width: 1024px)
    {
        width: ${(props) => (props.reduce ? "38px" : "28px")};
    height:  ${(props) => (props.reduce ? "38px" : "28px")};
    }
`
export const PlaylistsName = styled.h3`
    color : white;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 22px;

    @media (min-width: 769px) and (max-width: 1024px)
    {
        font-size: 18px;
    }
`
