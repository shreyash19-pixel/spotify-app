import React from 'react'
import styled from 'styled-components'
// import SignIn from '../../components/SignIn'
import HomePage from '../../views/HomePage'
// import SignUp from '../../components/SignUp'


const Home = () => {
  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap:32px;
    
  `
  return (
    <Container>
      {/* <SignIn />   */}
      <HomePage />
      </Container>
  )
}

export default Home