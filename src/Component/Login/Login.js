import React, { useContext } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import firebaseConfig from './firebase.config';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSign = () => {
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                console.log("🚀 ~ file: Login.js ~ line 24 ~ .then ~ result", result)
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { displayName, email, photoURL };
                console.log("🚀 ~ file: Login.js ~ line 21 ~ .then ~ signedInUser", signedInUser)
                setLoggedInUser(signedInUser);
                history.replace(from);
                
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
                const errorMessage = error.message;
                console.log(errorMessage);
                const email = error.email;
                console.log(email);
                const credential = error.credential;
                console.log(credential);
            })
    }
    return (
        <Container className="mt-5">
            <Row>
                <div className="col-md-6 mx-auto">
                    <Card className="p-5 shadow border-0">
                        <form>
                            <h3>Login</h3>
                            <input type="email" name="Email" placeholder="Username or Email" className="form-input mb-3" id=""/>
                            <input type="email" name="Email" placeholder="Your Password" className="form-input mb-3" id="" />
                            <input type="checkbox" className="mb-3" id=""/> <label>Remember Me</label> <span className="recover-pass">Forgot Password</span>
                            <input type="submit" value="Login" className="btn btn-danger btn-block form-control mt-lg-5" id=""/>
                        </form>
                        <p className="text-center mt-4">Don't have an account? <span className="create-account-text">Create a new account</span> </p>
                    </Card>
                    <div className="col-md-6 mx-auto">
                        <div className="mt-5">
                            <button className="btn-light border-0 btn-google" onClick={handleGoogleSign}><img src="https://image.flaticon.com/icons/png/512/281/281764.png" className="google-icon" alt="icon"/>Continue with Google</button>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default Login;