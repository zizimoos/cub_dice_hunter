import React, { useState } from "react";
import { authService } from "fbase";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
  /* border: 2px solid red; */
  border-radius: 2px;

  margin-bottom: 5px;
`;
const Submit = styled.input`
  all: unset;
  width: 300px;
  height: 23px;
  padding: 5px;
  font-size: 16px;
  text-align: center;
  color: whitesmoke;
  background-color: #c05c67;
  border-radius: 2px;
  cursor: pointer;
`;

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
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
        setNewAccount(false);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container>
      <AuthFormBox>
        <Greeting>Time to DiceHunter</Greeting>
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
          <Submit
            type="submit"
            value={newAccount ? "Create Account" : "Log In"}
          ></Submit>
        </AuthForm>
        <p>{error ? `Error : ${error}` : null}</p>
      </AuthFormBox>
    </Container>
  );
};

export default Auth;
