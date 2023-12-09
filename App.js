import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image } from 'react-native';

import Button_google from './Button'; 

export default function Telainicial() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require( "./assets/logo.png")}></Image>
          <View style={styles.Bloco_login}>
          <View><Text style={styles.Texto}>Bem-Vindo</Text>
          <View>
          <Button_google/>
          </View>
          </View>
          </View>
        
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#384001',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width:400,
    height:300,
    margin:"auto",
    padding:0,
    marginTop:120
  },
  Bloco_login:{
    width: 390, 
    height: 380,
    backgroundColor: '#A0A603',
     borderRadius: 60,
     position:"relative",
     marginTop:240
  },
  Texto:{
  fontSize:49,
  marginLeft:96,
  marginTop:20,
  marginBottom:20,
  color:"white",
  fontFamily:"inter"
  },
 
});



