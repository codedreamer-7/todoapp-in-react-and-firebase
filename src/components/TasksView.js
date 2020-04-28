import React, {useEffect} from 'react';

import TaskItemNow from "../components/TaskItemNow";
import TaskItemNext from "../components/TaskItemNext";
import AddTask from "../components/AddTask";

import arrow from "../images/arrow.svg";
import useTodos from "../hooks/useTodos";

import {Loading} from "../pages/Loading";


export const TasksView = () => {
    const [ loading, todos ] = useTodos();
   

    useEffect(()=>{
        if(!loading){
            let nextTaskDiv = document.getElementsByClassName("next-tasks")[0];
            nextTaskDiv.scrollLeft = nextTaskDiv.scrollWidth;
        }
        console.log('tasksview')

    }, [loading])


    return (
      loading ? 
      <Loading /> :
      <div className="dashboard">
            
            <div className="date-div mt-4">
                <span className="date">12 Sun, April 2020</span>
                <span className="time">10:25 AM</span>
            </div>
            <div className="current-tasks">
                <div className="vertical-div">
                    <span>Tasks for now</span>
                    <img src={arrow}/>
                </div>
                <div className="task-items">
                    <TaskItemNow/>
                    <TaskItemNow/>
                    <AddTask/>
                </div>
            </div>
            <div className="next-tasks">
                <div className="task-items-2">
                    <AddTask/>
                    <TaskItemNext/>
                    <TaskItemNext/>
                </div>
                <div className="vertical-div-2">
                    <span>Afternoon tasks</span>
                    <img src={arrow}/>
                </div>
            </div>
            
        </div>
    )
}
