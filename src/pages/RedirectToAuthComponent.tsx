import React from 'react';
import Button from '@mui/material/Button';
import './RedirectToAuthComponent.css'

const REDIRECT_URL = import.meta.env.VITE_AUTH_REDIRECT_URL ?? 'http://localhost:8088/oauth2/code/google';

const RedirectToAuthComponent: React.FC = () => {
    const loginWithGoogle = () => {
        window.location.href = REDIRECT_URL;
        // This will redirect the user to the authentication endpoint
    };

    return (
        <div className="redirect-to-auth-container">
            <Button variant="contained" size="large" onClick={loginWithGoogle}>Google Login</Button>
        </div>
    );
};

export default React.memo(RedirectToAuthComponent);