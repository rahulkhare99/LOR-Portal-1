import React from "react";
import {
    Button,
    Form,
    Input,
    Select,
    TextArea,
    Container,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { getTeacherList } from "../../services/teachers";
import { getDepartmentList } from "../../services/departments";

const teachers = getTeacherList();

const departments = getDepartmentList();

function ApplicationForm() {
    // const handleChange = () => {};
    return (
        <Container style={{ padding: "4em", marginTop: "2.5em" }}>
            <Link to='/dashboard'>
                <Button style={{ marginBottom: "2em" }}>Back</Button>
            </Link>
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
                    <Link to='/dashboard'>
                        <Button color='violet'>Submit</Button>
                    </Link>
                </Form.Field>
            </Form>
        </Container>
    );
}

export default ApplicationForm;
