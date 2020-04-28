
import React, { useState } from 'react';
import {firestore, auth} from "../config/fire";


const useTodos = () => {
    const [loading, setLoading] = useState(true);
    const [todos, setTodos] = useState([]);

    auth().onAuthStateChanged(user => {
        if(user){
            firestore().collection('todos').where('user', '==', user.uid)
                .get()
                .then(data => {
                    let tasks = [];
                    data.forEach(doc=>{
                        tasks.push({
                            ...doc.data(),
                            id: doc.id
                        })
                    })
                    setTodos(tasks);
                    setLoading(false);
                });    
        }

    })

    return [loading, todos];
}

export default useTodos;
