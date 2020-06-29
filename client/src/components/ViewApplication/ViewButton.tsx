import React from "react";
import { Button, Icon, Modal } from "semantic-ui-react";
import StudentDetails from "./StudentDetails";

const ViewButton = () => {
    return (
        <div>
            <Modal trigger={<Button color='teal'>View</Button>} closeIcon>
                <Modal.Header>Application ID: {"abc123"}</Modal.Header>
                <Modal.Content image scrolling>
                    <Modal.Description>
                        <div
                            style={{
                                maxWidth: "810px",
                                width: "inherit",
                                fontSize: "1.5rem",
                            }}
                        >
                            <StudentDetails />
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
