import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
// router setup
const router = createBrowserRouter(
  //createBrowserRouter is used to create an instance for browser routing for navigation
  createRoutesFromElements(
    // is used to create route configurations based on the Route elements defined.
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
