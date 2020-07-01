import React, { useState, useEffect } from "react";
import StudentDashboard from "./StudentDashboard";
import TeacherDashboard from "./TeacherDashboard";
import { getCurrentUser } from "../../services/user";
function Dashboard() {
    const user = getCurrentUser();
    const [role, setRole] = useState("");

    useEffect(() => {
        setRole(user.info.type);
        return () => {};
    }, [user.info.type]);

    if (role === "student") {
        return <StudentDashboard />;
    } else if (role === "teacher") {
        return <TeacherDashboard />;
    }
    return null;
}

export default Dashboard;
