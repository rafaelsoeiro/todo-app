import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";

import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import NotFound from "./pages/notFound/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
);
