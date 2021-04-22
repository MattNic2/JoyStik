import React from 'react'
import Background from './Background.js';
import Paragraph from './Paragraph.js';
import Logo from './Logo.js';
import Header from './Header.js';
import Button from './Button.js';



export default function StartScreen({ navigation }) {

  
function handleLoginPress() {
  navigation.navigate('Login');
}

function handleRegisterPress() {
  navigation.navigate('Register');
}

  return (
    <Background>
      <Header>Welcome to</Header>
      <Logo />
      
      <Paragraph>
        To discover new games please login or sign up.
      </Paragraph>
      <Button
        mode="contained"
        onPress={handleLoginPress}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={handleRegisterPress}
      >
        Sign Up
      </Button>
    </Background>
  )
}
