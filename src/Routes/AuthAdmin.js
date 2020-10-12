import React, { useState } from "react";
import { authService, googleAuth } from "fbase";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(45, 63, 81);
`;
const Greeting = styled.div`
  color: whitesmoke;
  margin-bottom: 30px;
  font-size: 30px;
`;

const AuthFormBox = styled.div`
  width: 300px;
  height: 500px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  all: unset;
  width: 300px;
  height: 23px;
  padding: 5px;
  font-size: 16px;
  ::placeholder {
    color: rgba(255, 255, 255, 0.2);
    font-size: 14px;
    padding-left: 8px;
  }
  background-color: #4a5d70;
  border-radius: 32x;

  margin-bottom: 5px;
`;
const Button = styled.button`
  all: unset;
  width: 300px;
  padding: 5px;
  font-size: 16px;
  background-color: #4a5d70;
  /* border: 1px solid black; */
  :not(:last-child) {
    margin-bottom: 5px;
  }
  cursor: pointer;
`;

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
      console.log(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newAccount) {
        //create Account
        await authService.createUserWithEmailAndPassword(email, password);
      } else {
        // log in
        await authService.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const autoGenId = async (event) => {
    event.preventDefault();
    console.log("autoGenID");
    try {
      if (true) {
        for (let i = 0; i < 10; i++) {
          let aemail = "bravo_004" + i + "@busta.com";
          let apassword = "bravo_004" + i;
          console.log(aemail, apassword);
          await authService.createUserWithEmailAndPassword(aemail, apassword);
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  const socialOnclick = (event) => {
    const {
      target: { name },
    } = event;
    if (name === "google") {
      authService.signInWithPopup(googleAuth);
    }
  };

  return (
    <Container>
      <AuthFormBox>
        <Greeting>Time to DiceHunter</Greeting>
        <Button onClick={autoGenId}>
          {newAccount ? "Acreate" : "Create Account"}
        </Button>
        <AuthForm onSubmit={onSubmit}>
          <Input
            name="email"
            type="email"
            placeholder="e-mail"
            required
            value={email}
            onChange={onChange}
          ></Input>
          <Input
            name="password"
            type="password"
            placeholder="password"
            required
            value={password}
            onChange={onChange}
          ></Input>
          <Input
            style={{
              textAlign: "center",
              backgroundColor: "#c05c67",
              color: "whitesmoke",
              fontSize: 14,
            }}
            type="submit"
            value={newAccount ? "Create Account" : "Log In"}
          ></Input>
        </AuthForm>
        <Button onClick={socialOnclick} name="google">
          Continue with Google
        </Button>
        <Button onClick={toggleAccount}>
          {newAccount ? "login" : "Create Account"}
        </Button>

        <p>{error ? `error : ${error}` : null}</p>
      </AuthFormBox>
    </Container>
  );
};

export default Auth;
