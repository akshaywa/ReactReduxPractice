import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from "react-redux";
import { updateGlobalState } from "../redux/reducer/globalSlice";
import { FormState } from '../interface/FormState';
import { AppDispatch } from '../redux/store';
import TextField from '@mui/material/TextField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";
import './FormComponent.css';

const FormComponent: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(null);
    const { control, register, handleSubmit, formState: { errors }, reset } = useForm<FormState>();

    const onSubmit = (data: FormState) => {
        dispatch(updateGlobalState({ key: 'formData', value: data }));
        setTimeout(() => {
            reset();
            setSelectedImage(null);
        }, 500);
    };

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form-component-main'>
            <div>
                <TextField label="Student Name" variant="outlined" {...register('studentName', { required: 'Student Name is required' })} />
                {errors.studentName && <span>{errors.studentName.message}</span>}
            </div>

            <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <Controller
                            name="dob"
                            control={control}
                            rules={{ required: "DOB is required" }}
                            render={({ field }) => (
                                <DatePicker
                                    {...field}
                                    label="Birth Date"
                                    value={field.value ? dayjs(field.value) : null}
                                    onChange={(date) => field.onChange(date ? date.toISOString() : null)}
                                />
                            )}
                        />
                    </DemoContainer>
                </LocalizationProvider>
                {errors.dob && <span>{errors.dob.message}</span>}
            </div>

            <div>
                <TextField label="School Name" variant="outlined" {...register('schoolName', { required: 'School Name is required' })} />
                {errors.schoolName && <span>{errors.schoolName.message}</span>}
            </div>

            <div>
                <TextField
                    label="Roll Number"
                    variant="outlined"
                    {...register('rollNumber', {
                        required: 'Roll Number is required',
                        pattern: {
                            value: /^[0-9]+$/,
                            message: 'Roll Number must be numeric'
                        }
                    })}
                />
                {errors.rollNumber && <span>{errors.rollNumber.message}</span>}
            </div>

            <div>
                <TextField label="Email" variant="outlined" {...register('email', {
                    required: 'Email is required',
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: 'Invalid email address'
                    }
                })} />
                {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div>
                <TextField
                    label="Phone Number"
                    variant="outlined"
                    {...register('phoneNumber', {
                        required: 'Phone Number is required',
                        pattern: {
                            value: /^[0-9]+$/,
                            message: 'Phone Number must be numeric'
                        }
                    })}
                />
                {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
            </div>

            <div>
                <input
                    type="file"
                    accept="image/*"
                    {...register('image', {
                        required: 'Image is required',
                        onChange: (e) => handleImageUpload(e)
                    })}
                />
                {errors.image && <span>{errors.image.message}</span>}

                {selectedImage && (
                    <div>
                        <h3>Preview:</h3>
                        <img src={typeof selectedImage === 'string' ? selectedImage : undefined} alt="Uploaded" style={{ width: '200px', height: 'auto' }} />
                    </div>
                )}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default React.memo(FormComponent);