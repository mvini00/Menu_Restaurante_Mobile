import * as React from 'react';
import {View,Text,StyleSheet, Image, ScrollView, Dimensions} from 'react-native';

const Separador = () => <View style ={estilo.separador} />

export default function Lanches(){
  
  return(

<View style={estilo.container}>

<Text style={estilo.titulo}> Menu Lanches </Text>
<ScrollView>
<Text style={estilo.nome}>X-Salada</Text>
<Image style={estilo.img} source={require('../assets/xsalada.png')}/>
<Text style={estilo.ingredientes}>Ingredientes: Pão de Hamburguer, Alface, Tomate, Hamburguer, Mussarela, Ovo</Text>

<Separador/>

<Text style={estilo.nome}>X-Burguer </Text>
<Image style={estilo.img} source={require('../assets/xburguer.png')}/>
<Text style={estilo.ingredientes}>Ingredientes: Pão de Hamburguer, Alface, Tomate, Hamburguer, Mussarela, Cebola, Picles, Maionese</Text>

<Separador/>

<Text style={estilo.nome}>X-Frango</Text>
<Image style={estilo.img} source={require('../assets/xfrango.png')}/>
<Text style={estilo.ingredientes}>Ingredientes: Pão de Hamburguer, Alface, Tomate, Frango, Mussarela</Text>

<Separador/>

<Text style={estilo.nome}>X-Calabresa</Text>
<Image style={estilo.img} source={require('../assets/xcalabresa.png')}/>
<Text style={estilo.ingredientes}>Ingredientes: Pão de Hamburguer, Calabresa, Mussarela, Cebola, Vinagrete</Text>

<Separador/>

<Text style={estilo.nome}>X-Egg</Text>
<Image style={estilo.img} source={require('../assets/xegg.png')}/>
<Text style={estilo.ingredientes}>Ingredientes: Pão de Hamburguer, Alface, Tomate, Hamburguer, Mussarela, Ovo</Text>

<Separador/>

<Text style={estilo.nome}>X-Bacon</Text>
<Image style={estilo.img} source={require('../assets/xbaconn.png')}/>
<Text style={estilo.ingredientes}>Ingredientes: Pão de Hamburguer, Hamburguer, Mussarela, Fatias de Bacon</Text>

</ScrollView>
</View>

  );
}
const largura = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#F57C00',
    padding: 10,
  },
  titulo:{
    fontSize: 40,
    marginTop: 30,
    textAlign:'center',
    padding: 20,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  separador:{
    marginVertical: 50,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#000'
  },
  nome:{
    marginTop:20,
    marginBottom:5,
    fontSize: 25,
    color: '#00000',
    fontWeight: 'bold',
    textAlign: 'center'
  },
    ingredientes:{
    marginTop:20,
    marginBottom:5,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#00000'
  },
  img:{
    width: 350,
    height: 250,
  }
});