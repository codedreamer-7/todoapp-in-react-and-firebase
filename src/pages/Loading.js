
import React from 'react';

import loadingImg from "../images/loading.gif"


export const Loading = () => {
    return (
        <div className="loading">
            <div className="content">
                <img src={loadingImg} />
                <div className="h4">Loading</div>
            </div>
        </div>
    )
}

