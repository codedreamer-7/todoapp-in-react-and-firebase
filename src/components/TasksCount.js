
import React from 'react';

import moreImg from "../images/vertical-more.svg";


export const TasksCount = ({title, count, hint, colour}) => {
    return (
        <div className="tasks-count" style={{color: `var(--${colour})`}} >
            <div className="d-flex justify-content-between">
                <div className="text pr-3">
                    {title}
                </div>
                <div>
                    <img src={moreImg} className="w-75 pointer" />
                </div>
            </div>
            <div className="count">
                {count}
            </div>
            <small className="text-grey">
                {hint}
            </small>
        </div>
    )
}
