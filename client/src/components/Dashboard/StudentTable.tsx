import React from "react";
import { Table } from "semantic-ui-react";
import { getStudentApplications } from "../../services/studentApplications";

function StudentTable() {
    const studentApplications = getStudentApplications();
    function getPositiveStatus(status: string): boolean | undefined {
        if (status === "Accepted") {
            return true;
        } else if (status === "Pending") {
            return undefined;
        }
    }
    function getNegativeStatus(status: string): boolean | undefined {
        if (status === "Rejected") {
            return true;
        } else if (status === "Pending") {
            return undefined;
        }
    }
    return (
        <div>
            <Table
                striped
                fixed
                verticalAlign='middle'
                style={{ fontSize: "1.5rem" }}
            >
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Application ID</Table.HeaderCell>
                        <Table.HeaderCell>Teacher</Table.HeaderCell>
                        <Table.HeaderCell>Department</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {studentApplications.map((studentApplication) => (
                        <Table.Row key={studentApplication.id}>
                            <Table.Cell>{studentApplication.id}</Table.Cell>
                            <Table.Cell>
                                {studentApplication.teacher}
                            </Table.Cell>
                            <Table.Cell>
                                {studentApplication.teacherDepartment}
                            </Table.Cell>
                            <Table.Cell
                                negative={getNegativeStatus(
                                    studentApplication.status
                                )}
                                positive={getPositiveStatus(
                                    studentApplication.status
                                )}
                            >
                                {studentApplication.status}
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
}

export default StudentTable;
