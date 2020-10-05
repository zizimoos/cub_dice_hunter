import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 150px;
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
  :hover {
    transform: scale(1.01, 1.2);
  }
`;
const BarUnitAnimation = (y) => keyframes`
0% {
    width: 1px;
  }
  50% {
    width: 10px;
  }
  100% {
    width: $(y)px;
  }
`;

const BarUnit = styled.span`
  display: inline-block;
  height: 25px;
  background-color: #02fe7c;
  margin-right: 10px;
  align-self: flex-start;
  width: ${(props) => props.cnsum * 2000}px;
  /* animation: ${BarUnitAnimation} 2s 1s infinite linear alternate; */
  animation: ${(props) =>
      BarUnitAnimation(`${(props) => props.cnsum * 2000}px`)}
    2s 0s linear;
`;

const EndBarUnit = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 6px;
  width: 150px;
  color: rgb(35, 49, 64);
`;
const OverTwelve = styled.span`
  color: whitesmoke;
  font-size: 16px;
`;
const BarChart = ({ chance, sum, overfifteen, findDBForSameTerm }) => {
  // useEffect(() => {
  //   findDBForSameTerm();
  // }, []);
  return (
    <Container>
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
                    // backgroundColor: "rgb(35, 49, 64)",
                  }}
                >
                  {index}
                </span>
                <BarUnit cnsum={cn / sum}></BarUnit>
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
              <div
                key={`divtwo` + index}
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <EndBarUnit key={`spanfour` + index}>
                  {cn.toLocaleString()} / {sum.toLocaleString()}
                </EndBarUnit>
              </div>
            </BarContainer>
          </ResultContainer>
        </div>
      ))}
      <OverTwelve>
        {sum
          ? `Over twelve : ${overfifteen.toLocaleString()} /
              ${sum.toLocaleString()}`
          : null}
      </OverTwelve>
    </Container>
  );
};

export default BarChart;
