import React from 'react';
import FormComponent from './FormComponent';
import IdCardComponent from './IdCardComponent';
import { useSelector } from 'react-redux';
import './Home.css';

const Home: React.FC = () => {
    const formData = useSelector((state: any) => state.global.formData);
    return (
        <div className='home-main'>
            <div>
                <FormComponent />
            </div>
            <div>
                <IdCardComponent formData={[formData]} />
            </div>
        </div>
    )
};
export default React.memo(Home);
