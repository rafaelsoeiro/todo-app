import React from "react";

import Task from "../task/Task";

const Tasks = ({ tasks, handleTaskClick, handleTaskRemoveButton }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    handleTaskClick={handleTaskClick}
                    handleTaskRemoveButton={handleTaskRemoveButton}
                />
            ))}
        </>
    );
};

export default Tasks;
