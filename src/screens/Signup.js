/* eslint-disable prettier/prettier */
import {React, useState} from 'react';
import Buttons from '../components/Buttons'
import { Text, View, KeyboardAvoidingView, ScrollView, Image, Alert } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import TInput from '../components/TInput';
import AuthHeader from '../components/AuthHeader';
import PasswordIn from '../components/PasswordIn';

import auth from '@react-native-firebase/auth';





export default function SignUp({navigation}) {

  
    const [emailp, setEmailp] = useState()
    const [passp, setPassp] = useState()

    function signuppro (email,password) {


      auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
    
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
    
        console.error(error);
      });
    }
    

    return (
      <KeyboardAvoidingView style={{backgroundColor:'#09172d'}}>
        <View style={{alignItems:'center', justifyContent:'center', height:"100%"}}>
          <View style={{alignItems:'center', bottom:145}}>
            <Image style={{width:100, height:100, right:70, top:90}} source={{uri:"https://www.transparentpng.com/thumb/hurricane/through-the-eyes-of-hurricanes-png-0.png"}}/>
            <View style={{bottom:-20, left:20}}>
            <Text style={{color:'#dfd1b8', fontSize:37}}>H.I.M</Text>
            </View>
          </View>
         <View style={{width: "100%", alignItems:'center', justifyContent:'center', bottom:50}}>
            <TInput color='#dfd1b8' onChangeText={(text)=>{console.log(text)}} placer={'Username'} />
            <TInput color='#dfd1b8' placer={'Email'} onChangeText={(text)=>{setEmailp(text)}}/>
            <TInput color='#dfd1b8' placer={'Phone Number'}/>
            <PasswordIn color='#dfd1b8' placer={'Password'} onChangeText={(text)=>{setPassp(text)}}/>
            <PasswordIn color='#dfd1b8' placer={'Re-enter Password'} />
            <Buttons height={41} fontS={15} borderRa={8} color='black' textC='#dfd1b8' onPress={() => {
                  signuppro(emailp,passp);
                  navigation.navigate('Homeh');
                }} title={'Sign Up'} />
          </View>
          <View style={{left:70, bottom:50}}>
            <Text style={{fontSize:15, right:110, top:75, color:'white'}}>Already have an account?</Text>
          </View>
          <View style={{top:-6, left: 70}}>
            <Buttons height={41} fontS={15} borderRa={8} color='#09172d' textC='#7e90ac' onPress={() => {
                  navigation.navigate('Login');
                }} title={'Login'} />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
}