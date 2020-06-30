import http from "./http";

interface teacherApplications {
    applicationId: String;
    student: String;
    department: String;
}
export function getTeacherApplications(): teacherApplications[] {
    const teacherApplications: teacherApplications[] = [
        {
            applicationId: "1",
            student: "Rohit",
            department: "ICT",
        },
        {
            applicationId: "2",
            student: "Darshan",
            department: "EEE",
        },
        {
            applicationId: "3",
            student: "Megha",
            department: "CSE",
        },
        {
            applicationId: "4",
            student: "Disha",
            department: "ECE",
        },
    ];

    return teacherApplications;
}
