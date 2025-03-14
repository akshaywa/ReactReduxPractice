import React from 'react';
import FormComponent from './FormComponent';
import IdCardComponent from './IdCardComponent';
import './Home.css';
const Home: React.FC = () => {
    return (
        <div className='home-main'>
            <div>
                <FormComponent />
            </div>
            <div>
                <IdCardComponent />
            </div>
        </div>
    )
};
export default React.memo(Home);
