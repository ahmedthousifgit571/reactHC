import React from "react";
import ReactDOM from "react-dom/client";
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
import User from "./components/User/User.jsx";
import Github from "./components/Github/Github.jsx";
import Contact from "./components/Contact/Contact.jsx";
// router setup
const router = createBrowserRouter(
  //createBrowserRouter is used to create an instance for browser routing for navigation
  createRoutesFromElements(
    // is used to create route configurations based on the Route elements defined.
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/" element={<User />}>
        <Route path=":userid" element={<User />} />
      </Route>
      <Route path="/github" element={<Github />} />
      <Route path="*" element={<div>not found</div>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
