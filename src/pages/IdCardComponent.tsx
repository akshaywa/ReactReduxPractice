import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IdCardComponentProps } from '../interface/IdCardComponentProps';
import './IdCardComponent.css';

const IdCardComponent: React.FC<IdCardComponentProps> = ({ formData }) => {
    return (
        <>
            {formData.map((student: any) => (
                student.studentName && <Card key={student.rollNumber} sx={{ maxWidth: 300 }} className='id-card-component-main'>
                    <CardMedia
                        sx={{ height: 100, objectFit: 'contain' }}
                        image={student.image}
                        title={student.studentName}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {student.studentName}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            <Typography variant="body2">DOB: {student.dob.toString()}</Typography>
                            <Typography variant="body2">School Name: {student.schoolName}</Typography>
                            <Typography variant="body2">Roll Number: {student.rollNumber}</Typography>
                            <Typography variant="body2">Email: {student.email}</Typography>
                            <Typography variant="body2">Phone Number: {student.phoneNumber}</Typography>
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </>
    );
}

export default React.memo(IdCardComponent);