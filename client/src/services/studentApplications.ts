import { student, Application } from "./user";

export function getStudentApplications(): Application[] {
    const studentApplications = student.info.applications;
    return studentApplications;
}
