import React, { useState } from "react";

const NumCalcu = () => {
  const [display, setDisplay] = useState("");
  const [firstTerm, setFirstTerm] = useState("");
  const [secondTerm, setSecondTerm] = useState("");
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState(null);

  const handleSymbol = (number) => {
    if (!operator && !secondTerm && !result) {
      setFirstTerm(firstTerm + number);
      setDisplay(display + number);
      return;
    } // Take first term

    if (firstTerm && operator && !result) {
      setSecondTerm(secondTerm + number);
      setDisplay(display + number);
      return;
    } // Take second term

    if (result && !operator) {
      setFirstTerm(firstTerm + number);
      setDisplay(firstTerm + number);
      setResult(null);
      return;
    } // If there's result, no operator, but click on number

    if (result && operator) {
      setSecondTerm(secondTerm + number);
      setDisplay(display + number);
      return;
    } // If result is used as first term applied with operation
  };

  const handleOperator = (operator) => {
    if (result) {
      setDisplay(result + operator);
      setFirstTerm(result);
      setSecondTerm("");
      setOperator(operator);
      return;
    } // Use the result as first term

    if (!firstTerm) return; // No action if no first term

    setOperator(operator);
    setDisplay(display + operator);
  };

  const handleResult = () => {
    if (!firstTerm || !operator || !secondTerm) return;

    const num1 = parseFloat(firstTerm);
    const num2 = parseFloat(secondTerm);

    const result =
      operator === "+"
        ? num1 + num2
        : operator === "-"
        ? num1 - num2
        : operator === "x"
        ? num1 * num2
        : num1 / num2;

    setResult(result.toString());
    setDisplay(result.toString());

    setFirstTerm("");
    setSecondTerm("");
    setOperator(null);
  };

  const handlePercent = () => {
    let percentage;
    const num = parseFloat(firstTerm);
    if (firstTerm && !operator && !secondTerm && !result) {
      percentage = num / 100;
      setResult(percentage);
      setDisplay(percentage);
      setFirstTerm("");
      return;
    }
    if (result) {
      percentage = result / 100;
      setResult(percentage);
      setDisplay(percentage);
      return;
    }
  };

  const handleDelete = () => {
    if (result) {
      setResult(result.substring(0, result.length - 1));
      setDisplay(result.substring(0, result.length - 1));
      return;
    }

    if (firstTerm && !operator && !secondTerm) {
      console.log("run1");
      setFirstTerm(firstTerm.substring(0, firstTerm.length - 1));
      setDisplay(firstTerm.substring(0, firstTerm.length - 1));
      return;
    }

    if (firstTerm && operator && !secondTerm) {
      setOperator(null);
      setDisplay(firstTerm);
      return;
    }

    if (firstTerm && operator && secondTerm) {
      setSecondTerm(secondTerm.substring(0, secondTerm.length - 1));
      setDisplay(
        firstTerm + operator + secondTerm.substring(0, secondTerm.length - 1)
      );
      return;
    }
  };

  const handleClear = () => {
    setDisplay("");
    setFirstTerm("");
    setSecondTerm("");
    setResult("");
    setOperator(null);
  };

  const symbols = [
    { text: "AC", func: () => handleClear() },
    { text: "+/-", func: () => handleSymbol("-") },
    { text: "%", func: () => handlePercent() },
    { text: <>&#247;</>, func: () => handleOperator("/") },

    { text: "7", func: () => handleSymbol("7") },
    { text: "8", func: () => handleSymbol("8") },
    { text: "9", func: () => handleSymbol("9") },
    { text: "x", func: () => handleOperator("x") },

    { text: "4", func: () => handleSymbol("4") },
    { text: "5", func: () => handleSymbol("5") },
    { text: "6", func: () => handleSymbol("6") },
    { text: "-", func: () => handleOperator("-") },

    { text: "1", func: () => handleSymbol("1") },
    { text: "2", func: () => handleSymbol("2") },
    { text: "3", func: () => handleSymbol("3") },
    { text: "+", func: () => handleOperator("+") },

    { text: "0", func: () => handleSymbol("0") },
    { text: ".", func: () => handleSymbol(".") },
    { text: "DEL", func: () => handleDelete() },
    { text: "=", func: () => handleResult() },
  ];

  return (
    <div className="numcalcu">
      <div className="numcalcu-container">
        <div className="numcalcu-head">
          <div className="numcalcu-head__container">
            <h2>{display}</h2>
          </div>
        </div>
        <div className="numcalcu-body">
          {symbols.map((symbol, index) => (
            <div
              className="numcalcu-body__symbols"
              key={index}
              onClick={() => symbol.func()}
            >
              <h2>{symbol.text}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NumCalcu;
