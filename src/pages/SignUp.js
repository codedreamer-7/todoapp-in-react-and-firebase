import React, {useState, useEffect, useReducer} from 'react'
import {OpenNavbar} from "../components/OpenNavbar"
import {auth, firestore} from "../config/fire"
import {useHistory} from "react-router-dom"

const initialForm = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const reducer = (state, action) => {
    return {
        ...state,
        [action.type]: action.value
    }
}

export const SignUp = () => {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [signUpForm, dispatch] = useReducer(reducer ,initialForm);

    const history =  useHistory();

    useEffect(()=>{
        auth().onAuthStateChanged(user=>{
            if(user){
                console.log(user, 'user');
                history.push("/");
            }
            else{
                console.log("user logged out");
            } 
        })
    }, [])


    const signUp = (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

       console.table(signUpForm);

       if(
            signUpForm.firstName.trim() !== '' && 
            signUpForm.lastName.trim() !== '' && 
            signUpForm.email.trim() !== '' &&
            signUpForm.password.trim() !== '' &&
            signUpForm.confirmPassword.trim() !== ''
       ){
           if(signUpForm.password === signUpForm.confirmPassword){
                if(signUpForm.email.trim().includes('@') && signUpForm.email.trim().includes('.')){
                    let user = {};

                    auth().createUserWithEmailAndPassword(signUpForm.email, signUpForm.password)
                        .then((data)=>{
                            console.log(data);

                            user = data.user;

                            return firestore().collection('users').add({
                                firstName: signUpForm.firstName,
                                lastName: signUpForm.lastName,
                                joinedOn: new Date().toISOString(),
                                email: signUpForm.email,
                                uid: data.user.uid
                            })
                        })
                        .then(()=>{
                            history.push('/');
                            return user.sendEmailVerification();
                        })
                        .then(()=>{
                            console.log('email verify send');
                        })
                        .catch(err=>{
                            console.log(err);
                        })
                }
                else{
                    setError('Invalid email id')
                }
           }
           else{
               setError('Password confirmed incorrectly');
           }
       }
       else{
           setError('Fill the form correctly');
       }
        
    }


    return (
        <div>
            <OpenNavbar/>
            <div>
                
                <form className="justify-content-center sign-in-form" onSubmit={signUp}>
                <h3 className="text-center mb-4 pl-3 pr-3">Create an Account to get access to Dashboard</h3>
                    <input value={signUpForm.firstName} onChange={(e)=>dispatch({type: e.target.name, value: e.target.value})} name="firstName" className="d-block" type="text" placeholder="First Name" />
                    <input value={signUpForm.lastName} onChange={(e)=>dispatch({type: e.target.name, value: e.target.value})} name="lastName" className="d-block" type="text" placeholder="Last Name" />
                    <input value={signUpForm.email} onChange={(e)=>dispatch({type: e.target.name, value: e.target.value})} name="email" className="d-block" type="text" placeholder="Email Id"/>
                    <input value={signUpForm.password} onChange={(e)=>dispatch({type: e.target.name, value: e.target.value})} name="password" className="d-block" type="password" placeholder="Password" />
                    <input value={signUpForm.confirmPassword} onChange={(e)=>dispatch({type: e.target.name, value: e.target.value})} name="confirmPassword" className="d-block" type="password" placeholder="Confirm Password" />
                    { error !== '' && <span> {error} </span> }
                    { loading && <span className="text-white">Loading...</span> }
                    <button disabled={loading} className="sign-in-btn d-block">Sign Up</button>
                </form>
            </div>
        </div>
    )
}
