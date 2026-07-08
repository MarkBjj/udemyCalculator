import UserInput from "./components/UserInput";
import Header from "./components/Header";
function App() {
  return (
    // wrap the components in a React fragment so that we can return multiple components from the App component
    <>
      <Header />
      <UserInput />
    </>
  );
}

export default App;
