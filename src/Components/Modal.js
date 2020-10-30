import React, { useState } from "react";
import styled from "styled-components";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { withRouter } from "react-router-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const ModalBox = styled.div`
  width: 300px;
  position: relative;
`;
const ModaTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;

const ManualButton = styled.div`
  padding: 3px;
  padding-top: 8px;
  padding-bottom: 5px;
  width: 300px;
  height: 30px;
  font-weight: 400;
  text-align: center;
  background-color: dodgerblue;
  border-radius: 3px;
  cursor: pointer;
  margin-left: 0px;
  margin-bottom: 5px;
  color: whitesmoke;
  z-index: 10;
`;

const IntroButton = styled.div`
  padding: 3px;
  padding-top: 8px;
  /* padding-bottom: 5px; */
  width: 300px;
  height: 30px;
  font-weight: 400;
  text-align: center;
  background-color: indianred;
  border-radius: 3px;
  cursor: pointer;
  margin-left: 0px;
  color: whitesmoke;
  z-index: 10;
`;

const ButtonCarrier = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  margin-top: 30px;
`;

const ModalApp = ({ history }) => {
  const [state, setState] = useState({ open: true });

  const onCloseModal = () => {
    setState({ open: false });
  };
  const goManul = () => {
    history.push("/company");
    setState({ open: false });
  };
  const goIntro = () => {
    history.push("/product");
    setState({ open: false });
  };
  const { open } = state;

  return (
    <div style={styles}>
      <Modal open={open} onClose={onCloseModal}>
        <ModaTitle> 공지 드립니다</ModaTitle>
        <ModalBox>
          <p
            style={{
              padding: "10px",
              lineHeight: "20px",
              textAlign: "justify",
            }}
          >
            업데이트로 인하여 매월 4째주 일요일{" "}
            <strong style={{ color: "red", fontWeight: "500" }}>
              오전 6시 부터 오전 9시까지
            </strong>{" "}
            접속이 제한됩니다. 많은 양해 부탁드립니다.
          </p>
          <p
            style={{
              padding: "10px",
              lineHeight: "20px",
              textAlign: "justify",
            }}
          >
            사용 설명은 아래 버튼을 클릭하셔서 확인 하시면 됩니다.
          </p>

          <ButtonCarrier>
            <ManualButton onClick={goManul}>사용 설명서</ManualButton>
            <IntroButton onClick={goIntro}>부스타 소개</IntroButton>
          </ButtonCarrier>

          <p style={{ padding: "10px" }}></p>
        </ModalBox>
      </Modal>
    </div>
  );
};

export default withRouter(ModalApp);
