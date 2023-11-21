import { useState } from 'react';
import { Wrapper, SignUp, AccountForm } from './style';

const Landing = () => {
    const [login, setlogin] = useState(true);

    return (
        <Wrapper>
            <AccountForm>
                Username: <input type='text' />
                <br />
                {!login && (
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
                Password:{' '}
                <input
                    type='password'
                    name=''
                    id=''
                />
                <br />
                {!login && (
                    <>
                        Confirm Password: <input type='text' />
                        <br />
                    </>
                )}
                <button>{login ? 'Login' : 'Sign Up'}</button>
                <SignUp onClick={() => setlogin(!login)}>
                    {login ? 'Sign Up' : 'Login'}
                </SignUp>
            </AccountForm>
        </Wrapper>
    );
};

export default Landing;
