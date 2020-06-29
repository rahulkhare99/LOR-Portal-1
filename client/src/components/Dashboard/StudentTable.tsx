import React from "react";
import { Table } from "semantic-ui-react";

function StudentTable() {
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
                        <Table.HeaderCell>Serial No.</Table.HeaderCell>
                        <Table.HeaderCell>Application ID</Table.HeaderCell>
                        <Table.HeaderCell>Teacher</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell>abc123</Table.Cell>
                        <Table.Cell>Raj</Table.Cell>
                        <Table.Cell negative>Rejected</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell>abc123</Table.Cell>
                        <Table.Cell>Raj</Table.Cell>
                        <Table.Cell positive>Accepted</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell>abc123</Table.Cell>
                        <Table.Cell>Raj</Table.Cell>
                        <Table.Cell>Pending</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell>abc123</Table.Cell>
                        <Table.Cell>Raj</Table.Cell>
                        <Table.Cell positive>Accepted</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell>abc123</Table.Cell>
                        <Table.Cell>Raj</Table.Cell>
                        <Table.Cell negative>Rejected</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell>abc123</Table.Cell>
                        <Table.Cell>Raj</Table.Cell>
                        <Table.Cell>Pending</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell>abc123</Table.Cell>
                        <Table.Cell>Raj</Table.Cell>
                        <Table.Cell positive>Accepted</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    );
}

export default StudentTable;
