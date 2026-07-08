import { useState } from "react";
export default function UserInput() {
  /* // create a state Object variable to hold the values of the input fields */
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  //create a function to handle the change of the input fields
  const handleChange = (inputIdentifier, newValue) => {
    // log the value of the input field to the console
    //console.log(newValue + " " + inputIdentifier);
    //use function to update the state variables
    setUserInput((prevInput) => ({
      ...prevInput,
      // use the inputIdentifier to OVERWRITE  the correct property in the state object
      // [id]: newValue,
      [inputIdentifier]: newValue,
    }));
  };
  return (
    <section id="user-input">
      {/* FORM */}
      User Input Section
      <div className="input-group">
        <label htmlFor="initial-investment">Initial Investment</label>
        {/* handleChange needs to be passed the props for this field 
        // value will display the initial and the updated value */}
        <input
          type="number"
          id="initial-investment"
          required
          value={userInput.initialInvestment}
          onChange={(event) =>
            handleChange(
              "initialInvestment",
              parseFloat(event.target.value) || 0,
            )
          }
        />
        <label htmlFor="annual-investment">Annual Investment</label>
        <input
          type="number"
          id="annual-investment"
          required
          value={userInput.annualInvestment}
          onChange={(event) =>
            handleChange(
              "annualInvestment",
              parseFloat(event.target.value) || 0,
            )
          }
        />
      </div>
      <div className="input-group">
        <label htmlFor="expected-return">Expected Return</label>
        <input
          type="number"
          id="expected-return"
          required
          value={userInput.expectedReturn}
          onChange={(event) =>
            handleChange("expectedReturn", parseFloat(event.target.value) || 0)
          }
        />

        <label htmlFor="duration">Duration</label>
        <input
          type="number"
          id="duration"
          required
          value={userInput.duration}
          onChange={(event) =>
            handleChange("duration", parseFloat(event.target.value) || 0)
          }
        />
      </div>
    </section>
  );
}
