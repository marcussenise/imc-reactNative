import React, {useState} from "react";
import {styles} from "../../src/styles/style";
import Informacao from "../componentes/Informação";
import Imc from "../componentes/Imc";
import { Text, View } from "react-native";

export default function Content(){
    return(
        <>
        <View>
        <Informacao msgBoasVindas="Olá, bem-vindo ao Soul Health!" titulo="Os 7 pilares da saúde alimentar" autor="Sophie Deram" conteudo="Traz as reflexões e as ferramentas necessárias para você mudar seus hábitos e fazer as pazes com o peso, o corpo e a comida." curiosidade="Você sabia que a falta de atividade física mata 300 mil por ano no Brasil?"/>
        </View>
        
        <View>
        <Imc/>
        </View> 


        </>      



    )
};
