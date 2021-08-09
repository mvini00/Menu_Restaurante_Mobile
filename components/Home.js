import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';


export default function Home(props){
  return(
    <View style = {estilo.container}> 
    <Text style = {estilo.titulo}> Cardápio Lanches </Text>
    

<TouchableOpacity style={estilo.btn} onPress={()=>{props.navigation.navigate('Lanches')}}>
<Image style = {estilo.img} source={require('../assets/logo.jpg')} />
</TouchableOpacity>

    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    flex:1,
     alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: '#000000'
   
  },
  img:{
    height: 400,
    width: 400,
  },
  titulo:{
    marginTop: 20,
    alignSelf: 'center',
    fontSize: 35,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },

})