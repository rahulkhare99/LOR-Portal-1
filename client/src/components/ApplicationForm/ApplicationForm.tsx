import React from "react";
import {
    Button,
    Form,
    Input,
    Select,
    TextArea,
    Container,
} from "semantic-ui-react";
import { getTeacherList } from "../../services/teachers";
import { getDepartmentList } from "../../services/departments";
import { useHistory } from "react-router-dom";

const teachers = getTeacherList();

const departments = getDepartmentList();

function ApplicationForm() {
    const history = useHistory();
    return (
        <Container style={{ padding: "4em", marginTop: "2.5em" }}>
            <Button
                style={{ marginBottom: "2em" }}
                onClick={() => history.push("/dashboard")}
            >
                Back
            </Button>
            <Form>
                <Form.Group widths='equal'>
                    <Form.Field
                        control={Input}
                        label='First Name'
                        placeholder='First Name'
                    />
                    <Form.Field
                        control={Input}
                        label='Last Name'
                        placeholder='Last Name'
                    />
                    <Form.Field
                        control={Input}
                        label='Registration Number'
                        placeholder='Registration Number'
                    />
                </Form.Group>

                <Form.Group widths='equal'>
                    <Form.Field
                        control={Select}
                        label='Teacher'
                        options={teachers}
                        placeholder='Teacher'
                    />
                    <Form.Field
                        control={Select}
                        label='Your Department'
                        options={departments}
                        placeholder='Your Department'
                    />
                </Form.Group>

                <Form.Field
                    control={TextArea}
                    label='Statement of Purpose'
                    placeholder='Include your achievements and why you want this LOR...'
                    style={{ height: "400px" }}
                />
                <Form.Field>
                    <Button
                        color='violet'
                        onClick={() => history.push("/dashboard")}
                    >
                        Submit
                    </Button>
                </Form.Field>
            </Form>
        </Container>
    );
}

export default ApplicationForm;
