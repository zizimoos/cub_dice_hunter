import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
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

const Box = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
`;
const ResultContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  /* display: flex; */
  /* height: 30%; */
`;
const BarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 10px 0px 0px;
  background-color: #4a5d70;
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 7px;
  right: -25px;
  cursor: pointer;
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
          <p
            style={{
              fontSize: 16,
              color: "whitesmoke",
              marginTop: "140px",
              marginBottom: "40px",
            }}
          >
            {error ? `${error}` : null}
          </p>
          <Box>
            {chance.map((cn, index) => (
              <div key={`cn` + index}>
                <ResultContainer key={index}>
                  <BarContainer key={`bar` + index}>
                    <div key={`divone` + index} style={{ display: "flex" }}>
                      <span
                        key={`spanone` + index}
                        style={{
                          display: "inline-block",
                          width: "30px",
                          textAlign: "center",
                          paddingTop: "6px",
                          // paddingLeft: "5px",
                          // paddingRight: "5px",
                          color: "#ec644b",
                        }}
                      >
                        {index}
                      </span>
                      <span
                        key={`spantwo` + index}
                        style={{
                          display: "inline-block",
                          height: 25,
                          width: (cn / sum) * 100 * 20,
                          // backgroundColor: "#ec644b",
                          backgroundColor: "#02fe7c",
                          marginRight: 10,
                          // zIndex: 10,
                          alignSelf: "start",
                        }}
                      ></span>
                      <span
                        key={`spanthree` + index}
                        style={{
                          display: "inline-block",
                          width: "100px",
                          marginRight: "20px",
                          textAlign: "start",
                          paddingTop: "6px",
                          color: "#ec644b",
                        }}
                      >
                        {" "}
                        {((cn / sum) * 100).toPrecision(2)} %
                      </span>
                    </div>
                    <div key={`divtwo` + index} style={{ display: "flex" }}>
                      <span
                        key={`spanfour` + index}
                        style={{
                          color: "whitesmoke",
                          paddingTop: "6px",
                          display: "flex",
                          justifyContent: "flex-end",
                        }}
                      >
                        {cn.toLocaleString()} / {sum.toLocaleString()}
                      </span>
                    </div>
                  </BarContainer>
                </ResultContainer>
              </div>
            ))}
            <span style={{ color: "whitesmoke" }}>
              {sum
                ? `Over twelve : ${overfifteen.toLocaleString()} /
              ${sum.toLocaleString()}`
                : null}
            </span>
          </Box>
        </>
      )}
    </Container>
  );
};

export default HomePresenter;
