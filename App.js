import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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


}