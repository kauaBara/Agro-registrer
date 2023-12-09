import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , style , Image,TouchableOpacity } from 'react-native';


const Button_google = ()=> {
    return(
        <View>
            <View style={styles.botao_google}>
            <Image source={require( "./assets/google.png")}></Image>
            <TouchableOpacity >
           <Text style={{marginLeft:12}}>Continuar com Google</Text>
           </TouchableOpacity>
            </View>

            <View style={styles.botao_facebook}>
                <Image source={require( "./assets/facebook.png")}></Image>
            <TouchableOpacity >
            <Text style={{color:"#fff",marginLeft:10}}>Continuar com Facebook</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.botao_Linkedin}>
            <Image source={require( "./assets/Linkedin.png")}></Image>
            <TouchableOpacity >
            <Text style={{color:"#fff",marginLeft:10}}>Continuar com Linkedin</Text>
            </TouchableOpacity>
            </View>
            
            
        

    
        </View>
     
  
    )
    }



    const styles = StyleSheet.create({
        botao_google:{
            flexDirection:"row",
            backgroundColor:"#fff",
            display:"flex",
            marginBottom:15,
            borderRadius:30,
            maxWidth:"60%",
            maxHeight:"100%",
            justifyContent:"center",
            alignItems:"center",
            marginLeft:"20%",
            padding:7
          },
          botao_facebook:{
            flexDirection:"row",
            backgroundColor:"#1877F2",
            display:"flex",
            marginBottom:15,
            borderRadius:30,
            maxWidth:"60%",
            maxHeight:"100%",
            justifyContent:"center",
            alignItems:"center",
            marginLeft:"20%",
            padding:7
          },

          botao_Linkedin:{
            flexDirection:"row",
            backgroundColor:"#0B86CA",
            display:"flex",
            marginBottom:15,
            borderRadius:30,
            maxWidth:"60%",
            maxHeight:"100%",
            justifyContent:"center",
            alignItems:"center",
            marginLeft:"20%",
            padding:7
          },


      })

 export default Button_google 

    