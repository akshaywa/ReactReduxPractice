import React, { useEffect } from 'react';
import axios from "axios";
import { updateGlobalState } from "../redux/reducer/globalSlice";
import { AppDispatch } from '../redux/store';
import FormComponent from './FormComponent';
import IdCardComponent from './IdCardComponent';
import { useSelector, useDispatch } from 'react-redux';
import './Home.css';

const Home: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { formData, jwtToken } = useSelector((state: any) => state.global);

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const response = await axios.get("http://localhost:8088/api/auth/token", {
                    withCredentials: true, // Ensures cookies are sent
                });

                const jwtToken = response.data.token;
                dispatch(updateGlobalState({ key: 'jwtToken', value: jwtToken }));
            } catch (error) {
                console.error("Error fetching token", error);
            }
        };
        fetchToken();
    }, []);

    return (
        <div className='home-main'>
            {jwtToken ? <>
                <div>
                    <FormComponent />
                </div>
                <div>
                    <IdCardComponent formData={[formData]} />
                </div>
            </>
                : <p>Loading...</p>}
        </div>
    )
};
export default React.memo(Home);
