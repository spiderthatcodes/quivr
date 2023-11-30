import { useState, useEffect } from 'react';
import { useLoginMutation, useSignupMutation } from '../app/authSlice';
import { useNavigate } from 'react-router-dom';
import { Wrapper, SignUp, AccountForm} from './style';

const Landing = () => {
    const navigate = useNavigate();
    const [loggingIn, setLoggingIn] = useState(true);
    const [login, loginResponse] = useLoginMutation();
    const [signup, signupResponse] = useSignupMutation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (loginResponse.isSuccess) navigate('/order-history');
        if (signupResponse.isSuccess) navigate('/');
    }, [loginResponse, navigate, signupResponse.isSuccess]);

    const handleLogin = () => {
        login({ username, password });
    };

    const handleSubmit = () => {
        let role = 'customer';
        if (password !== passwordConfirmation) {
            setErrorMessage('Password and confirmation do not match.');
            return;
        }
        signup({
            username,
            password,
            first_name,
            last_name,
            email,
            phone_number,
            role,
        });
        navigate('/order-history');
    };

    return (
        <Wrapper>
            <AccountForm>
                <h1>Welcome!</h1>
                Username:
                <br/>
                <input
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                {!loggingIn && (
                    <>
                        Email:{' '}
                        <input
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <br />
                        First Name:{' '}
                        <input
                            type='text'
                            value={first_name}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <br />
                        Last Name:{' '}
                        <input
                            type='text'
                            value={last_name}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <br />
                        Phone Number:{' '}
                        <input
                            type='text'
                            value={phone_number}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <br />
                    </>
                )}
                Password:
                <br/>
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                {!loggingIn && (
                    <>
                        Confirm Password:{' '}
                        <input
                            type='text'
                            value={passwordConfirmation}
                            onChange={(e) =>
                                setPasswordConfirmation(e.target.value)
                            }
                        />
                        <br />
                    </>
                )}
                <button
                    onClick={() => (loggingIn ? handleLogin() : handleSubmit())}
                >
                    {loggingIn ? 'Login' : 'Sign Up'}
                </button>
                {errorMessage && (
                    <div
                        className='alert alert-danger'
                        role='alert'
                    >
                        {errorMessage}
                    </div>
                )}
                <SignUp onClick={() => setLoggingIn(!login)}>
                    {loggingIn ? 'Sign Up' : 'Login'}
                </button>
            </AccountForm>
        </Wrapper>
    );
};

export default Landing;
