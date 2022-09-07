import React, { useState } from "react";

import { MdOutlineAdd } from "react-icons/md";

import "./AddTask.css";
import Button from "../button/Button";

const AddTask = ({ handleTaskAddition }) => {
    const [inputData, setInputData] = useState("");

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const hadleAddTaskClick = () => {
        if (inputData === "") {
            window.alert("Erro - Digite algo!");
        } else {
            handleTaskAddition(inputData);
            setInputData("");
        }
    };

    return (
        <div className="add-task-container">
            <input
                placeholder="Digite sua tarefa aqui"
                onChange={handleInputChange}
                value={inputData}
                className="add-task-input"
                type="text"
                autoFocus
            />

            <div className="add-task-button-container">
                <Button onClick={hadleAddTaskClick}>
                    <MdOutlineAdd />
                </Button>
            </div>
        </div>
    );
};

export default AddTask;
