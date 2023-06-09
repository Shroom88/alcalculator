import React from "react";
import "./alcalculator.css";
import { useState } from "react";
import ResultPopUp from "./ResultPopUp";
import Logo from "../assets/aclalculator-logo.png";
import Spirits from "../assets/spirits-logo.png";

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
      <h1 className="heading">
        Добре дошъл в твоя онлайн алкохолен калкулатор
      </h1>
      <img className="logo" src={Logo} alt="logo" />

      <p className="description">
        Попълни празните полета и разбери колко единици алкохол има във всяка
        напитка
      </p>
      <form className="calculate" onSubmit={handleCalculate}>
        <label className="label" htmlFor="alc">
          % alc.:
          <input
            onChange={handleAlcChange}
            className="input"
            type="text"
            name="alc"
            value={alc}
            required
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
            required
          />
        </label>
        <button className="button" type="submit">
          резултат
        </button>
      </form>

      <p className="description-2">
        Една единица алкохол се разгражда от тялото за около един час. Използвай
        този калкулатор, за да следиш лесно консумацията си на алкохол по всяко
        време.
      </p>
      <img className="logo logo--spirits" src={Spirits} alt="logo" />

      <footer></footer>
    </div>
  );
}

export default Alcalculator;
