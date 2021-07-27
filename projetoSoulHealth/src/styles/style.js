import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({


    container:{
        width: 400,
        backgroundColor: '#9dc3d4',
    },
// HEADER

    header:{
        backgroundColor: '#9dc3d4',
        width: 350,
        paddingTop: 0,
        flexDirection: 'row',
        flexWrap: 'wrap',
      
    },
    
    logo:{
        width: 50,
        height: 50,
        marginLeft: 20
    },
    
    textoLogo:{
        fontSize: 30,
        marginTop: 10,
        marginLeft: 35,
        fontWeight: "600",
    },

    msgBoasVindas:{
        textAlign: "center",
        backgroundColor: "#95ebec",
        padding: 10,
    },

    //INFORMAÇÃO

    box:{
        backgroundColor: "#7fffd4",
        padding: 15,
        borderRadius: 35,
        width: 330,
        textAlign: "center",
        marginTop: 15,
        marginBottom: 25,
        marginLeft: 15,
    },

    txtTitulos:{
        textAlign: "center",
        marginTop: 7,
        marginBottom: 7,
        fontSize: 17,
        fontWeight: "bold",
    },

    // IMC
    campoEntrada:{
        height: 50,
        width: 100,
        borderWidth: 1,
        borderRadius: 7,
        margin: 15,
        textAlign: "center",
    },
    
    botaoImc:{
        borderRadius: 20,
        backgroundColor: "#95ebec",
        padding: 10,
        width: 80,
        textAlign: "center",
        marginLeft: 113,
        marginTop: 25,

    },
    
    inputs:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 30,
    }
    
})


