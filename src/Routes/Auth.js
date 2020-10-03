import React, { useState, useEffect } from "react";
import { authService } from "fbase";
import styled from "styled-components";
import { dbService } from "../fbase";

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
  const [loggedId, setloggedId] = useState("");
  // const [loggedIds, setLoggedIds] = useState([]);

  const getLoggedIds = async () => {
    const dbLoggedIds = await dbService.collection("loggedID").get();
    console.log(dbLoggedIds);
  };
  useEffect(() => {
    getLoggedIds();
  }, []);

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
  console.log(email);
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newAccount) {
        //create Account
        await authService.createUserWithEmailAndPassword(email, password);
      } else {
        // 로그인 디비에서 지금 로그인 시도 할려는 아이디가 있는지 검색
        // 없다면, 로그인 실행
        // log in

        await authService.signInWithEmailAndPassword(email, password);
        // 로그인 실행 후에 현재 아이디를 로그인 목록 디비에 넣어 놓을 것
        await dbService.collection("loggedID").add({
          loggedId: email,
          createAt: Date.now(),
        });
        console.log(loggedId);
        setloggedId("");
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
