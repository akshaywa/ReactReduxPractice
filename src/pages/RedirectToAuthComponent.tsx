import React from 'react';
import Button from '@mui/material/Button';
import './RedirectToAuthComponent.css'

const RedirectToAuthComponent: React.FC = () => {
    const loginWithGoogle = () => {
        window.location.replace("http://localhost:8088/oauth2/code/google");
        // This will redirect the user to the authentication endpoint
    };

    return (
        <div className="redirect-to-auth-container">
            <Button variant="contained" onClick={loginWithGoogle}>Google Login</Button>
        </div>
    );
};

export default React.memo(RedirectToAuthComponent);