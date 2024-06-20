'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUserAuth } from "../../context/authContext/AuthContext";
import Link from 'next/link';
import "./login.scss";

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const { signIn } = useUserAuth();
    const router = useRouter();

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
            setRememberMe(true);
        }
    };

    const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRememberMe(e.target.checked);
    };

    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        try {
            await signIn(email, password);
            if (rememberMe) {
                localStorage.setItem('rememberedEmail', email);
                localStorage.setItem('rememberedPassword', password);
            } else {
                localStorage.removeItem('rememberedEmail');
                localStorage.removeItem('rememberedPassword');
            }
            router.push('/admin');
        } catch (error: any) {
            setError(error.message);
        }
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
                                    <input
                                        type="email"
                                        id="email"
                                        className="login__input-field"
                                        placeholder="Enter Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="login__input">
                                    <input
                                        type="password"
                                        id="password"
                                        className="login__input-field left-aligned-input"
                                        placeholder="Enter Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        style={{ textAlign: 'left' }}
                                        required
                                    />
                                </div>
                                {error && <p className="error-message">{error}</p>}
                                <div className="login__button">
                                    <button type="submit" className="login__button-sign">
                                        <h3>Login</h3>
                                    </button>
                                </div>
                                <div className="login__checkbox">
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={rememberMe}
                                            onChange={handleRememberMeChange}
                                        />
                                        Remember Password
                                    </label>
                                </div>
                            </div>
                            <div className="login__forgot">
                                <span className='login__forgot'>
                                    Forgot Password? <Link className='clickhere__button' href="/passwordreset">Click here</Link>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Login;
