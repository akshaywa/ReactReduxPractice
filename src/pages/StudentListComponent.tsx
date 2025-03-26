import React from 'react';
import { useSelector } from 'react-redux';
import IdCardComponent from './IdCardComponent';
import './StudentListComponent.css';

const StudentListComponent: React.FC = () => {
    const studentData = useSelector((state: any) => state.global.studentData);
    return (
        <>
            <IdCardComponent formData={studentData} />
        </>
    );
};

export default React.memo(StudentListComponent);