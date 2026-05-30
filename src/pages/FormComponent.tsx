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
import { textFieldProps } from '../constants/FormConstants';
import dayjs from "dayjs";
import './FormComponent.css';

const FormComponent: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(null);
    const { control, register, handleSubmit, formState: { errors }, reset } = useForm<FormState>({
        defaultValues: {
            studentName: '',
            dob: new Date(),
            schoolName: '',
            rollNumber: 0,
            email: '',
            phoneNumber: 0,
            image: null as any,
        }
    });

    const onSubmit = (data: FormState) => {
        const payload = { ...data, image: selectedImage };
        dispatch(updateGlobalState({ key: 'formData', value: payload }));
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
            {textFieldProps.map(({ label, name, required, pattern }) => (
                <div key={name}>
                    <TextField
                        label={label}
                        variant="outlined"
                        {...register(name as keyof FormState, ({ required, pattern, valueAsNumber: name === 'rollNumber' || name === 'phoneNumber' } as any))}
                        error={!!errors[name as keyof FormState]}
                        helperText={errors[name as keyof FormState]?.message as string | undefined}
                    />
                </div>
            ))}

            <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
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
                <input
                    type="file"
                    accept="image/*"
                    {...register('image', {
                        required: 'Image is required',
                        onChange: handleImageUpload
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