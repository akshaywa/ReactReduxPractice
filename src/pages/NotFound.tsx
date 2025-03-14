import React from 'react';
import './NotFound.css';
const NotFound: React.FC = () => {
    return (
        <div className='not-found-main'>
            <h1>404 - Page Not Found</h1>
        </div>
    )
};
export default React.memo(NotFound);
