import React, { useState } from 'react';
import { Text,View,TextInput, StyleSheet, Pressable, Image,Alert } from 'react-native';
import { validateEmail } from '../utils';

const SubscribeScreen = () => {
  const [emailAddress, onChangeEmail] = useState('')
  const isButtonEnabled = validateEmail(emailAddress)
  // Add subscribe screen code here
  return <View style={styles.container}>
       <Image style={styles.lemonImage}
         source={require('../assets/little-lemon-logo-grey.png')}
       />
       <Text style={styles.text}>
         Subscribe to our newsletter for our latest delicious recipes!
       </Text>
       <TextInput
         placeholder='Type your email'
         style={styles.input}
         value = {emailAddress}
         onChangeText={onChangeEmail}/>

        <Pressable style = {[styles.button,
              !isButtonEnabled && styles.buttonDisabled
        ]}
          disabled={!isButtonEnabled}
          onPress= {() => {Alert.alert('Thanks for subscribing, stay tuned!')}}>
       <Text style={styles.buttonText}>
          Subscribe
       </Text>
    </Pressable>

     </View>;
};

const styles = StyleSheet.create({

  container : {
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center'
  },
  text:{
    fontSize:24,
    marginTop:30,
    marginRight:20,
    marginLeft:20
  },
  lemonImage:{
    height:150,
    width:150,
    resizeMode:'contain',
    marginTop:40
  },
  button: { 
    width:'80%',
    backgroundColor: '#495E57',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonDisabled: {
    backgroundColor: '#ccc', // Gray background when disabled
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    fontSize: 16,
    marginBottom: 20,
    marginTop:30}

})

export default SubscribeScreen;
