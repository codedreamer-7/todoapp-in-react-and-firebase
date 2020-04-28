import React, {useState, useEffect} from 'react'
import {OpenNavbar} from "../components/OpenNavbar"
import {auth} from "../config/fire"
import {useHistory} from "react-router-dom"



export const SignIn = () => {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const history =  useHistory();

    useEffect(()=>{
        auth().onAuthStateChanged(user=>{
            if(user){
                console.log(user, 'user');
                history.push("/");
                window.localStorage.setItem("uid", user.uid)
            }
            else{
                console.log("user logged out");
            } 
        })
    }, [])


    const login = (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        if(email.trim() !== '' && password.trim() !== ''){
            auth().signInWithEmailAndPassword(email, password)
                .then(()=>{
                    console.log("login success");
                    setLoading(false)
                })
                .catch(err=>{
                    console.log(err);
                    setError(err.message);
                    setLoading(false)
                })
        }
        else{
            setError('Please enter email and password');
        }
        
    }


    return (
        <div>
            <OpenNavbar/>
            <div>
                
                <form className="justify-content-center sign-in-form" onSubmit={login}>
                    <input id="email" className="d-block" type="text" placeholder="Email Id"/>
                    <input id="password" className="d-block" type="password" placeholder="Password" />
                    { error !== '' && <span> {error} </span> }
                    { loading && <span className="text-white">Loading...</span> }
                    <button className="sign-in-btn d-block">Sign In</button>
                </form>
            </div>
        </div>
    )
}
