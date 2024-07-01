import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import 'bootstrap/dist/css/bootstrap.css';
// import index from "./index.css"

// const p = React.createElement("p", {}, "This is a paragraph");
// const div1 = <div className="name">This is a react app</div>;
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
