import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './IdCardComponent.css';
import { useSelector } from 'react-redux';

const IdCardComponent: React.FC = () => {
    const formData = useSelector((state: any) => state.global.formData);
    const { studentName, dob, schoolName, rollNumber, email, phoneNumber, image } = formData;
    // Convert File object to URL
    const imageUrl = image instanceof FileList && image.length > 0 ? URL.createObjectURL(image[0]) : image;

    return (
        <>
            {studentName !== "" && <Card sx={{ maxWidth: 345 }} className='id-card-component-main'>
                <CardMedia
                    sx={{ height: 140, objectFit: 'contain' }}
                    image={imageUrl}
                    title={studentName}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {studentName}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <Typography variant="body2">DOB: {dob}</Typography>
                        <Typography variant="body2">School Name: {schoolName}</Typography>
                        <Typography variant="body2">Roll Number: {rollNumber}</Typography>
                        <Typography variant="body2">Email: {email}</Typography>
                        <Typography variant="body2">Phone Number: {phoneNumber}</Typography>
                    </Typography>
                </CardContent>
            </Card>}
        </>
    );
}

export default React.memo(IdCardComponent);