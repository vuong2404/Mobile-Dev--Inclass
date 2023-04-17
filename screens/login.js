import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Button
} from "react-native";
import React, { useState, useEffect } from "react";
import loginImg from "../assets/pic1.png";

function Login() {
  const handleLogin = () => {
    let form = document.forms
    console.log(form)
  }
  return (
    <View style={style.container}>
      <Image source={loginImg} style={style.image} />

      <View style={style.inputcontainer}>
        <TextInput
          style={style.input}
          placeholderTextColor="#fff"
          placeholder="Email ID"
          textContentType="emailAddress"
          name="email"
        />
      </View>

      <View style={style.inputcontainer}>
        <TextInput
          style={style.input}
          placeholderTextColor="#fff"
          placeholder="Enter Password"
          secureTextEntry={true}
          textContentType="password"
          name="password"
        />
      </View>
      <Button title="Login" onPress={handleLogin} />
      <Text
        style={{
          color: "#fff",
          fontSize: 14,
          marginTop: 20,
        }}
      >
        Don't have an account yet?
      </Text>

      <TouchableOpacity>
        <Text
          style={{
            color: "#FDA43C",
            fontSize: 14,
            marginTop: 10,
            fontWeight: "700",
            letterSpacing: 1,
            textDecorationLine: "underline",
          }}
        >
          Create an account
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#4C51C6",
        height: "100%",
        width: "100%",
        padding: 10,
    },
    image: {
        width: 500,
        height: 300,
        marginBottom: 20,
        resizeMode: 'contain'
    },
    inputcontainer: {
        borderColor: "#fff",
        borderStyle: "solid",
        borderWidth: 2,
        height: 50,
        width: 320,
        borderRadius: 10,
        paddingLeft: 20,
        marginBottom: 20,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    buttoncontainer: {
        height: 50,
        width: 300,
    },
    iconcontainer: {
        width: 30,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        height: 50,
        width: 260,
        fontSize: 14,
        color: "#fff",
        fontWeight: "500",
    },
    button: {
        height: 50,
        width: 300,
        borderRadius: 20,
    },
});


export default Login;
