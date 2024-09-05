import React, { useState } from "react";

const BmiCalcu = () => {
  const [unit, setUnit] = useState("Standard");
  const [weight, setWeight] = useState("");
  const [heightMetric, setHeightMetric] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInch, setHeightInch] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const bmiClassification = [
    { cat: "Underweight", range: <>&lt;18.5</> },
    { cat: "Normal weight", range: <>18.5&ndash;24.9</> },
    { cat: "Overweight", range: <>25&ndash;29.9</> },
    { cat: "Obesity", range: <>&gt;30</> },
  ];

  const handleComputation = (e) => {
    e.preventDefault();

    const heightMeters = parseFloat(heightMetric) / 100;

    const heightInches = parseFloat(heightInch)
      ? parseFloat(heightFeet) * 12 + parseFloat(heightInch)
      : parseFloat(heightFeet) * 12;

    const result =
      unit === "Metric"
        ? parseFloat(weight) / Math.pow(heightMeters, 2)
        : 703 * (weight / Math.pow(heightInches, 2));

    setBmi(result.toFixed(2));
    setCategory(
      result <= 18.5
        ? "Underweight"
        : result <= 24.9
        ? "Normal weight"
        : result <= 29.9
        ? "Overweight"
        : "Obesity"
    );
  };

  const resetStates = () => {
    console.log("test");
    setWeight("");
    setBmi("");
    setHeightMetric("");
    setHeightFeet("");
    setHeightInch("");
  };

  return (
    <div className="bmicalcu">
      <div className="bmicalcu-container">
        <h2>BMI Calculator</h2>
        <div className="bmicalcu-unit">
          {["Standard", "Metric"].map((measurement, index) => (
            <button
              className={`bmicalcu-unit__btn ${
                measurement === unit && "active nohover"
              }`}
              key={index}
              onClick={() => {
                setUnit(measurement);
                resetStates();
              }}
            >
              {measurement}
            </button>
          ))}
        </div>
        <div>
          <form
            className="bmicalcu-forms"
            onSubmit={(e) => handleComputation(e)}
          >
            <div className="bmicalcu-forms__inputs">
              {unit === "Metric" ? (
                <div className="bmicalcu-forms__input">
                  <label htmlFor="">Height:</label>
                  <input
                    type="number"
                    placeholder="centimeter"
                    onChange={(e) => {
                      if (!/[0-9]/.test(e.key)) {
                        e.preventDefault();
                        setHeightMetric(e.target.value);
                      }
                    }}
                    value={heightMetric}
                  />
                </div>
              ) : (
                <div className="bmicalcu-forms__input">
                  <label htmlFor="">Height:</label>
                  <div className="bmicalcu-forms__standard-input">
                    <input
                      onChange={(e) => {
                        if (!/[0-9]/.test(e.key)) {
                          e.preventDefault();
                          setHeightFeet(e.target.value);
                        }
                      }}
                      type="number"
                      placeholder="ft"
                      value={heightFeet}
                    />
                  </div>
                  <div className="bmicalcu-forms__standard-input">
                    <input
                      onChange={(e) => {
                        if (!/[0-9]/.test(e.key)) {
                          e.preventDefault();
                          setHeightInch(e.target.value);
                        }
                      }}
                      type="number"
                      placeholder="in"
                      value={heightInch}
                    />
                  </div>
                </div>
              )}

              <div className="bmicalcu-forms__input">
                <label htmlFor="">Weight:</label>
                <input
                  onChange={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                      setWeight(e.target.value);
                    }
                  }}
                  type="number"
                  placeholder={unit === "Standard" ? "pounds" : "kilogram"}
                  value={weight}
                />
              </div>
            </div>
            <div>
              <button>
                Compute <br />
                BMI
              </button>
            </div>
          </form>
          <div className="bmicalcu-bmi">
            {bmi && (
              <>
                <h3>BMI:</h3>
                <div className="bmicalcu-bmi__box">
                  <h3>{bmi}</h3>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="bmi-classification">
        <h2>BMI Categories</h2>
        {bmiClassification.map((categ, index) => (
          <p
            className={`${category === categ.cat && "classified"}`}
            key={index}
          >
            {categ.cat}: <span>{categ.range}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default BmiCalcu;
