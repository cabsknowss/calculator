import React, { useState } from "react";

const TdeeCalcu = () => {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activity, setActivity] = useState("");
  const [bmr, setBmr] = useState(null);
  const [tdee, setTdee] = useState(null);

  const handleCalculation = (e) => {
    e.preventDefault();

    if (!gender || !age || !weight || !height || !activity) return;
    console.log(`Gender: ${gender}`);
    console.log(`Age: ${age}`);
    console.log(`Weight: ${weight}`);
    console.log(`Height: ${height}`);
    console.log(`Activity: ${activity}`);

    const bmrCalculation =
      gender === "male"
        ? 10 * parseFloat(weight) +
          6.25 * parseFloat(height) -
          5 * parseInt(age) +
          5
        : 10 * parseFloat(weight) +
          6.25 * parseFloat(height) -
          5 * parseInt(age) -
          161;

    const tdeeCalculation =
      activity === "sedentary"
        ? bmrCalculation * 1.2
        : activity === "light"
        ? bmrCalculation * 1.375
        : activity === "moderate"
        ? bmrCalculation * 1.55
        : activity === "heavy"
        ? bmrCalculation * 1.725
        : bmrCalculation * 1.9;

    console.log();
    console.log(tdeeCalculation);
    setBmr(Math.round(bmrCalculation));
    setTdee(Math.round(tdeeCalculation));
  };
  return (
    <div className="tdeecalcu">
      <div className="tdeecalcu-container">
        <h2>TDEE Calculator</h2>
        <div>
          <form
            className="tdeecalcu-forms"
            action=""
            onSubmit={(e) => handleCalculation(e)}
          >
            <div className="tdeecalcu-forms__gender">
              <p>Gender</p>
              <div className="tdeecalcu-forms__gender-radio">
                <div>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </div>

            <div className="tdeecalcu-forms__age">
              <label htmlFor="age">
                <p>Age</p>
              </label>
              <input
                type="number"
                // value={age}
                placeholder="18"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            <div className="tdeecalcu-forms__weight">
              <label htmlFor="weight">Weight</label>
              <input
                type="number"
                placeholder="kg"
                // value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            <div className="tdeecalcu-forms__height">
              <label htmlFor="height">Height</label>
              <input
                type="number"
                placeholder="cm"
                // value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>

            <div className="tdeecalcu-forms__activity">
              <label htmlFor="activity">Activity</label>
              <select
                name="activity"
                id="activity"
                onChange={(e) => setActivity(e.target.value)}
              >
                <option value="" disabled hidden>
                  Select an option
                </option>
                <option value="sedentary">Sedentary (office job)</option>
                <option value="light">Light Exercise (1-2 days/week)</option>
                <option value="moderate">
                  Moderate Exercise (3-5 days/week)
                </option>
                <option value="heavy">Heavy Exercise (6-7 days/week)</option>
                <option value="athlete">Athlete (regular training)</option>
              </select>
            </div>

            <div className="tdeecalcu-forms__button">
              <button className="tdeecalcu-forms__btn">Calculate TDEE</button>
            </div>
          </form>
        </div>
        <div className="tdeecalcu-details">
          <p>
            Basal Metabolic Rate: <span>{bmr && <>{bmr}</>}cal</span>
          </p>
          <p>
            Your Maintenance Calories: <span>{tdee && <>{tdee}</>}cal</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TdeeCalcu;
