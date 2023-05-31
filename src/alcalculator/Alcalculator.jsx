import React from "react";
import "./alcalculator.css";
import { useState } from "react";
import ResultPopUp from "./ResultPopUp";
import Logo from "../assets/aclalculator-logo.png";

function Alcalculator() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [alc, setAlc] = useState("");
  const [ml, setMl] = useState("");
  const [result, setResult] = useState("");

  const handleAlcChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setAlc(value);
    }
  };

  const handleMlChange = (e) => {
    const value = e.target.value;

    if (!isNaN(value)) {
      setMl(value);
    }
  };

  const handleCalculate = () => {
    const result = (alc * ml) / 1000;
    setResult(result);
    setIsPopupOpen(true);
  };

  return isPopupOpen ? (
    <ResultPopUp
      result={result}
      setIsPopupOpen={setIsPopupOpen}
      setAlc={setAlc}
      setMl={setMl}
    />
  ) : (
    <div className="alcalculator">
      <img className="logo" src={Logo} alt="logo" />
      <h1 className="heading">
        Добре дошъл в твоя онлайн алкохолен калкулатор
      </h1>
      <p className="description">
        Попълни празните полета и разбери колко единици алкохол има във всяка
        напитка
      </p>
      <div className="calculate">
        <label className="label" htmlFor="alc">
          % alc.:
          <input
            onChange={handleAlcChange}
            className="input"
            type="text"
            name="alc"
            value={alc}
          />
        </label>
        <label className="label" htmlFor="ml">
          ml.:
          <input
            onChange={handleMlChange}
            className="input input--last"
            type="text"
            name="ml"
            value={ml}
          />
        </label>
        <button onClick={handleCalculate} className="button" type="button">
          резултат
        </button>
      </div>
      <p className="description-2">
        Една единица алкохол се разгражда от тялото за около един час. Използвай
        този калкулатор, за да следиш лесно консумацията си по всяко време.
      </p>
    </div>
  );
}

export default Alcalculator;
