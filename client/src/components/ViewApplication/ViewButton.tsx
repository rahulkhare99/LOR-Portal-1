import React from "react";
import { Button, Icon, Modal, Container, Header } from "semantic-ui-react";
import { Application } from "../../services/user";

type ViewButtonProps = {
    applicationId: string;
    applications: Application[];
};

const ViewButton: React.FC<ViewButtonProps> = ({applications, applicationId,...props}) => {
    const currentApplication: Application | undefined= applications.find(application => {
        return application.id = applicationId
    })
    return (
        <div>
            <Modal trigger={<Button color='teal'>View</Button>} closeIcon>
                <Modal.Header>Application ID: {currentApplication!.id}</Modal.Header>
                <Modal.Content image scrolling>
                    <Modal.Description>
                        <div
                            style={{
                                maxWidth: "810px",
                                width: "inherit",
                                fontSize: "1.5rem",
                            }}
                        >
                            <Container>
                                <Header style={{ fontSize: "3rem" }}>Name: {currentApplication?.student}</Header>
                                <div>
                                    <h2>Reg. Number: {currentApplication?.student + "'s reg no"}</h2>
                                    <h2>Department: {currentApplication?.studentDepartment}</h2>
                                    <h2>Statement of Purpose: </h2>
                                    <p>{currentApplication?.statementOfPurpose}</p>
                                </div>
                            </Container>
                        </div>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button animated='fade' color='red'>
                        <Button.Content visible>Reject LOR</Button.Content>
                        <Button.Content hidden>
                            <Icon name='close' />
                        </Button.Content>
                    </Button>
                    <Button animated='fade' color='blue'>
                        <Button.Content visible>Under Review</Button.Content>
                        <Button.Content hidden>
                            <Icon name='circle outline' />
                        </Button.Content>
                    </Button>
                    <Button animated='fade' color='green'>
                        <Button.Content visible>Grant LOR</Button.Content>
                        <Button.Content hidden>
                            <Icon name='check' />
                        </Button.Content>
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>
    );
};

export default ViewButton;
