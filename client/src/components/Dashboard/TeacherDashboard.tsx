import React from "react";
import { Button, Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import TeacherTable from "./TeacherTable";
function TeacherDashboard() {
    return (
        <div>
            <Menu style={{ fontSize: "1rem" }}>
                <Menu.Item position='right'>
                    <Link to='/login'>
                        <Button>Log Out</Button>
                    </Link>
                </Menu.Item>
            </Menu>
            <Container textAlign='center'>
                <Container style={{ marginTop: "6em" }}>
                    <TeacherTable />
                </Container>
            </Container>
        </div>
    );
}

export default TeacherDashboard;
