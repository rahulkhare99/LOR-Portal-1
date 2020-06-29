import React from "react";
import { Table, Header } from "semantic-ui-react";
import ViewButton from "../ViewApplication/ViewButton";

function TeacherTable() {
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
                        <Table.HeaderCell>Serial No.</Table.HeaderCell>
                        <Table.HeaderCell>Department</Table.HeaderCell>
                        <Table.HeaderCell>Student</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell>ICT</Table.Cell>
                        <Table.Cell>Raj</Table.Cell>
                        <Table.Cell>Granted</Table.Cell>
                        <Table.Cell>
                            <ViewButton />
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell>ICT</Table.Cell>
                        <Table.Cell>Raj</Table.Cell>
                        <Table.Cell>Under Review</Table.Cell>
                        <Table.Cell>
                            <ViewButton />
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell>ICT</Table.Cell>
                        <Table.Cell>Raj</Table.Cell>
                        <Table.Cell>Rejected</Table.Cell>
                        <Table.Cell>
                            <ViewButton />
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell>ICT</Table.Cell>
                        <Table.Cell>Raj</Table.Cell>
                        <Table.Cell>Granted</Table.Cell>
                        <Table.Cell>
                            <ViewButton />
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell>ICT</Table.Cell>
                        <Table.Cell>Raj</Table.Cell>
                        <Table.Cell>Under Review</Table.Cell>
                        <Table.Cell>
                            <ViewButton />
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    );
}

export default TeacherTable;
