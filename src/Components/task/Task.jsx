import React from "react";
import { FaTrashAlt, FaSistrix } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskRemoveButton }) => {
    const navigate = useNavigate();
    console.log("task");
    console.log(task);

    return (
        <div
            className="task-container"
            style={
                task.completed
                    ? { borderLeft: "6px solid var(--color-primary)" }
                    : { borderLeft: "6px solid Red" }
            }
        >
            <div
                className="taks-title"
                onClick={() => handleTaskClick(task.id)}
            >
                {task.title}
            </div>

            <div className="buttons-container">
                <Link to={`details/${task.id}`} state={task}>
                    <button
                        className="task-button see-task-detais-button"
                        // onClick={() => navigate(`details/${task.id}`,{state:task})}
                    >
                        <FaSistrix />
                    </button>
                </Link>

                <button
                    className="task-button taks-remove-button"
                    onClick={() => handleTaskRemoveButton(task.id)}
                >
                    <FaTrashAlt />
                </button>
            </div>
        </div>
    );
};

export default Task;
