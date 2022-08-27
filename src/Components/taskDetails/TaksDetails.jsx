import React from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import "./TaskDetails.css";

import Button from "./Button";

const TaksDetails = (props) => {
    const params = useParams();
    const { state } = useLocation();
    const navigate = useNavigate();
    console.log(state)
    return (
        <>
            <div className="back-button-container">
                <Link to="/" state={props}>
                    <Button> Voltar </Button>
                </Link>
            </div>
            <div className="task-details-container">
                <h2>{state.title} </h2>
                <p>{state.details}</p>
            </div>
        </>
    );
};

export default TaksDetails;
