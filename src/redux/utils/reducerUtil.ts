import { GlobalState } from '../interface/GlobalState';

const initialGlobalState: GlobalState = {
    formData: {
        studentName: "",
        dob: new Date(),
        schoolName: "",
        rollNumber: 0,
        email: "",
        phoneNumber: 0,
        image: "https://png.pngtree.com/png-clipart/20190706/original/pngtree-hand-painted-small-fresh-female-high-school-student-png-image_4376790.jpg"
    },
    studentData: [
        {
            studentName: "John Doe",
            dob: new Date('2000-01-01'),
            schoolName: "Example High School",
            rollNumber: 1,
            email: "john.doe@example.com",
            phoneNumber: 1234567890,
            image: "https://png.pngtree.com/png-clipart/20190706/original/pngtree-hand-painted-small-fresh-female-high-school-student-png-image_4376790.jpg"
        },
        {
            studentName: "Jane Smith",
            dob: new Date('2001-02-02'),
            schoolName: "Example High School",
            rollNumber: 2,
            email: "jane.smith@example.com",
            phoneNumber: 2345678901,
            image: "https://png.pngtree.com/png-clipart/20190706/original/pngtree-hand-painted-small-fresh-female-high-school-student-png-image_4376790.jpg"
        }
    ],
    jwtToken: null,
    decodedToken: {
        email: "",
        exp: 0,
        iat: 0,
        roles: [],
        sub: ""
    }
};

export { initialGlobalState };