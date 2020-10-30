import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

import { authService } from "fbase";
import { dbService } from "../fbase";
import { dockId } from "../Routes/Auth";

const List = styled.ul`
  display: flex;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const Item = styled.li`
  width: 100px;
  text-align: center;
  border-bottom: 3px solid
    ${(props) => (props.current ? "#c05c67" : "transparent")};
  transition: border-bottom 0.2s ease-in-out;
  cursor: pointer;
`;

const Slink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

const RightNav = ({ location: { pathname }, open, userObj }) => {
  const preSignOut = async () => {
    try {
      await dbService.collection("loggedID").doc(`${dockId}`).delete();
    } catch {
    } finally {
      SignOut();
    }
  };

  const SignOut = async () => {
    authService.signOut();
  };

  return (
    <List open={open}>
      {authService.currentUser ? (
        <>
          <Item current={pathname === "/"}>
            <Slink to="/">Search</Slink>
          </Item>
          <Item current={pathname === "/product"}>
            <Slink to="/product">Busta 소개</Slink>
          </Item>
          <Item current={pathname === "/company"}>
            <Slink to="/company">Busta 설명서</Slink>
          </Item>

          <Item
            onClick={preSignOut}
            current={!authService.currentUser}
            style={{ color: "#c05c67", fontWeight: 600 }}
          >
            <Slink to="/">
              {authService.currentUser ? "Sign Out" : "Sign In"}
            </Slink>
          </Item>
        </>
      ) : (
        <>
          <Item current={pathname === "/product"}>
            <Slink to="/product">Busta 소개</Slink>
          </Item>
          <Item
            onClick={preSignOut}
            current={pathname === "/" && !authService.currentUser}
            style={{ color: "#c05c67", fontWeight: 600 }}
          >
            <Slink to="/">
              {authService.currentUser ? "Sign Out" : "Sign In"}
            </Slink>
          </Item>
        </>
      )}
    </List>
  );
};

export default withRouter(RightNav);
