import React from "react";
import { useNavigate } from "react-router-dom";

import './NotFound.css'

import Button from "../../Components/button/Button";

const NotFound = () => {
    const navigate = useNavigate();
    return(
        <div className="container">
        <h1> Error: 404 - Not Found</h1>
        <Button onClick={()=> navigate(-1)}> Ir para Minhas tarefas </Button>
        </div>
    )
};

export default NotFound;
