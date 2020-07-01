// import http from "./http";

interface department {
    departmentId: string;
    name: string;
}

interface departmentList {
    key: string;
    text: string;
    value: string;
}

export function getDepartmentList(): departmentList[] {
    const departments: department[] = [
        {
            departmentId: "1",
            name: "ICT",
        },
        {
            departmentId: "2",
            name: "CSE",
        },
        {
            departmentId: "3",
            name: "ECE",
        },
        {
            departmentId: "4",
            name: "EEE",
        },
    ];

    const departmentList = departments.map(
        (department: department): departmentList => {
            return {
                key: department.departmentId,
                text: department.name,
                value: department.name,
            };
        }
    );

    return departmentList;
}
