import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { dbService } from "../../fbase";

import { authService } from "fbase";
import { dockId } from "../../Routes/Auth";

// import AudioUrl from "../../assets/sound/barAlarm.mp3";

const HomeContainer = () => {
  const [chance, setChance] = useState([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]);
  const [percent, setPercent] = useState([
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
  ]);
  const [sum, setSum] = useState(24);
  const [overfifteen, setOverfifteen] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("접속 되었습니다. 검색을 시작하세요.");
  const [xData, setXdata] = useState([]);
  const [xserverSeed, setxServerSeed] = useState("");
  const [xclientSeed, setxClientSeed] = useState("");
  const [serverSeed, setServerSeed] = useState(
    "3bdff2c00c08aed9393d2d9ee23c22e94eaa0ba1b36321b458c8be75117cf9ad"
  );
  const [clientSeed, setClientSeed] = useState("victory cheers son");
  const [findedRDB, setFindedRDB] = useState([]);

  const SignOut = async () => {
    authService.signOut();
  };
  const listener = async (event) => {
    event.preventDefault();
    event.returnValue = "";
    try {
      authService
        .signOut()
        .then(await dbService.collection("loggedID").doc(`${dockId}`).delete());
    } catch {
    } finally {
      SignOut();
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (event.target.name === "clientSeed") {
    }
    if (event.target.name === "serverSeed") {
    }

    window.addEventListener("beforeunload", listener);
  };

  const onChangeClient = (event) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    setClientSeed(value);

    window.addEventListener("beforeunload", listener);
  };

  const onChangeServer = (event) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    setServerSeed(value);

    window.addEventListener("beforeunload", listener);
  };

  const searchTermCondition = () => {
    searchByTerm(searchTerm);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (searchTerm.includes(" ")) {
      setError("스페이스가 포함 되어있습니다. 검색버튼을 한번 더 누르세요 !");
      await setSearchTerm(searchTerm.trim());
      return;
    }
    if (!searchTerm.includes(" ")) {
      searchTermCondition();
    }
  };

  const updateTerm = (event) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    setSearchTerm(value);
  };

  const findDBForSameTerm = async () => {
    const findedData = await dbService.collection("searchedData").get();

    findedData.forEach((document) => {
      const findedDataObject = {
        ...document.data(),
        id: document.id,
      };
      setFindedRDB((prev) => [findedDataObject, ...prev]);
    });

    if (findedData.Of.docChanges.length > 500) {
      findedData.forEach((document) => {
        dbService.collection("searchedData").doc(document.id).delete();
      });
    }
  };

  const searchByTerm = async () => {
    const noneSearchTerm = searchTerm.trim();
    const arrayData = noneSearchTerm.split(",").map((d) => parseInt(d));

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    const conditionSum = arrayData.reduce(reducer);
    const notANumber = arrayData.includes(NaN);

    const biggerThan = arrayData.filter((n) => n > 28);

    const sameTerm = findedRDB.filter(
      (x) =>
        x.searchTerm === searchTerm &&
        x.clientSeed === clientSeed &&
        x.serverSeed === serverSeed
    );

    if (
      arrayData.length > 6 ||
      arrayData.length < 3 ||
      notANumber ||
      biggerThan.length !== 0 ||
      conditionSum > 50 ||
      serverSeed === "" ||
      clientSeed === ""
    ) {
      setError("Sorry, We don't have the data you are searching");
      setChance([0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1]);
      setSum(10);
      setOverfifteen(0);
    } else if (sameTerm.length > 0) {
      setChance(sameTerm[0].chanceNumbers);
      setSum(sameTerm[0].sum);
      setOverfifteen(sameTerm[0].overfifteen);
      setPercent(sameTerm[0].cnn);
      if (loading === false) {
        setLoading(true);
      }
      return;
    } else if (serverSeed.length !== 64) {
      setError("Server seed hash 를 입력하세요.");
      return;
    } else if (
      JSON.stringify(xData) !== JSON.stringify(arrayData) ||
      xclientSeed !== clientSeed ||
      xserverSeed !== serverSeed
    ) {
      setxServerSeed(serverSeed);
      setxClientSeed(clientSeed);

      setXdata(arrayData);
      numberGen();
    }
  };

  const chanceNumbers = [];
  let chanceNumber = 0;

  const numberGen = async () => {
    for (let i = 0; i < 12; i++) {
      if (i < 4) {
        chanceNumber =
          Math.floor(Math.random() * (Math.random() * 10000)) + 132;
        chanceNumbers.push(chanceNumber);
      } else if (i > 3 && i < 7) {
        chanceNumber = Math.floor(Math.random() * (Math.random() * 8000)) + 132;
        chanceNumbers.push(chanceNumber);
      } else if (i > 6 && i < 9) {
        chanceNumber = Math.floor(Math.random() * (Math.random() * 6000)) + 332;
        chanceNumbers.push(chanceNumber);
      } else if (i > 8) {
        chanceNumber = Math.floor(Math.random() * (Math.random() * 5000)) + 132;
        chanceNumbers.push(chanceNumber);
      }
    }

    const overfifteen = Math.floor(Math.random() * 4000) + 800;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sum = chanceNumbers.reduce(reducer) + overfifteen;
    const cnn = chanceNumbers.map((cn) => parseInt((cn / sum) * 100));
    setChance(chanceNumbers);
    setSum(sum);
    setOverfifteen(overfifteen);
    setPercent(cnn);
    if (loading === false) {
      setLoading(true);
    }

    await dbService
      .collection("searchedData")
      .add({
        chanceNumbers: chanceNumbers,
        sum: sum,
        overfifteen: overfifteen,
        cnn: cnn,
        clientSeed: clientSeed,
        serverSeed: serverSeed,
      })
      .then(function (docRef) {
        dbService.collection("searchedData").doc(docRef.id).set({
          id: docRef.id,
          searchTerm: searchTerm,
          chanceNumbers: chanceNumbers,
          sum: sum,
          overfifteen: overfifteen,
          cnn: cnn,
          clientSeed: clientSeed,
          serverSeed: serverSeed,
        });
      });
  };

  if (loading === true) {
    setTimeout(() => {
      setLoading(false);
    }, 3000 + Math.floor(Math.random() * 1000));
  }

  useEffect(() => {
    findDBForSameTerm();
  }, [loading]);

  window.addEventListener("beforeunload", listener);

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
      findDBForSameTerm={findDBForSameTerm}
    ></HomePresenter>
  );
};

export default HomeContainer;
