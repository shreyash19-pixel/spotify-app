import styled, {keyframes} from 'styled-components'

export const HomeSect = styled.div`
    width: 100%;
    height: 100vh;
    height: 100dvh;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
   position: relative;
   padding-inline: 8px;

   @media (max-width:768px)
    {   
        padding-inline: 0px;
    }
`

export const HomeWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap:10px;
    padding-block: 10px;
    opacity : ${(props) => (props.isOpen ? "0.3" : "1")};

     @media (max-width:768px)
    {   
        display: none;
    }
`





export const Hero = styled.div`
    width: 100%;
    background-color: #121212;
    border-radius: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const HeroTop = styled.div`
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    min-height: 70px;
    padding-inline: ${(props) => (props.sidePadding ? "20px" : "0px")};
    display: flex;
    justify-content: space-between;
    padding-top: ${(props) => (props.topPadding ? "15px" : "0px")};

    @media (max-width:768px)
    {   
        min-height: 52px;
        padding-top: 10px;
    }
    

`

export const HeroTopLeft = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap:30px;
`

export const HeroTopRight = styled.div`
    display: flex;
    align-items: center;
`

export const HeroIcons = styled.div`
    background-color: #5e5b5b;
    border-radius: 100%;
    text-align: center;
    width: 40px;
    min-height: 40px;
    color:white;
    cursor: pointer;
    font-size: 20px;
    display : flex;
    align-items:center;
    justify-content: center;
`


export const HeroBottom = styled.div`
    width: 100%;
    height: 100%;
     overflow-y:scroll;
    display: flex;
    flex-direction: column;
    padding-inline: 14px;
    gap:15px;
    position: relative;
    padding-top: ${(props) => (props.topPadding ? "30px" : "40px")};
    
    @media (max-width:768px)
    {  
        background-color: #121212; 
        padding-inline: 0px;
        padding-top: ${(props) => (props.reducePadding ? "20px" : "40px")};
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        padding-top: ${(props) => (props.topPadding ? "40px" : "40px")};
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        padding-top: ${(props) => (props.topPadding ? "32px" : "40px")};
    }

    
`

export const HeroBottomTop = styled.div`
    display: flex;
    justify-content: flex-start;
`
export const HeroBottomTopHeading = styled.h1`
    color : white
`

export const HeroMusicSec = styled.div`
    width: 100%;
    position: absolute;
    overflow-y: scroll;
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(164px,1fr));
    flex-wrap : wrap;
    justify-content: center;
    padding-bottom: 70px;

    @media (max-width:381px)
    {   
        grid-template-columns: repeat(auto-fill, minmax(130px,1fr));
    }

    @media (max-width:768px)
    {   
        padding-left: 14px;
        padding-bottom: 50px;
    }

    @media (min-width: 1367px) and (max-width:1440px)
    {
        padding-left: ${(props) => (props.isClosed ? "10px" : "5px")};
    }   

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        gap: 25px;
    }
`
export const SongWrapper = styled.div`
    background-color: #222222;
    padding: 15px;
    border-radius: 10px;
    display : flex;
    flex-direction: column;
    gap:10px;
    cursor: pointer;
    position: relative;

    &:hover{
        background-color: #313131;
    }

`

const HeartbeatAnimation = keyframes`
0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const LikeWrapper = styled.div`
  position: absolute;
  top: 18px;
  right: 22px;
  font-size: 33px;
  color: #2DB656;
  &:active {
    animation: ${HeartbeatAnimation} 0.5s ease-in-out;
  }

`;

export const EmptyMessageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-bottom: 65px;
  @media (max-width: 425px)
    {
        gap:7px;
    }
`

export const EmptyMessage = styled.h1`
    color: grey;
    font-weight: 400;

    @media (max-width: 425px)
    {
        font-size: 24px;
    }
`

export const EmptyMessageIcon = styled.div`
  color: grey;
  font-size: 34px;
   display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 425px)
    {
        font-size: 26px;
    }
`

export const SongWrapperTop = styled.div`

`

export const SongImg = styled.img`
    width:100%;
    border-radius: 10px;
`
export const SongName = styled.h1`
    color : white;
    font-size: 24px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 600;

    @media (max-width: 768px)
    {
        font-size: 17px;
    }
`

export const SongSource = styled.source`
`

export const SongWrapperBottom = styled.div`
`

export const ArtistName = styled.h3`
    color : white;
    font-size: 18px;
    font-weight: 400;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (max-width: 768px)
    {
        font-size: 13px;
    }
`
