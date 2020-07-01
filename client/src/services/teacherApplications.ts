import { teacher, Application } from "./user";

interface teacherApplications {
    applicationId: string;
    student: string;
    department: string;
    status: string;
}
export function getTeacherApplications(): Application[] {
    const teacherApplications: Application[] = teacher.info.applications;
    return teacherApplications;
}
