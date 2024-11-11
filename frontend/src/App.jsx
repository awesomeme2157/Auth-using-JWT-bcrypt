import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Login />
        <br />
        <Signup />
      </BrowserRouter>
    </>
  );
}

export default App;
