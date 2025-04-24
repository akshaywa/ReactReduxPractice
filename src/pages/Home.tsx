import React, { useEffect, useState } from 'react';
import axios from "axios";
import { updateGlobalState } from "../redux/reducer/globalSlice";
import { AppDispatch } from '../redux/store';
import FormComponent from './FormComponent';
import IdCardComponent from './IdCardComponent';
import { useSelector, useDispatch } from 'react-redux';
import './Home.css';
import { Navigate } from 'react-router';
import { jwtDecode } from "jwt-decode";


const Home: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { formData, jwtToken } = useSelector((state: any) => state?.global);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const response = await axios.get("http://localhost:8088/api/auth/token", {
                    withCredentials: true, // Ensures cookies are sent
                });

                const jwtToken = response.data.token;
                dispatch(updateGlobalState({ key: 'jwtToken', value: jwtToken }));
                const decodedToken: any = jwtDecode(jwtToken);
                dispatch(updateGlobalState({ key: 'decodedToken', value: decodedToken }));
            } catch (error) {
                console.error("Error fetching token", error);
            } finally {
                setLoading(false); // Set loading to false after API call
            }
        };
        fetchToken();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Show a loading indicator while waiting
    }

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
                : <Navigate to="/" replace />}
        </div>
    )
};
export default React.memo(Home);
