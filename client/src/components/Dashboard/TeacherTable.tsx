import React from "react";
import { Table, Header } from "semantic-ui-react";
import ViewButton from "../ViewApplication/ViewButton";
import { getTeacherApplications } from "../../services/teacherApplications";
// import { Link } from "react-router-dom";
// import { teacher } from "../../services/user";

function TeacherTable() {
    const teacherApplications = getTeacherApplications();

    return (
        <div>
            <Header
                floated='left'
                style={{ fontSize: "3.5rem", marginBottom: "1em" }}
            >
                Applications
            </Header>
            <Table
                striped
                fixed
                verticalAlign='middle'
                style={{ fontSize: "1.5rem" }}
            >
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Application ID</Table.HeaderCell>
                        <Table.HeaderCell>Student</Table.HeaderCell>
                        <Table.HeaderCell>Department</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {teacherApplications.map((teacherApplication) => (
                        <Table.Row>
                            <Table.Cell>{teacherApplication.id}</Table.Cell>
                            <Table.Cell>
                                {teacherApplication.student}
                            </Table.Cell>
                            <Table.Cell>
                                {teacherApplication.studentDepartment}
                            </Table.Cell>
                            <Table.Cell>{teacherApplication.status}</Table.Cell>
                            <Table.Cell>
                                {/* change the link from teacher.info.applications[0].id] to selectedApplicationId once database is connected */}
                                {/* <Link
                                    to={`/users/${teacher.info.id}/${teacher.info.applications[0].id}`}
                                > */}
                                <ViewButton />
                                {/* </Link> */}
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
}

export default TeacherTable;
