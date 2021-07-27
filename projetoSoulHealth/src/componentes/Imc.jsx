import React, {useState} from "react";
import {styles} from "../styles/style";
import {TextInput, Text, TouchableOpacity, View, toFixed} from 'react-native';

export default function Imc(){
    const[state, setState] = useState({
        peso: "",
        altura: "",
    });

    const[resultado, setResultado] = useState("");

    const handleInputChange = (nome, valor) => {
        setState({
            ...state, [nome]:valor
        })
    }

    const calculo = () =>{
        const resultadoImc = (state.peso/(state.altura*state.altura)).toFixed(2)

        setResultado(resultadoImc);

        if(resultadoImc<18.5){
            setResultado(`Seu IMC é de ${resultadoImc}. ${"\n"} Você está abaixo do peso.
                ${"\n"} Possíveis sintomas: fadiga, stress, ansiedade.  `
            )
        } else if(resultadoImc>=18.5 && resultadoImc<=24.9){
            setResultado(`Seu IMC é de ${resultadoImc}. ${"\n"} Você está com um peso normal.
            ${"\n"} Menor risco de doenças cardíacas e vasculares.  `
            )
        } else{
            setResultado(`Seu IMC é de ${resultadoImc}. ${"\n"} Você está acima do peso.
            ${"\n"} Possíveis sintomas: Fadiga, má circulação, varizes..  `
            )
        }


    };
    

    
    return(
        <View style={styles.box}>
        
        <Text style={styles.txtTitulos}>Calcule seu IMC:{"\n"}</Text>
        <View style={styles.inputs}>
        <TextInput style={styles.campoEntrada} placeholder="Peso: " 
        keyboardType="numeric"
        onChangeText={
            (valor)=>handleInputChange("peso", valor)}
        />

        <TextInput style={styles.campoEntrada} placeholder="Altura: "
        keyboardType="numeric"
        onChangeText={
            (valor)=>handleInputChange("altura", valor)}
        />
        </View>

        <TouchableOpacity onPress={calculo} >
        <Text style={styles.botaoImc}>Calcular</Text>
        </TouchableOpacity> 
        <Text>{"\n"}{"\n"}{resultado}</Text>
        
        </View>

    )
}
