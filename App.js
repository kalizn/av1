import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

const TextArea = styled.Text`
  font-size: 25px;
`;

const InputArea = styled.TextInput`
  width: 90%;
  height: 50px;
  font-size: 18px;
  background-color: #EEE;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
`;

//cadeia de caracteres
let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export default function app(){
  //criação das states
  
  // função para a geração da senha
  function geraPsw(){
    let pass = '';
    let n = charset.length;

    if(size < 1 || size > 15) {
      alert('Tamanho da senha inválido');
    } else {
      // copia caracteres aleatórios para a senha
      for (let i = 0; i < size; i++){
        pass += charset.charAt(Math.floor(Math.random() * n))
      }
    }
    // atualiza o campo senha (psw)
    setPass(pass);
  }

  return (
    <Page>
      <ImageArea></ImageArea>
      <TextArea>Caracteres</TextArea>      
      <InputArea 
      placeholder = "Tamanho da senha (1 a 15)"
      placeholderTextColor="#000"
      keyboardType="numeric"
      value={pass}
      />
      <ResultArea></ResultArea>
      <TouchableOpacity onPress={geraPsw}>
      <Text>Gerar Senha</Text>
      </TouchableOpacity>
    </Page>
  );
}