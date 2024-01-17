'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useUserAuth } from "../../components/authContext/AuthContext";
import Link from 'next/link';
import "./login.scss"

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [agreed, setAgreed] = useState(false)
    const [rememberMe, setRememberMe] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const { signIn } = useUserAuth();
    const navigate = useRouter();
    const handleSignIn = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signIn(email, password);
            console.log('Logged in successfully')
            navigate.push('/admin');
        } catch (e) {
            setError(e.message);
            console.log(error);
        }
    };
    useEffect(() => {
        const hasLoginShown = sessionStorage.getItem('hasLoginShown');

        if (!hasLoginShown) {
            retrieveRememberedCredentials();
            sessionStorage.setItem('hasLoginShown', 'true');
        }
    }, []);

    const retrieveRememberedCredentials = () => {
        const rememberedEmail = localStorage.getItem('rememberedEmail');
        const rememberedPassword = localStorage.getItem('rememberedPassword');

        if (rememberedEmail && rememberedPassword) {
            setEmail(rememberedEmail);
            setPassword(rememberedPassword);
            setAgreed(true);
        }
    };

    const handleRememberMe = (e) => {
        setRememberMe(e.target.checked);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Validate the form fields here if needed

        // Remember the email and password if the "Remember Me" checkbox is checked
        if (rememberMe) {
            localStorage.setItem('rememberedEmail', email);
            localStorage.setItem('rememberedPassword', password);
        } else {
            localStorage.removeItem('rememberedEmail');
            localStorage.removeItem('rememberedPassword');
        }
        // Proceed with the sign-in process
        handleSignIn(e);
    };
    return (
        <section className="login">
            <div className="login__container containered">
                <div className="login__content">
                    <form className="login__form" onSubmit={handleSignIn}>
                        <div className="form__container">
                            <div className="form__container_form-input">
                                <h1>Login</h1>
                                <div className="login__input">
                                    <input type="email" id="email" className="login__input-field" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="login__input">
                                    <input type="password" id="password" className="login__input-field left-aligned-input" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ textAlign: 'left' }} />
                                </div>
                                <div className="login__button">
                                    <button onClick={handleFormSubmit} type="submit" className="login__button-sign">
                                        <h3>Login Title</h3>
                                    </button>
                                </div>
                                <div className="login__checkbox">
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={rememberMe}
                                            onChange={handleRememberMe}
                                            required
                                        />
                                    </label>
                                    <p>Remember Password</p>
                                </div>
                                {formErrors.agreed && (
                                    <p className="error-message">{formErrors.agreed}</p>
                                )}
                            </div>
                            <div className="login__forgot">
                                <span className='login__forgot'>Forgot Password<Link className='clickhere__button' href="/passwordreset">Login</Link></span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login
