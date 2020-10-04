import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import BarChart from "../../Components/BarChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchDollar } from "@fortawesome/free-solid-svg-icons";

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
  margin-bottom: 0px;
  width: 30%;
  position: absolute;
  top: 50px;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  height: 40px;
  padding-left: 30px;
  font-size: 16px;
  border-radius: 3px;
  background-color: #4a5d70;
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 7px;
  right: -25px;
  cursor: pointer;
`;

const ErrorMessage = styled.p`
  font-size: 16;
  color: whitesmoke;
  margin-top: 140px;
  margin-bottom: 40px;
`;

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
}) => {
  return (
    <Container>
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
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          <ErrorMessage
            style={{
              fontSize: 16,
              color: "whitesmoke",
              marginTop: "140px",
              marginBottom: "40px",
            }}
          >
            {error ? `${error}` : null}
          </ErrorMessage>
          <BarChart
            chance={chance}
            sum={sum}
            overfifteen={overfifteen}
          ></BarChart>
        </>
      )}
    </Container>
  );
};

export default HomePresenter;
