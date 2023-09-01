import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import firebase from '../../services/firebaseConnection';

export default function Login({changeStatus}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('login');

  function handleLogin() {
    if (type === 'login') {
      //Aqui fazemos o login
      const user = firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          changeStatus(user.user.uid);
        })
        .catch(err => {
          console.log(err);
          alert('Ops parece que deu algo errado.');
          return;
        });
    } else {
      // Aqui cadastramos o usuario
      const user = firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          changeStatus(user.user.uid);
        })
        .catch(err => {
          console.log(err);
          alert('Ops parecee que algo está errado!');
          return;
        });
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Seu e-mail"
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <TextInput
        placeholder="********"
        style={styles.input}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <TouchableOpacity
        style={[
          styles.handleLogin,
          {backgroundColor: type === 'login' ? '#3EA6F2' : '#141414'},
        ]}
        onPress={handleLogin}>
        <Text style={styles.loginText}>
          {type === 'login' ? 'Acessar' : 'Cadastrar'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          setType(type => (type === 'login' ? 'cadastrar' : 'login'))
        }>
        <Text style={{textAlign: 'center'}}>
          {type === 'login' ? 'Criar uma conta' : 'Já possuo uma conta'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#F2F6FC',
    paddingHorizontal: 10,
  },
  input: {
    marginBottom: 10,
    backgroundColor: '#FFF',
    borderRadius: 4,
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderColor: '#141414',
  },
  handleLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    marginBottom: 10,
    borderRadius: 4,
  },
  loginText: {
    color: '#FFF',
    fontSize: 17,
  },
});
