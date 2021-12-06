import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

//cadeia de caracteres
let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export default function app(){
  //criação das states
  const [pass, setPass] = useState('');

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