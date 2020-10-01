import React, { useState } from "react";
import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
  const [chance, setChance] = useState([]);
  const [percent, setPercent] = useState([]);
  const [sum, setSum] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm !== "") {
      searchByTerm(searchTerm);
    }
  };
  const updateTerm = (event) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    console.log(value);
    setSearchTerm(value);
  };
  const searchByTerm = () => {
    console.log(typeof searchTerm);
    const arrayData = searchTerm.split(",").map((d) => parseInt(d));

    if (
      arrayData.length !== 6 ||
      isNaN(arrayData[0]) ||
      isNaN(arrayData[1]) ||
      isNaN(arrayData[2]) ||
      isNaN(arrayData[3]) ||
      isNaN(arrayData[4]) ||
      isNaN(arrayData[5])
    ) {
      console.log("6단검색이여야 합니다. 혹은 입력형식이 잘 못 되었습니다.");
    } else if (arrayData.length === 6) {
      numberGen();
      setSearchTerm("");
    }
    // 원래는 디비를 검색해서 찾아야 하는데.......
    // todo 어레이로 바꾸고.... 조건 체크한 다음에....
    // 조건 어레이 길이가 6개, 모든 요소가 숫자....
  };

  const chanceNumbers = [];
  let chanceNumber = 0;

  const numberGen = () => {
    setLoading(true);
    for (let i = 0; i < 15; i++) {
      chanceNumber = Math.floor(Math.random() * (Math.random() * 10000));
      chanceNumbers.push(chanceNumber);
    }

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sum = chanceNumbers.reduce(reducer);
    const cnn = chanceNumbers.map((cn) =>
      parseFloat(((cn / sum) * 100).toPrecision(4))
    );
    setChance(chanceNumbers);
    setSum(sum);
    setPercent(cnn);
    setInterval(setLoading(false), 2000);
  };

  console.log(chance);
  return (
    <HomePresenter
      chance={chance}
      percent={percent}
      sum={sum}
      loading={loading}
      searchTerm={searchTerm}
      handleSubmit={handleSubmit}
      updateTerm={updateTerm}
    ></HomePresenter>
  );
};

export default HomeContainer;
