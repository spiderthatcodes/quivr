import { useState, useEffect } from 'react';
import { useLoginMutation } from '../app/authSlice';
import { useNavigate } from 'react-router-dom';
import { Wrapper, SignUp, AccountForm } from './style';

const Landing = () => {
    const navigate = useNavigate();
    const [loggingIn, setLoggingIn] = useState(true);
    const [login, loginResponse] = useLoginMutation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    console.log(errorMessage);

    useEffect(() => {
        if (loginResponse.isSuccess) navigate('/order-history');
        if (loginResponse.isError) {
            setErrorMessage(loginResponse.error.data.detail);
        }
    }, [loginResponse, navigate]);

    const handleLogin = () => {
        // e.preventDefault();
        login({ username, password });
    };

    return (
        <Wrapper>
            <AccountForm>
                Username:
                <input
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                {!loggingIn && (
                    <>
                        Email: <input type='text' />
                        <br />
                        First Name: <input type='text' />
                        <br />
                        Last Name: <input type='text' />
                        <br />
                        Phone Number: <input type='text' />
                        <br />
                    </>
                )}
                Password:
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                {!login && (
                    <>
                        Confirm Password: <input type='text' />
                        <br />
                    </>
                )}
                <button
                    onClick={() =>
                        loggingIn ? handleLogin() : console.log('click')
                    }
                >
                    {loggingIn ? 'Login' : 'Sign Up'}
                </button>
                <SignUp onClick={() => setLoggingIn(!login)}>
                    {loggingIn ? 'Sign Up' : 'Login'}
                </SignUp>
            </AccountForm>
        </Wrapper>
    );
};

export default Landing;
