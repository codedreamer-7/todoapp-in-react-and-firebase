import React from 'react'
import bannerImg from "../images/task-banner.png"

import {OpenNavbar} from "../components/OpenNavbar"

import {Link} from 'react-router-dom'


export const LandingPage = () => {

    return (
        <div>
            <OpenNavbar/>
           <div className="container">
            <div className="banner-img">
                <img src={bannerImg} className="w-100 container"/>
            </div>
            <div className="banner-text">
                <span>A goal without a plan is just a wish</span>
            </div>
            <div className="banner-actions text-center">
                <div className="mb-4">
                    <Link to="/sign-in">
                        <button className="sign-in-btn">Sign in</button>
                    </Link>
                    <Link to="/sign-up" className="d-block">
                        <span className="text-white sign-up-btn">Create an Account</span>
                    </Link>
                </div>
            </div>
           </div>
        </div>
    )
}
