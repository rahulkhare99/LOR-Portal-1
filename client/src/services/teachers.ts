// import http from "./http";

interface teacher {
    name: string;
    teacherId: string;
    department: string;
}
interface teacherList {
    key: string;
    text: string;
    value: string;
}

export function getTeacherList(): teacherList[] {
    const teachers: teacher[] = [
        {
            name: "Rajesh",
            teacherId: "1",
            department: "CSE",
        },
        {
            name: "Ajit",
            teacherId: "2",
            department: "ICT",
        },
        {
            name: "Swathi",
            teacherId: "3",
            department: "ECE",
        },
        {
            name: "Mahesh",
            teacherId: "4",
            department: "EEE",
        },
    ];
    const teacherList = teachers.map(
        (teacher: teacher): teacherList => {
            return {
                key: teacher.teacherId,
                text: teacher.name,
                value: teacher.name,
            };
        }
    );

    return teacherList;
}
