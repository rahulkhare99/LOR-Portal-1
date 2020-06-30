import http from "./http";

interface studentApplication {
    serialNo: number;
    applicationId: String;
    teacher: String;
    status: String;
}
export function getStudentApplications(): studentApplication[] {
    const studentApplications: studentApplication[] = [
        {
            serialNo: 1,
            applicationId: "1",
            teacher: "Swathi",
            status: "Accepted",
        },
        {
            serialNo: 2,
            applicationId: "2",
            teacher: "Ajit",
            status: "Rejected",
        },
        {
            serialNo: 3,
            applicationId: "3",
            teacher: "Rajesh",
            status: "Pending",
        },
        {
            serialNo: 4,
            applicationId: "4",
            teacher: "Mahesh",
            status: "Accepted",
        },
    ];
    return studentApplications;
}
