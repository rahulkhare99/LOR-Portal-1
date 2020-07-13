export interface Application {
    id: string;
    teacher: string;
    student: string;
    teacherDepartment: string;
    studentDepartment: string;
    status: string;
}
export interface User {
    id: string;
    type: string;
    department: string;
    name: string;
    email: string;
    password: string;
}
export interface StudentUser {
    info: User;
    regNo: string;
    applications: Application[];
}
export interface TeacherUser {
    info: User;
    teacherId: string;
    applications: Application[];
}

export const teacher: TeacherUser = {
    info: {
        id: "1",
        type: "teacher",
        department: "CSE",
        name: "Rajesh",

        email: "rajesh@lor.com",
        password: "abc123",
    },
    teacherId: "123456",
    applications: [
        {
            id: "1",
            teacher: "Rajesh",
            student: "Rahul",
            teacherDepartment: "CSE",
            studentDepartment: "ICT",
            status: "Accepted",
        },
        {
            id: "2",
            teacher: "Rajesh",
            student: "Karthik",
            teacherDepartment: "CSE",
            studentDepartment: "MECH",
            status: "Rejected",
        },
        {
            id: "3",
            teacher: "Rajesh",
            student: "Namrata",
            teacherDepartment: "CSE",
            studentDepartment: "EEE",
            status: "Pending",
        },
        {
            id: "4",
            teacher: "Rajesh",
            student: "Disha",
            teacherDepartment: "CSE",
            studentDepartment: "ECE",
            status: "Accepted",
        },
        {
            id: "5",
            teacher: "Rajesh",
            student: "Rahul",
            teacherDepartment: "CSE",
            studentDepartment: "ICT",
            status: "Pending",
        },
    ],
};
export const student: StudentUser = {
    info: {
        id: "1",
        type: "student",
        department: "ICT",
        name: "Rahul",

        email: "rahul@lor.com",
        password: "abc123",
    },
    regNo: "1287429",
    applications: [
        {
            id: "1",
            teacher: "Rajesh",
            student: "Rahul",
            teacherDepartment: "CSE",
            studentDepartment: "ICT",
            status: "Pending",
        },
        {
            id: "2",
            teacher: "Smitha",
            student: "Rahul",
            teacherDepartment: "EEE",
            studentDepartment: "ICT",
            status: "Rejected",
        },
        {
            id: "3",
            teacher: "Santosh",
            student: "Rahul",
            teacherDepartment: "ECE",
            studentDepartment: "ICT",
            status: "Accepted",
        },
        {
            id: "4",
            teacher: "Rajesh",
            student: "Rahul",
            teacherDepartment: "CSE",
            studentDepartment: "ICT",
            status: "Pending",
        },
    ],
};

export function getCurrentUser() {
    const user = student;
    return user;
}
