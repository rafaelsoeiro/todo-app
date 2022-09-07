import React from "react";
import { useLocation, Link } from "react-router-dom";

import "./Details.css";
import TaskDetails from "../../Components/taskDetails/TaskDetails";
import Button from "../../Components/button/Button";
import Header from "../../Components/header/Header";

const Details = () => {
    const { state } = useLocation();
    console.log(state);
    return (
        <div className="container">
            <div className="header-details">
                <Header title="detalhes" />
                <Link to="/">
                    {/* state={props.state} */}
                    <Button> Voltar </Button>
                </Link>
            </div>
            <div className="details-container"></div>
            <TaskDetails state={state} />
        </div>
    );
};

export default Details;
