import React from "react";
import { CgInfo, CgCloseR } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskRemoveButton }) => {
    const navigate = useNavigate();
    // {console.log(task)}

    return (
        <div
            className="task-container"
            style={task.completed ? { borderLeft: "6px solid var(--color-primary)" } : {borderLeft: "6px solid Red"}}
        >
            <div
                className="taks-title"
                onClick={() => handleTaskClick(task.id)}
            >
                {task.title}
            </div>

            <div className="buttons-container">
                <button
                    className="see-task-detais-button"
                    // onClick={() => navigate("details/id",{state:task})}
                >
                    <Link to={task.id}>

                    <CgInfo />
                    </Link>
                </button>

                
                <button
                    className="taks-remove-button"
                    onClick={() => handleTaskRemoveButton(task.id)}
                >
                    <CgCloseR />
                </button>
                
            </div>
        </div>
    );
};

export default Task;
