import React from 'react'
import "../App.css"
import TaskForm from "./TaskForm";
import Header from "./Header"
import TaskList from './TaskList'
import TaskListContextProvider from "../context/TaskListContext";
const App = () => {
    return (
        <TaskListContextProvider>
            <div className="container">
                <div className="app-wrapper">
                    <Header />
                    <div className="main">
                        <TaskForm/>
                        <TaskList />
                    </div>
                </div>
            </div>
        </TaskListContextProvider>
    );
    
};

export default App;
