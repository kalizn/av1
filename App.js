import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
`;

const ImageArea = styled.SafeAreaView`
`;

const TextArea = styled.Text`
`;

const InputArea = styled.TextInput`
`;

const ResultArea = styled.SafeAreaView`
`;

//cadeia de caracteres
let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export default function app(){
  //criação das states
  const [tamPass, setTamPass] = useState('');
  
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
      <InputArea></InputArea>
      <ResultArea></ResultArea>
    </Page>
  );
}