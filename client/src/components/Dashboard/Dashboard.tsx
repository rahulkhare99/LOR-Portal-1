import React, { useState, useEffect } from "react";
import StudentDashboard from "./StudentDashboard";
import TeacherDashboard from "./TeacherDashboard";

function Dashboard() {
    const [role, setRole] = useState("");

    useEffect(() => {
        setRole("student");
        return () => {};
    }, [role]);

    if (role === "student") {
        return <StudentDashboard />;
    } else if (role === "teacher") {
        return <TeacherDashboard />;
    }
    return null;
}

export default Dashboard;
