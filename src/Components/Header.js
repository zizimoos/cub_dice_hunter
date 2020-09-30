import React from "react";
import styled from "styled-components";
import Burger from "./Buger";
// import RightMenu from "./RightMenu";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  background-color: black;
  color: white;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;
const Logo = styled.div``;

const HeaderC = () => (
  <Header>
    <Logo>이공제이</Logo>
    <Burger></Burger>
    {/* <RightMenu></RightMenu> */}
  </Header>
);

export default HeaderC;
