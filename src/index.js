import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import StoryBook from "./pages/StoryBook/StoryBook";
import StateProvider from "./stores/AppStore";

let useStoryBook = false;
ReactDOM.render(
  <React.StrictMode>
    {!useStoryBook && (
      <StateProvider>
        <App />
      </StateProvider>
    )}
    {useStoryBook && <StoryBook />}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
