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

const teachers = [
    { key: "1", text: "H. Balachandran", value: "H. Balachandran" },
    { key: "2", text: "Swathi", value: "Swathi" },
    { key: "3", text: "Ajitha Shenoy", value: "Ajitha Shenoy" },
];
const departments = [
    { key: "1", text: "Computer Science Engineering", value: "CSE" },
    { key: "2", text: "Computer and Communication Engineering", value: "CCE" },
    { key: "3", text: "Information Technology", value: "IT" },
    {
        key: "4",
        text: "Electronics and Communication Engineering",
        value: "ECE",
    },
];

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
                        label='Department'
                        options={departments}
                        placeholder='Department'
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
