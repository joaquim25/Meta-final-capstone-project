import { useRouteError, Link } from "react-router-dom";
import Routes from "../../routes";
import "./styles.css";

const defaultTitle = "Oops, error";
const defaultSubtitle = "Sorry, an unexpected error has occurred.";

const ErrorPage = ({ title = "", subtitle = "", children }) => {
  const error = useRouteError();
  return (
    <div id="main">
      <div id="hello">
        <h1 id="one">S</h1>
        <h1 id="two">O</h1>
        <h1 id="three">R</h1>
        <h1 id="four">R</h1>
        <h1 id="five">Y</h1>
      </div>
    <h2 id="con">WE ARE UNDER CONSTRUCTION</h2>
    </div>
  );
};

export default ErrorPage;
