import React, { useState, useEffect } from "react";
import { authService } from "fbase";
import styled from "styled-components";
import { dbService } from "../fbase";
import { withRouter } from "react-router-dom";

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

export let dockId = "";

const Auth = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");
  const [loggedIds, setLoggedIds] = useState([]);
  const [login, setLogin] = useState({
    loggIn: "",
  });

  const getLoggedIds = async () => {
    const dbLoggedIds = await dbService.collection("loggedID").get();
    dbLoggedIds.forEach((document) => {
      const loggedIdsObject = {
        ...document.data(),
        id: document.id,
      };
      setLoggedIds((prev) => [loggedIdsObject, ...prev]);
    });
  };

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
        await getLoggedIds();
        console.log("체크는 하는 거니?");
        const check = loggedIds.filter((id) => id.loggedId === email);
        if (check.length !== 0) {
          console.log("이미 다른 곳에서 접속중입니다.");
          setError("이미 다른 곳에서 접속중입니다.");
          setLogin({ loggIn: false });
          history.push("/");
        } else if (check.length === 0) {
          await authService.signInWithEmailAndPassword(email, password);
          setError("로그인 중입니다.");
          if (!login) {
            setLogin({ loggIn: true });
          }
          await getLoggedIds();
          await dbService
            .collection("loggedID")
            .add({
              loggedId: email,
              createAt: Date.now(),
            })
            .then(function (docRef) {
              // console.log("Document written with ID: ", docRef.id);
              dockId = docRef.id;
              dbService
                .collection("loggedID")
                .doc(docRef.id)
                .set({ id: docRef.id, loggedId: email });
            });
        }
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setNewAccount(false);
    }
  };

  useEffect(() => {
    getLoggedIds();
  }, []);

  return (
    <Container>
      <AuthFormBox>
        <Greeting>Time to DiceHunter</Greeting>
        <AuthForm style={{ marginBottom: "20px" }} onSubmit={onSubmit}>
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
        <p style={{ color: "white" }}>{error ? `Error : ${error}` : null}</p>
      </AuthFormBox>
    </Container>
  );
};

export default withRouter(Auth);
