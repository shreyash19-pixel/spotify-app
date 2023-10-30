import React, {useState,useContext} from 'react'
import {ShowPassword,Navigate, CredentialsWrap, EmailInput, EmailInputWrapper, Heading, HeadingWrap, InputWrapper, SignUpContainer, SignUpForm, SignUpWrapper, SignUpHeading, SignUpHeadingWrap, SpotifyImg, SpotifyImgWrap, SubmitBtn, ErrorMessageWrap, ErrorMessage, NavSpan } from '../../styles/SignUp'
import SpotifyLogo from '../../assets/spotify-logo.png'
import {useFormik} from "formik"
import { signin } from '../../schemas'
import AppContext from '../../AppContext'
import { Link,useNavigate } from 'react-router-dom'
import {BiHide,BiShowAlt} from 'react-icons/bi'

const SignIn = () => {

  const [emailErr, setEmailErr] = useState('')
  const [passwordErr, setPasswordErr] = useState('')
  const {credentials, setCredentials} = useContext(AppContext)
  const [showPass, setShowPass] = useState(true)
  const navigate = useNavigate()

  const {values, errors,handleChange, touched, handleBlur, handleSubmit} = useFormik({
    initialValues : {
      email : "",
      password : ""
    },
    validationSchema: signin,
  })

  const handleCreds = () => {

    let emailExists = false;

    for (let i = 0; i < credentials.length; i++) {
      if (credentials[i].email === values.email && credentials[i].password === values.password) {
        alert("Login Successful");
        emailExists = true;
        navigate("/HomePage")
        break; 
      } else if (credentials[i].email === values.email && credentials[i].password !== values.password) {
        setPasswordErr('Incorrect Password');
        setEmailErr('');
        emailExists = true;
        break;
      }
    }

    if (!emailExists) {
      setEmailErr("Email doesn't exist");
      setPasswordErr('');
    }
  }

  const handleShowPass = () => {
    setShowPass(!showPass)
  }

 
  return (
    <SignUpContainer>
      <SignUpWrapper>
        <SignUpForm autoComplete='' onSubmit={handleSubmit}>
          <HeadingWrap>
            <SpotifyImgWrap>
              <SpotifyImg src = {SpotifyLogo}/>
            </SpotifyImgWrap>
            <Heading>Spotify</Heading>
          </HeadingWrap>
          <CredentialsWrap>
            <SignUpHeadingWrap>
              <SignUpHeading>SIGN IN</SignUpHeading>
            </SignUpHeadingWrap>
            <InputWrapper>
              <EmailInputWrapper>
                <EmailInput value = {values.email} onBlur = {handleBlur} onChange = {handleChange} id = "email" type = "text" placeholder='Email'/>
                {emailErr.length > 0 ? (<ErrorMessageWrap>
                  <ErrorMessage>{emailErr}</ErrorMessage>
                </ErrorMessageWrap>) : 
                (<ErrorMessageWrap>
                  {errors.email && touched.email ? (<ErrorMessage>{errors.email}</ErrorMessage>) : (<ErrorMessage>{''}</ErrorMessage>)} 
                </ErrorMessageWrap>)}
              </EmailInputWrapper>
              <EmailInputWrapper>
                <EmailInput value = {values.password} onBlur = {handleBlur} onChange = {handleChange} id = "password" type = {showPass ? "password" : "text"} placeholder = 'Password'/>
                <ShowPassword onClick = {handleShowPass}> {showPass ? <BiShowAlt/> : <BiHide/>}</ShowPassword>
                {passwordErr.length > 0 ? 
                (<ErrorMessageWrap>
                  <ErrorMessage>{passwordErr}</ErrorMessage>
                </ErrorMessageWrap>) :
                (<ErrorMessageWrap>
                  {errors.password && touched.password ? (<ErrorMessage>{errors.password}</ErrorMessage>) : (<ErrorMessage>{''}</ErrorMessage>)}
                </ErrorMessageWrap>)}
              </EmailInputWrapper>
            </InputWrapper>
          </CredentialsWrap>
          <EmailInputWrapper>
          <SubmitBtn onClick = {handleCreds} type = "submit">SIGN IN</SubmitBtn>
          </EmailInputWrapper>
          <EmailInputWrapper>
            <Navigate>Don't have an acoount? <Link to = "/SignUp"><NavSpan>Signup</NavSpan></Link></Navigate>
          </EmailInputWrapper>
        </SignUpForm>
      </SignUpWrapper>
    </SignUpContainer>
  )
}

export default SignIn