
import React from 'react';
import more from '../images/more.svg';

const TaskItemNext = () => {
    return (
        <div className="task-item pointer">
            <div className="task-title text-right">
                Take 40 push ups
            </div>
            <div className="task-footer d-flex justify-content-between">
                <img className="pointer" src={more}/>
                <div>
                    10 mins
                </div>
            </div>
        </div>
    )
}

export default TaskItemNext
