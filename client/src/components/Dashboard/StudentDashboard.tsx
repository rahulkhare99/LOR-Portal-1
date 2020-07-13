import React from "react";
import { Button, Menu, Container, Header } from "semantic-ui-react";
import StudentTable from "./StudentTable";
import { useHistory } from "react-router-dom";

function StudentDashboard() {
    const history = useHistory();

    return (
        <div>
            <Menu style={{ fontSize: "1rem" }}>
                <Menu.Item position='right'>
                    <Button onClick={() => history.push("/login")}>
                        Log Out
                    </Button>
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
                <Button
                    style={{ marginTop: "2rem", fontSize: "1.2rem" }}
                    color='violet'
                    onClick={() => history.push("/new-application")}
                >
                    Apply New
                </Button>
                <Container style={{ marginTop: "6em" }}>
                    <StudentTable />
                </Container>
            </Container>
        </div>
    );
}

export default StudentDashboard;
