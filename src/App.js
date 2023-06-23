import logo from "./logo.svg";
import "./App.css";
import Login from "./auth/login";
import Axios from "axios";
import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

function App() {
  const RouteComonenet = ({ token }) => {
    if (token) {
      Axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      return <Routes isLoggedIn={true} />;
    } else {
      return <Routes isLoggedIn={false} />;
    }
  };
  const baseUrl = process.env.REACT_APP_BASE_URL;
  Axios.defaults.baseURL=baseUrl;
  const {token} = useSelector((state)=> state?.auth)
  return (

    <>
      <Router>
        <RouteComonenet token={token} />
      </Router>
      {/* <Login/> */}
    </>
  );
}

export default App;
