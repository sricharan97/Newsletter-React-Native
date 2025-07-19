import * as React from 'react';
import { SafeAreaView, Text, Pressable, Image, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return <SafeAreaView style={styles.container}>
    <Image style = {styles.lemonImage}
    source={require('../assets/little-lemon-logo.png')}/>
    <Text style={styles.text}>Little Lemon, your local Mediterranean Bistro</Text>
    <Pressable style = {styles.button} onPress= {() => {navigation.navigate('Subscribe')}}>
       <Text style={styles.buttonText}>
          Newsletter
       </Text>
    </Pressable>
  </SafeAreaView>;
};

const styles = StyleSheet.create({

  container : {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize: 24,              // Larger font for emphasis
    fontWeight: 'bold',        // Bold style
    textAlign: 'center',       // Center-align text
    letterSpacing: 2,          // Adds spacing between letters
    marginTop: 40,          
    marginBottom: 40,          // Dark color for visibility
  },
  lemonImage:{
    width: 300,                // Adjust the size to match the logo
    height: 300,               // Ensure it's a square shape
    resizeMode: 'contain',     // Ensure the image fits properly
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#495E57',  // Dark greenish shade (from screenshot)
    paddingVertical: 12,         // Vertical padding inside the button
    paddingHorizontal: 20,       // Horizontal padding inside the button
    borderRadius: 8,             // Rounded corners
    alignItems: 'center',        // Center text horizontally
    width: '80%',                // Set width for button
    alignSelf: 'center', 
    position: 'absolute',     // Position the button absolutely
    bottom: 50,              // Center button in the container
  },
  buttonText: {
    color: '#FFFFFF',            // White text color
    fontSize: 16,                // Readable font size
    fontWeight: 'bold',          // Bold text
    textTransform: 'uppercase',  // Uppercase the button label
  },

})
export default WelcomeScreen;
