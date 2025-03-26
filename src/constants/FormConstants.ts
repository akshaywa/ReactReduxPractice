const textFieldProps = [
    { label: "Student Name", name: "studentName", required: "Student Name is required" },
    { label: "School Name", name: "schoolName", required: "School Name is required" },
    { label: "Roll Number", name: "rollNumber", required: "Roll Number is required", pattern: { value: /^[0-9]+$/, message: "Roll Number must be numeric" } },
    { label: "Email", name: "email", required: "Email is required", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: "Invalid email address" } },
    { label: "Phone Number", name: "phoneNumber", required: "Phone Number is required", pattern: { value: /^[0-9]+$/, message: "Phone Number must be numeric" } }
];

export { textFieldProps };