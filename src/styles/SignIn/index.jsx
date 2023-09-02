import styled from 'styled-components'
import MusicImg from '../../assets/background-img.jpg'

export const SignInSect = styled.div`
    width: 100%;
    min-height: 625px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${MusicImg});
    background-position: center;
`

export const SignInWrap = styled.div`
    width: 100%;
    max-width: 1350px;
    min-height: 625px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SignInForm = styled.form`
    width: 100%;
    max-width: 500px;
    min-height: 500px;
    border-radius: 10px;
    background-color: #2E2F33;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const SignInFormWrap = styled.div`
    width : 100%;
    max-width: 400px;
    min-height: 450px;
    display: flex;
    gap:30px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const SignInTop = styled.div`
    width:100%;
    max-width: 330px;
`

export const SignInTopWrap = styled.div`
    width:100%;
    max-width: 330px;
    display: flex;
    align-items: center;
    justify-content: center;
   
`

export const SpotifyImg = styled.img`
    width: 85px;
`
export const SpotifyHeading = styled.h1`
    color:white;
    font-size: 40px;

`

export const SignInMiddle = styled.div`
    width:100%;
    max-width: 330px;
    display: flex;
    flex-direction: column;
    gap:30px;
`

export const SignInMiddleTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap:55px;
`
export const SignInHeadingWrap = styled.div`
    cursor: pointer;
`
export const Signin = styled.span`
    color:white;
    font-weight: 500;
    font-size: 22px;
`

export const SignInMiddleMid = styled.div`
    display: flex;
    flex-direction: column;
    gap:10px;
`
export const UserNameWrap = styled.div`
    display: flex;
    gap:5px;
    flex-direction: column;
`


export const UserName = styled.input`
    padding: 10px 15px;
    width: 100%;
    max-width: 600px;
    border-radius: 20px;
    outline: none;
    border: none;
`

export const SignInMiddleBottom = styled.div`
    width: 100%;
    max-width: 330px;
`
export const SignInButton = styled.button`
    cursor: pointer;
    width: 100%;
    max-width: 330px;
    padding: 10px;
    border-radius: 20px;
    outline: none;
    border: none;
    background-color: #2DB656;
    color: white;
    font-weight: 500;
    font-size: 14px;

    &:hover{
        background-color: #44c56b;
    }
`

export const SignInBottom = styled.div`
    width:100%;
    max-width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ForgotPass = styled.p`
    color : rgb(111,113,116);
    cursor: pointer;
`


export const ErrorWrapper = styled.div`
    
`

export const Error = styled.p`
    color:red;
    font-size: 13px;
    padding-left: 11px;
    line-height: 1;
`