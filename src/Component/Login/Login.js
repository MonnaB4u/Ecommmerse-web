import React, { useContext, useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import initializeAuth from './Firebase/firebase.initialize';
import './Login.css'
import { useLocation, useNavigate } from 'react-router-dom';
import EmailPassLogin from './EmailPassLogin';
import { UserContext } from '../../App';


const provider = new GoogleAuthProvider();
initializeAuth();

const Login = () => {
    const [loggedInusers, setLoggedInUsers] = useContext(UserContext);

    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    const navigate = useNavigate()
    const [logUser, setlogUser] = useState({})

    const handleLogin = () => {
        const auth = getAuth();
        console.log("login", auth)
        signInWithPopup(auth, provider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                let user = {
                    loggedInusers: true,
                    name: displayName,
                    email: email,
                    photoURL: photoURL
                }
                setLoggedInUsers(user);
                setlogUser(user);
                navigate(from)
            })
            .catch(err => {
                alert(err.message)
            })
    }

    const auth = getAuth();
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setLoggedInUsers({});
            })
    }
    return (
        <div>
            <div className="container" >
                <div className="row">

                    <div className="col-md-6 mt-5 im-head">
                        <div class="login">Login</div>
                        <div class="eula">By logging in you agree to the ridiculously long terms that you didn't bother to read</div>
                    </div>

                    <div className="col-md-6 mt-4">
                        <div className="  text-center">
                            <EmailPassLogin></EmailPassLogin>
                        </div>
                        <div className="">
                            <div className=" text-center pb-3 text-center">

                                {
                                    !loggedInusers.name ?

                                        <button className="btn bg-success mb-2 text-white w-25" onClick={() => handleLogin()}> Google</button>

                                        :
                                        <button className="btn bg-danger w-25" onClick={() => handleSignOut()}>Google Sign Out</button>
                                }

                                {/* <GithubLogin></GithubLogin> */}
                                <br />
                                {
                                    logUser.email &&
                                    <div>
                                        <h1>WellCome {loggedInusers.name}</h1>
                                        <p>Your Email is:-- <a href="">{loggedInusers.email}</a></p>
                                    </div>
                                }
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;
