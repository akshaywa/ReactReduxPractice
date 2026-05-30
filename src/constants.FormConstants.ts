const textFieldProps = [
    { label: "Student Name", name: "studentName", required: "Student Name is required" },
    { label: "School Name", name: "schoolName", required: "School Name is required" },
    { label: "Roll Number", name: "rollNumber", required: "Roll Number is required", pattern: { value: /^[0-9]+$/i, message: "Roll Number must be numeric" } },
    { label: "Email", name: "email", required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, message: "Invalid email address" } },
    { label: "Phone Number", name: "phoneNumber", required: "Phone Number is required", pattern: { value: /^[0-9]{7,15}$/, message: "Phone Number must be numeric and between 7-15 digits" } }
];

export { textFieldProps };