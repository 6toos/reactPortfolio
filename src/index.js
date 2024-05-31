import React from "react";
import ReactDOM from "react-dom";

// const p = React.createElement("p", {}, "This is a paragraph");
const div1 = <div className="name">This is a react app</div>;
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(div1);
