import React from "react";
import {styles} from "../../src/styles/style";
import {View, Text} from "react-native";


export default function Informacao(props){
return(
    <View>
        <Text style={styles.msgBoasVindas}>{props.msgBoasVindas}</Text>
            <Text style={styles.txtTitulos}>.: Livro recomendado :.</Text>
        <Text style={styles.box}>
            <Text>Título: {props.titulo}{"\n"}{"\n"}</Text>
            <Text>Autor: {props.autor}{"\n"}{"\n"}</Text>
            <Text>Conteúdo: {props.conteudo}{"\n"} </Text>
        </Text>
        <Text style={styles.txtTitulos}>.: Curiosidade :.</Text>
        <Text style={styles.box}>{props.curiosidade}</Text>
        <Text style={styles.txtTitulos}>.: IMC :.</Text>
        <Text style={styles.box}>
        O índice de massa corporal (IMC) é uma medida internacional usada para calcular se uma pessoa está no peso ideal. {"\n"}{"\n"}
        Há alguns problemas em usar o IMC para determinar se uma pessoa está acima do peso. {"\n"}{"\n"}Por exemplo, pessoas musculosas podem ter um Índice de Massa Corporal alto e não serem gordas.{"\n"}{"\n"} O IMC também não é aplicável para crianças, idosos e podem mudar de acordo com a raça da pessoa.</Text>

        <Text style={styles.txtTitulos}>.: Dicas de exercícios físicos :.</Text>
            <Text style={styles.box}>
            <Text>Dica 1: Faça uma avaliação médica. {"\n"}Um dos primeiros passos para começar uma atividade física é passar por exames e avaliação médica. Inclusive, atualmente algumas academias exigem que você faça exames antes de começar a treinar. Todo esse cuidado garante a sua segurança e pode descobrir algumas orientações individuais na prática de exercícios.</Text>{"\n"}{"\n"}

            <Text>Dica 2: Defina uma rotina. {"\n"}Para acostumar melhor seu corpo e não correr o risco de ficar adiando a prática, o ideal é criar uma rotina, de preferência com uma meta. Ao incluir os exercícios em seu dia a dia, você faz com que seu corpo sinta falta da atividade.</Text>
            </Text>

        

    </View>
    )
};
