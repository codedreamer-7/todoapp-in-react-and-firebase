import React from 'react';

import more from '../images/more.svg';

const TaskItemNow = () => {
    return (
        <div className="task-item pointer">
            <div className="task-title ">
                Take 40 push ups
            </div>
            <div className="task-footer d-flex justify-content-between">
                <div>
                    10 mins
                </div>
                <img className="pointer" src={more}/>
            </div>
        </div>
    )
}

export default TaskItemNow
