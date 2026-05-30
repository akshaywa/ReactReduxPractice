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
                student?.studentName && <Card key={student?.rollNumber ?? student?.email ?? Math.random()} sx={{ maxWidth: 300 }} className='id-card-component-main'>
                    <CardMedia
                        sx={{ height: 100, objectFit: 'contain' }}
                        image={String(student?.image ?? '')}
                        title={student?.studentName ?? 'Student'}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {student?.studentName}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            <Typography variant="body2">DOB: {student?.dob ? new Date(student.dob).toDateString() : 'N/A'}</Typography>
                            <Typography variant="body2">School Name: {student?.schoolName ?? 'N/A'}</Typography>
                            <Typography variant="body2">Roll Number: {student?.rollNumber ?? 'N/A'}</Typography>
                            <Typography variant="body2">Email: {student?.email ?? 'N/A'}</Typography>
                            <Typography variant="body2">Phone Number: {student?.phoneNumber ?? 'N/A'}</Typography>
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </>
    );
}

export default React.memo(IdCardComponent);