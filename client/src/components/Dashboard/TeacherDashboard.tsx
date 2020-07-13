import React from "react";
import { Button, Menu, Container } from "semantic-ui-react";
import TeacherTable from "./TeacherTable";
import { useHistory } from "react-router-dom";

function TeacherDashboard() {
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
                <Container style={{ marginTop: "6em" }}>
                    <TeacherTable />
                </Container>
            </Container>
        </div>
    );
}

export default TeacherDashboard;
