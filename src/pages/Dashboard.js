import React from 'react'
import {OpenNavbar} from "../components/OpenNavbar";

import { drawRoutes } from '../drawRoutes';
import { BottomNavbar } from "../components/BottomNavbar";
import { TasksCount } from '../components/TasksCount';



export const Dashboard = ({ routes }) => {

    return (
        <div>
            <OpenNavbar/>
            {drawRoutes(routes)}
            <div className="d-flex justify-content-between w-100 p-3 mb-5">
                <TasksCount title="Tasks Completed" count="72.4 %" hint="Today" colour="lightgreen"/>
                <TasksCount title="Tasks Completed" count="72.4 %" hint="Today" colour="skyblue"/>
            </div>
            <BottomNavbar active='home' />
        </div>  
    )
}
