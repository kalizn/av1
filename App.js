import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export default function App() {
  const [pswTam, setPswTam] = useState(''); // armazena o tamnho

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
    <View style={estilo.container}>
      <Image source={require('./assets/cadeado.png')} style={estilo.images}></Image>
      <Text style={estilo.title}> Caracteres </Text>

      <TextInput
        style={estilo.input}
        value={pswTam}         // valor dentro do componente
        onChangeText={ (pswTam) => setPswTam(pswTam) } // toda vez que o campo mudar ele é salvo
        placeholder="Tamanho da senha (1 a 15)"
        keyboardType="numeric"
      />


      <TouchableOpacity style={estilo.botao}
      onPress={geraPsw}>
        <Text style={estilo.textoBotao}>Gerar senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 30
  },
  input: {
    backgroundColor: '#DDD',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#000',
    fontSize: 23
  },
  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#ffa200',
    padding: 10
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 25
  },
  images: {
    alignSelf: "center",
    height: 100,
    width: 100,
    resizeMode: 'cover',
    marginTop: 90
  },
});