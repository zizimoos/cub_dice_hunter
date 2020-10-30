import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import BarChart from "../../Components/BarChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchDollar } from "@fortawesome/free-solid-svg-icons";

import { authService } from "../../fbase";
import { dbService } from "../../fbase";
import { dockId } from "../../Routes/Auth";

import ModalApp from "../../Components/Modal";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  position: absolute;
  width: 30%;
  top: 15px;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  height: 40px;
  padding-left: 30px;
  font-size: 16px;
  border-radius: 3px;
  background-color: white;
  ::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 7px;
  right: -25px;
  cursor: pointer;
`;

const ErrorMessage = styled.span`
  position: absolute;
  top: 80px;
  font-size: 16;
  color: whitesmoke;
`;

const AuthForm = styled.form`
  position: absolute;
  top: 65px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const SInput = styled.input`
  all: unset;
  width: 130px;
  height: 16px;
  padding: 5px;
  font-size: 14px;
  text-align: center;
  background-color: #4a5d70;
  background-color: white;
  ::placeholder {
    padding-left: 8px;
  }
  border-radius: 2px;
  margin-right: 5px;
  margin-left: 5px;
`;

const listner = async (event) => {
  event.preventDefault();
  event.returnValue = "";
  await dbService.collection("loggedID").doc(`${dockId}`).delete();
  authService.signOut();
};
const enablePrevent = () => window.addEventListener("beforeunload", listner);

const recomend = (percent) => {
  let recomendArray = [];
  recomendArray.push(percent[0]);
  recomendArray.push(percent[0] + percent[1]);
  recomendArray.push(percent[0] + percent[1] + percent[2]);
  recomendArray.push(percent[0] + percent[1] + percent[2] + percent[3]);
  recomendArray.push(
    percent[0] + percent[1] + percent[2] + percent[3] + percent[4]
  );
  recomendArray.push(
    percent[0] + percent[1] + percent[2] + percent[3] + percent[4] + percent[5]
  );
  recomendArray.push(
    percent[0] +
      percent[1] +
      percent[2] +
      percent[3] +
      percent[4] +
      percent[5] +
      percent[6]
  );
  recomendArray.push(
    percent[0] +
      percent[1] +
      percent[2] +
      percent[3] +
      percent[4] +
      percent[5] +
      percent[6] +
      percent[7]
  );
  recomendArray.push(
    percent[0] +
      percent[1] +
      percent[2] +
      percent[3] +
      percent[4] +
      percent[5] +
      percent[6] +
      percent[7] +
      percent[8]
  );
  recomendArray.push(
    percent[0] +
      percent[1] +
      percent[2] +
      percent[3] +
      percent[4] +
      percent[5] +
      percent[6] +
      percent[7] +
      percent[8] +
      percent[9]
  );
  recomendArray.push(
    percent[0] +
      percent[1] +
      percent[2] +
      percent[3] +
      percent[4] +
      percent[5] +
      percent[6] +
      percent[7] +
      percent[8] +
      percent[9] +
      percent[10]
  );
  recomendArray.push(
    percent[0] +
      percent[1] +
      percent[2] +
      percent[3] +
      percent[4] +
      percent[5] +
      percent[6] +
      percent[7] +
      percent[8] +
      percent[9] +
      percent[10] +
      percent[11]
  );

  return recomendArray;
};

const HomePresenter = ({
  chance,
  percent,
  sum,
  overfifteen,
  loading,
  error,
  handleSubmit,
  searchTerm,
  updateTerm,
  onSubmit,
  onChangeServer,
  onChangeClient,
  serverSeed,
  clientSeed,
  findDBForSameTerm,
}) => {
  enablePrevent();
  const recommendArray = recomend(percent);
  return (
    <Container>
      <>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Copy and paste the Numbers of step"
            value={searchTerm}
            onChange={updateTerm}
          ></Input>
          <SearchIcon onClick={handleSubmit}>
            <FontAwesomeIcon
              icon={faSearchDollar}
              size="2x"
              color="rgb(35, 49, 64)"
            />
          </SearchIcon>
        </Form>
        <AuthForm onSubmit={onSubmit}>
          <span
            style={{
              color: "whitesmoke",
            }}
          >
            {" "}
            ClientSeed :{" "}
          </span>
          <SInput
            name="clientSeed"
            type="text"
            placeholder="Client Seed "
            required
            value={clientSeed}
            onChange={onChangeClient}
          ></SInput>
          <span
            style={{
              color: "whitesmoke",
            }}
          >
            {" "}
            Server seed :{" "}
          </span>
          <SInput
            name="serverSeed"
            type="text"
            placeholder="Server Seed"
            required
            value={serverSeed}
            onChange={onChangeServer}
          ></SInput>
          <ModalApp></ModalApp>
        </AuthForm>
      </>
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          <ErrorMessage
            style={{
              fontSize: 16,
              color: "whitesmoke",
              marginTop: "30px",
              marginBottom: "40px",
            }}
          >
            {error ? `${error}` : null}
          </ErrorMessage>
          <BarChart
            chance={chance}
            recommendArray={recommendArray}
            sum={sum}
            overfifteen={overfifteen}
            findDBForSameTerm={findDBForSameTerm}
            loading={loading}
          ></BarChart>
        </>
      )}
    </Container>
  );
};

export default HomePresenter;
