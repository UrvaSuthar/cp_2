import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <View>
        {/* <Logo /> */}
        <Header>AttendMe ✔️ </Header>
        <Paragraph>
          Login to Your Account And Start Attending The Leactures 📚
        </Paragraph>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('LoginScreen')}
        >
          Login
        </Button>
        <Button
          mode="outlined"
          onPress={() => navigation.navigate('RegisterScreen')}
        >
          Sign Up
        </Button>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  // container:{
  // }
})
