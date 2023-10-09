import styled,{keyframes} from 'styled-components'

export const MusicPlayerWrapper = styled.div`
  width: 100%;
  max-width: 1340px;
  min-height: 80px;
  background-color: black;
  position: absolute;
  bottom: 0px;
  display: flex;

  @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: 1440px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: 1920px;
        min-height: 100px;
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        max-width: 2560px;
        min-height: 120px;
    }
    @media (min-width: 1141px) and (max-width: 1254px)
    {
        min-height: 80px;
    }

`
export const SongInfo = styled.div`
    width:100%;
    max-width: ${(props) => (props.isLarge ? "85px" : "305px")};
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:15px;

    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: ${(props) => (props.isLarge ? "105px" : "330px")};
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: ${(props) => (props.isLarge ? "130px" : "400px")};
        gap: 17px;
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        max-width: ${(props) => (props.isLarge ? "170px" : "520px")};
        gap: 24px;
    }

    @media (min-width: 1141px) and (max-width: 1255px)
    {
        max-width: ${(props) => (props.isLarge ? "90px" : "275px")};
    }


    @media (min-width: 1025px) and (max-width: 1140px)
    {
        max-width: ${(props) => (props.isLarge ? "85px" : "260px")};
    }

    
    @media (min-width: 769px) and (max-width: 1050px)
    {

        max-width: ${(props) => (props.isLarge ? "85px" : "245px")};
    }


`
export const SongInfoImgWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const SongInfoImg = styled.img`
    width: 55px;
    height: 55px;
     border-radius: 50%;
     animation: ${Rotate} 4s linear infinite;

     @media (min-width: 769px) and (max-width:1024px)
    {
        width: 50px;
        height: 50px;
    }

    @media (min-width: 1025px) and (max-width:1366px)
    {
        width: 55px;
        height: 55px;
    }

     @media (min-width: 1367px) and (max-width:1440px)
    {
        width: 60px;
        height: 60px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        width: 75px;
        height: 75px;
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        width: 85px;
        height: 85px;
    }

`


export const SongInfoArtistWrap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 200px;

    @media (min-width: 1367px) and (max-width:1440px)
    {
       max-width: 225px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
       max-width: 270px;
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        max-width: 355px;
    }

    @media (min-width: 1141px) and (max-width: 1254px)
    {
        max-width: 170px;
    }

    @media (min-width: 1025px) and (max-width: 1140px)
    {
        max-width: 165px;
    }

    
    @media (min-width: 769px) and (max-width: 1050px)
    {
        max-width: 155px;
    }

    


`
export const SongInfoSongName = styled.h1`
  color : white;
  font-size: 24px;
  font-weight: 600;
  overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (min-width: 769px) and (max-width:1024px)
    {
        font-size: 21px;
    }

    @media (min-width: 1025px) and (max-width:1366px)
    {
        font-size: 23px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        font-size: 30px;
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        font-size: 35px;
    }

`

export const SongInfoArtistName = styled.h3`
  color : #dbdada;
  font-size: 17px;
  font-weight: 400;
  overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (min-width: 769px) and (max-width:1024px)
    {
        font-size: 13px;
    }

    @media (min-width: 1025px) and (max-width:1366px)
    {
        font-size: 16px;
    }


    @media (min-width: 1367px) and (max-width:1440px)
    {
        font-size: 20px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        font-size: 25px;
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        font-size: 30px;
    }

`

export const MusicPlayer = styled.div`
    width: 100%;
    max-width: ${(props) => (props.isClosed ? "1260px" : "1040px")};
    min-height: 80px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-left: 6px;

    @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: ${(props) => (props.isClosed ? "1330px" : "1100px")};
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: ${(props) => (props.isClosed ? "1770px" : "1505px")};
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        max-width: ${(props) => (props.isClosed ? "2350px" : "2195px")};
    }
`
export const StartTimeWrapper = styled.div`
    position: absolute;
    left:15px;
    top:15px;
`
export const StartTime = styled.h3`
    color : white;

    @media (min-width: 1367px) and (max-width:1440px)
    {
        font-size: 23px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        font-size: 25px;
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
       font-size: 32px;
    }
`
export const EndTimeWrapper = styled.div`
    position: absolute;
    right:15px;
    top:15px;
`

export const ControlsWrapper = styled.div`
    width:100%;
    max-width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 75px;
    gap:25px;

    @media (min-width: 1367px) and (max-width:1440px)
    {
       max-width: 350px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
       max-width: 480px;
       min-height: 95px;
       gap: 30px;
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
       max-width: 550px;
       min-height: 115px;
       gap: 40px;
    }
    
`
export const NextWrapper = styled.div`
    background-color: white;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media (min-width: 1367px) and (max-width:1440px)
    {
        width: 50px;
        height: 50px;
        font-size: 28px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        width: 65px;
        height: 65px;
        font-size: 39px;
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
       width: 75px;
       height:75px;
       font-size: 48px;
    }
`
export const PlayWrapper = styled.div`
    background-color: white;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media (min-width: 1367px) and (max-width:1440px)
    {
        width: 55px;
        height: 55px;
        font-size: 28px;
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        width: 75px;
        height: 75px;
        font-size: 44px;
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
       width: 90px;
       height:90px;
       font-size: 53px;
    }
`

export const SongAudio = styled.audio`
`

export const ProgressBar = styled.input`    
  -webkit-appearance: none;
  width:100%;
  max-width: ${(props) => (props.isClosed ? "1250px" : "1030px")};
  height: 6px;
  background-color: green;
  border-radius: 4px;
  cursor: pointer;

  &::-webkit-slider-thumb{
    -webkit-appearance: none;
    background-color: white;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 8px solid green;
  }

  @media (min-width: 1367px) and (max-width:1440px)
    {
        max-width: ${(props) => (props.isClosed ? "1300px" : "1078px")};
        position: relative;
        left: ${(props) => (props.isClosed ? "5px" : "7px")};
    }

    @media (min-width: 1441px) and (max-width:1920px)
    {
        max-width: ${(props) => (props.isClosed ? "1760px" : "1495px")};
        position: relative;
        left: ${(props) => (props.isClosed ? "11px" : "7px")};
    }

    @media (min-width: 1921px) and (max-width: 2560px)
    {
        max-width: ${(props) => (props.isClosed ? "2365px" : "2010px")};
        position: relative;
        left: ${(props) => (props.isClosed ? "11px" : "0px")};
    }


  
`