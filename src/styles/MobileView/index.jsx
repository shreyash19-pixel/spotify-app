import styled from 'styled-components'

export const HomeWrapperTablet = styled.div`
    width: 100%;
    height :100%;
    background: #121212;
    display: none;
    border-radius: 10px;
    position: relative;

    @media (max-width:768px)
    {   
        display: flex;
        flex-direction: column;
    }
`

export const TabletWidgets = styled.div`
    width: 100%;
    max-width: 768px;
    min-height: 55px;
    display: flex;
    gap: 35px;
    align-items: center;
    justify-content: center;
`
export const LibrarySect = styled.div`
    width: 100%;
    height :100%;
    background: linear-gradient(to bottom, #ff6e7f, #ffc5b6);
    display: flex;
    flex-direction: column;
    padding-inline: 10px;
    padding-top: 5px;
    gap: 20px;
    padding-bottom: 50px;
`

export const LibraryHeadingWrap = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 8px;
    align-items: center;
    border-bottom: 1px solid white;
    width: 100%;
    height:100%;
    max-height: 50px;
`
export const LibraryHeading = styled.h2`
    color: white;
`
export const LibraryPlaylists = styled.div`
    width: 100%;
    height: 100%;
    background-color: #121212;
`
export const TabletPlayer = styled.div`
    width: 100%;
    display: none;
    position: relative;
    padding-inline: 10px;
    @media (max-width: 768px)
    {
        display: flex;
        justify-content: space-between;
        cursor: pointer;
    }
`
export const ExpandTabletPlayer = styled.div`
    width: 100%;
    height: 100%;
    padding-inline: 10px;
    z-index: 5;
    position: absolute;
    top:0px;
    left:0px;
    display: none;
    padding-top: 15px;

    @media (max-width: 768px)
    {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: linear-gradient(to bottom, #ff9966, #ff5e62, #ff355d);

    }
`
export const CloseBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

export const SongInformation = styled.div`
    width:100%;
    max-width: 500px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:15px;
`
export const SongImgWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const SongImage = styled.img`
    width: 350px;
    height: 250px;

    @media (max-width: 425px)
    {
        width: 250px;
    }
`
export const SongArtistWrapper = styled.div`
    width: 100%;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    gap:5px;

    @media (max-width: 425px)
    {
        max-width: 250px;
    }
`

export const AudioName = styled.h2`
    color: white;
    font-size: 18px;
`

export const AudioArtist = styled.h3`
    color: #fff7f7;
    font-size: 12px;
`

export const AudioControlWrap = styled.div`
    width: 100%;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    @media (max-width: 425px)
    {
        max-width: 250px;
    }
`
export const ProgressBarWrap = styled.div`
    width: 100%;
    max-width: 350px;
    position: relative;

    @media (max-width: 425px)
    {
        max-width: 250px;
    }
`