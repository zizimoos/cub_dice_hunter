import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { authService } from "fbase";

import { dbService } from "../fbase";

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
`;

const Slink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

const RightNav = ({ location: { pathname }, open }) => {
  const [loggedIds, setLoggedIds] = useState([]);

  const getLoggedIds = async () => {
    const dbLoggedIds = await dbService.collection("loggedID").get();
    dbLoggedIds.forEach((document) => {
      setLoggedIds((prev) => [document.data(), ...prev]);
    });
  };

  const preSignOut = async () => {
    try {
      console.log(authService.currentUser);
      console.log("SignOut", loggedIds.id);
      // loggedIds를 업데이트 하면.....
      if (true) {
        SignOut();
      }
    } catch {}
  };
  const SignOut = async () => {
    authService.signOut();
  };

  useEffect(() => {
    getLoggedIds();
  }, []);

  return (
    <List open={open}>
      {authService.currentUser ? (
        <>
          <Item current={pathname === "/"}>
            <Slink to="/">Search</Slink>
          </Item>
          <Item current={pathname === "/product"}>
            <Slink to="/product">Product</Slink>
          </Item>
          {/* <Item current={pathname === "/company"}>
          <Slink to="/company">Company</Slink>
        </Item>
        <Item current={pathname === "/detail"}>
          <Slink to="/detail">Detail</Slink>
        </Item> */}
          <Item onClick={preSignOut} current={!authService.currentUser}>
            <Slink to="/">
              {authService.currentUser ? "Sign Out" : "Sign In"}
            </Slink>
          </Item>
        </>
      ) : (
        <>
          <Item current={pathname === "/product"}>
            <Slink to="/product">Product</Slink>
          </Item>
          <Item
            onClick={preSignOut}
            current={pathname === "/" && !authService.currentUser}
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
