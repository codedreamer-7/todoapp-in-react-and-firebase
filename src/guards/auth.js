
import {auth as aut} from "../config/fire";

const auth = (to, from, next) => {
    aut().onAuthStateChanged(user=> {
        if(user){
            next();
        }
        else{
            next.redirect('/');
        }
    })
}

export default auth;