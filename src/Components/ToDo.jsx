import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "./header/Header";
import AddTask from "./addTask/AddTask";
import Tasks from "./tasks/Tasks";

const ToDo = () => {
    const [tasks, setTasks] = useState([
        {
            id: uuidv4(),
            title: "Tarefa - Toque para completar",
            completed: false,
            details: "Digite os detalhes da sua tarefa",
        },
    ]);

    const handleTaskAddition = (taskTitle) => {
        const newTasks = [
            ...tasks,
            {
                title: taskTitle,
                id: uuidv4(),
                completed: false,
                details: "Digite os detalhes da sua tarefa",
            },
        ];
        setTasks(newTasks);
    };

    const handleTaskClick = (taksId) => {
        const newTasks = tasks.map((task) => {
            if (task.id === taksId)
                return { ...task, completed: !task.completed };

            return task;
        });
        setTasks(newTasks);
    };
    const handleTaskRemoveButton = (taksId) => {
        const newTasks = tasks.filter((task) => task.id !== taksId);

        setTasks(newTasks);
    };

    return (
        <>
            <Header />
            <AddTask handleTaskAddition={handleTaskAddition} />
            <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskRemoveButton={handleTaskRemoveButton}
            />
        </>
    );
};

export default ToDo;
