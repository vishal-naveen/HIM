/* eslint-disable prettier/prettier */
import React from 'react';
import Buttons from '../components/Buttons'
import { Text, View, KeyboardAvoidingView, ScrollView, Image, Alert, StyleSheet, Button } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import TInput from '../components/TInput';
import AuthHeader from '../components/AuthHeader';
import PasswordIn from '../components/PasswordIn'

import { useNavigation } from '@react-navigation/native';

export default function Homeh({}) {

  const navigation = useNavigation();

    return (
      <KeyboardAvoidingView style={{backgroundColor:'#09172d'}}>
        <View style={{alignItems:'center', justifyContent:'center', height:"100%"}}>
          <View style={{alignItems:'center', bottom:95}}>
            <Text style={{fontSize:37,top:20, color:'#dfd1b8'}}>H.I.M</Text>
          </View>
          <View style={{bottom:40}}>
            <Text style={{fontSize:40, color:'#7e90ac', fontWeight:'bold', textAlign:'center'}}>
             1,527
              <Text style={{fontSize:40, color:'#7e90ac', fontWeight:'normal', textAlign:'center'}}> packages donated</Text>
            </Text>
          </View>
          <View>
            <Text style={{fontSize:27, color:'white', right:0, bottom:0}}>How you can help</Text>
          </View>
          <View style={{width:225, height:100, flexDirection:'row', bottom:-20, right:70}}>
            <View style={{width:225, height:100, left:100}}>
              <Buttons height={61} fontS={15} borderRa={8} color='black' textC='#7e90ac' title="Donate" onPress={()=>navigation.navigate('DonateCopy')}/>
            </View>
          </View>
          <View style={{bottom:-45, right:0}}>
            <Text style={{color:'#dfd1b8', fontSize:30, left:134}}>About Us</Text>
            <Text style={{color:'#dfd1b8', fontSize:17,paddingHorizontal:20, alignItems:'center', alignSelf:"center", alignContent:'center' }}>H.I.M is an application that is available on both iOS and Android for people in need after a hurricane. The purpose of H.I.M is to increase and manage food donations for the community by utilizing leftover food.
</Text>
          </View>
          <View style={{width:'100%', top:65, left:50}}>
            <Buttons height={56} fontS={15} borderRa={8} color='black' textC='#7e90ac' title="View Summary" onPress={()=>navigation.navigate('Summary')}/>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
}
