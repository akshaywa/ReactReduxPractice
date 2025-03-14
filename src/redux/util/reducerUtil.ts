import { GlobalState } from '../interface/GlobalState';

const initialGlobalState: GlobalState = {
    formData: {
        studentName: "",
        dob: new Date(),
        schoolName: "",
        rollNumber: 0,
        email: "",
        phoneNumber: 0,
        image: new DataTransfer().files
    }
};

export { initialGlobalState };