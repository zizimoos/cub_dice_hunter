import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 24px;
  width: 100%;
`;

const Box = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  background-color: #4a5d70;
`;
const HomePresenter = ({
  chance,
  percent,
  sum,
  loading,
  handleSubmit,
  searchTerm,
  updateTerm,
}) => {
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="copy and paste the steps"
          value={searchTerm}
          onChange={updateTerm}
        ></Input>
      </Form>
      <div style={{ fontSize: 20 }}>Total : {sum.toLocaleString()}</div>
      <Box>
        {chance.map((cn, index) => (
          <div key={index}>
            {cn} / {parseFloat(((cn / sum) * 100).toPrecision(4))} %
          </div>
        ))}
      </Box>
      ;
    </Container>
  );
};

export default HomePresenter;
