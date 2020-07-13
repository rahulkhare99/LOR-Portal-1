import { student, Application } from "./user";

export function getStudentApplications(): Application[] {
    const studentApplications = student.applications;
    return studentApplications;
}
