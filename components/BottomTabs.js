import React, { Component } from 'react'
import {View,Text} from "react-native"
// import { Icon } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function BottomTabs() {
    return (
      <View style={{
            flexDirection:"row",
            margin:10, 
            marginHorizontal:30, 
            justifyContent:"space-between",
        }}>
            <Icon1 icon2="home" text="Home"/>
          {/* <Text>Home</Text> */}
          {/* <Text>sear</Text>
          <Text>Plac</Text>
          <Text>Cont</Text>
          <Text>Prof</Text> */}
      </View>
    );
}

const Icon1 = (props) =>{
    <FontAwesome5
        name ={props.icon2}
        size={25}
        style={{
            marginBottom:3,
            alignSelf: "center",
        }}
    />
}