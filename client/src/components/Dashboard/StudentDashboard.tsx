import React from "react";
import { Button, Menu, Container, Header } from "semantic-ui-react";
import StudentTable from "./StudentTable";
import { Link } from "react-router-dom";

function StudentDashboard() {
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
                <Header
                    style={{
                        textAlign: "center",
                        fontSize: "4rem",
                        marginTop: "3rem",
                    }}
                    size='huge'
                >
                    Applications
                </Header>
                <Link to='/new-application'>
                    <Button
                        style={{ marginTop: "2rem", fontSize: "1.2rem" }}
                        color='violet'
                    >
                        Apply New
                    </Button>
                </Link>
                <Container style={{ marginTop: "6em" }}>
                    <StudentTable />
                </Container>
            </Container>
        </div>
    );
}

export default StudentDashboard;
