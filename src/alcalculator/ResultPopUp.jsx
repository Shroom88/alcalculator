import React from "react";
import "./Alcalculator.css";
import Logo from "../assets/aclalculator-logo.png";

function ResultPopUp({ result, setIsPopupOpen, setAlc, setMl }) {
  const handleBackBtn = () => {
    setIsPopupOpen(false);
    setAlc("");
    setMl("");
  };
  return (
    <div className="alcalculator result">
      <img className="logo--result" src={Logo} alt="logo" />
      <h1 className="heading--result">
        Резултат: {parseFloat(result.toFixed(3))} единици.
      </h1>
      <button className="button" onClick={handleBackBtn} type="button">
        Обратно към калкулатора
      </button>
      <p className="description-2">
        Една единица алкохол се разгражда от тялото за около един час. Използвай
        този калкулатор, за да следиш лесно консумацията си по всяко време.
      </p>
    </div>
  );
}

export default ResultPopUp;
