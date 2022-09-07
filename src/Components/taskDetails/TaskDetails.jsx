import React from "react";
import { useLocation, useParams } from "react-router-dom";

import "./TaskDetails.css";

const TaskDetails = (props) => {
    const params = useParams();
    const { state } = useLocation();
    // console.log("state");
    // console.log(state);
    console.log(props.state)
    return (
        <>
            <div className="task-details-container">
                <h2>{state.title} </h2>
                <p>{state.details}</p>
            </div>
        </>
    );
};

export default TaskDetails;
