
import {auth} from "../config/fire";

const publicOnly = (to, from, next) => {
    auth().onAuthStateChanged(user=> {
        if(user){
            next.redirect('/dashboard');
        }
        else{
            next();
        }
    })
}

export default publicOnly