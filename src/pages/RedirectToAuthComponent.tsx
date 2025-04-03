import React, { useEffect } from 'react';

const RedirectToAuthComponent: React.FC = () => {
    useEffect(() => {
        window.location.replace("http://localhost:8088/login/oauth2/code/google");
        // This will redirect the user to the authentication endpoint
    }, []);

    return null;
};

export default React.memo(RedirectToAuthComponent);