import UserInput from "./components/UserInput";
import Header from "./components/Header";
import Results from "./components/Results";
import { useState } from "react";
function App() {
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
    // wrap the components in a React fragment so that we can return multiple components from the App component
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <Results input={userInput} />
    </>
  );
}

export default App;
