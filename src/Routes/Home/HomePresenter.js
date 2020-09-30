import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 0px;
  background-color: rgb(45, 63, 81);
`;
const Box = styled.div`
  width: 500px;
  height: 100px;
  background-color: #4a5d70;
`;
const HomePresenter = () => {
  return (
    <Container>
      <Box></Box>;
    </Container>
  );
};

export default HomePresenter;
