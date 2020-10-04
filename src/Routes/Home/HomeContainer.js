import React, { useState } from "react";
import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
  const [chance, setChance] = useState([]);
  const [percent, setPercent] = useState([]);
  const [sum, setSum] = useState(0);
  const [overfifteen, setOverfifteen] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [xData, setXdata] = useState([]);
  const [serverSeed, setServerSeed] = useState("");
  const [clientSeed, setClientSeed] = useState("");

  const onSubmit = (event) => {
    // event.preventDefault();
    // if (serverSeed !== "") {
    //   setServerSeed(serverSeed);
    // }
    // if (clientSeed !== "") {
    //   setClientSeed(clientSeed);
    // }
  };
  const onChangeClient = (event) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    console.log(value);
    setClientSeed(value);
  };
  const onChangeServer = (event) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    console.log(value);
    setServerSeed(value);
  };

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
    setSearchTerm(value);
  };

  const searchByTerm = () => {
    const arrayData = searchTerm.split(",").map((d) => parseInt(d));
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const conditionSum = arrayData.reduce(reducer);

    const notANumber = arrayData.includes(NaN);
    const includeZero = arrayData.includes(0);
    const biggerThan = arrayData.filter((n) => n > 28);

    if (
      arrayData.length > 6 ||
      arrayData.length < 5 ||
      notANumber ||
      biggerThan.length !== 0 ||
      includeZero ||
      conditionSum > 50 ||
      serverSeed === "" ||
      clientSeed === ""
    ) {
      setError("Sorry, We don't have the data you are searching");
      setChance([0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1]);
      setSum(10);
      setOverfifteen(0);
      // setPercent([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    } else if (JSON.stringify(xData) === JSON.stringify(arrayData)) {
      return;
    } else if (
      // arrayData.length === 6 &&
      JSON.stringify(xData) !== JSON.stringify(arrayData)
    ) {
      setXdata(arrayData);
      numberGen();
      setSearchTerm("");
      setError("");
    }
  };

  const chanceNumbers = [];
  let chanceNumber = 0;

  const numberGen = () => {
    for (let i = 0; i < 12; i++) {
      if (i < 7) {
        chanceNumber =
          Math.floor(Math.random() * (Math.random() * 10000)) + 132;
        chanceNumbers.push(chanceNumber);
      } else if (i > 6 && i < 9) {
        chanceNumber = Math.floor(Math.random() * (Math.random() * 6000)) + 332;
        chanceNumbers.push(chanceNumber);
      } else if (i > 8) {
        chanceNumber = Math.floor(Math.random() * (Math.random() * 1000)) + 132;
        chanceNumbers.push(chanceNumber);
      }
    }

    const overfifteen = Math.floor(Math.random() * 100) + 1;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sum = chanceNumbers.reduce(reducer) + overfifteen;
    const cnn = chanceNumbers.map((cn) =>
      parseFloat(((cn / sum) * 100).toPrecision(4))
    );
    setChance(chanceNumbers);
    setSum(sum);
    setOverfifteen(overfifteen);
    setPercent(cnn);
    if (loading === false) {
      setLoading(true);
    }
  };

  if (loading === true) {
    setTimeout(() => {
      return setLoading(false);
    }, 3000 + Math.floor(Math.random() * 1000));
  }

  return (
    <HomePresenter
      chance={chance}
      percent={percent}
      sum={sum}
      loading={loading}
      searchTerm={searchTerm}
      handleSubmit={handleSubmit}
      updateTerm={updateTerm}
      error={error}
      overfifteen={overfifteen}
      onSubmit={onSubmit}
      onChangeClient={onChangeClient}
      onChangeServer={onChangeServer}
      serverSeed={serverSeed}
      clientSeed={clientSeed}
    ></HomePresenter>
  );
};

export default HomeContainer;
