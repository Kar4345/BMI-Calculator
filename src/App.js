import React, { useEffect, useState } from "react";
import Chart from "./components/Chart";
import "./styles/App.css";
import Card from './components/Card'
const getLocalData = () => {
  const list = localStorage.getItem("lists");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

export default function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [data, setData] = useState(getLocalData());
  const [showGraph, setShowGraph] = useState(data.length !== 0);
  
  const calculateBmi = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const ans = weight / (heightInMeters * heightInMeters);
      const bmi = ans.toFixed(1);
      let date = new Date();
      let now =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      console.log(now);
      setData([...data, { Bmi: bmi, Date: now }]);
      setWeight(0);
      setHeight(0);
      console.log(data, showGraph);
    }
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(data));
    setShowGraph(data.length !== 0);
  }, [data]);

  const onChangeHeight = (e) => {
    if(!isNaN(Number(e.target.value))){
    setHeight(e.target.value);
    }
  };

  const onChangeWeight = (e) => {
    if(!isNaN(Number(e.target.value))){
    setWeight(e.target.value);
    }
  };

  const deleteItem = (index)=>{
    let arr = [...data];
    arr.splice(index,1);
    setData(arr);
  }

  return (
    <div id="container">
      <header>
        <h1>BMI Tracker</h1>
      </header>
      <section className="inputs">
        <div className="values">
          <label htmlFor="weight">Weight (in kg)</label>
          <br />
          <input id="weight" onChange={onChangeWeight} value={weight}></input>
        </div>
        <div className="values">
          <label htmlFor="height">Height (in cms)</label>
          <br />
          <input id="height" onChange={onChangeHeight} value={height}></input>
        </div>
      </section>
      <section id="calculate">
        <button id="calc" onClick={calculateBmi}>
          Calculate
        </button>
      </section>
      {showGraph ? (<>
        <div>
          <Chart data={data} />
        </div>
      
      <section id="hist">
        <div id="history">
        {data.map((val,index)=>{
          return <Card info={val} deleteItem={deleteItem} index={index}/>
        })}
        </div>
      </section></>) :null}
    </div>
  );
}
