import React from "react";
import "semantic-ui-css/semantic.min.css";
import {
    Button,
    Grid,
    Header,
    Message,
    Segment,
    Container,
} from "semantic-ui-react";
import * as yup from "yup";
import { Formik, Form as FormikForm } from "formik";
import { InputField } from "../common/InputField";
import { useHistory } from "react-router-dom";

const validationSchema = yup.object({
    email: yup.string().email().required("Email is required."),
    password: yup.string().required("Password is required.").min(5).max(30),
});

function Login() {
    const history = useHistory();
    return (
        <Container style={{ textAlign: "center", overflow: "hidden" }}>
            <Header
                as='h1'
                color='black'
                style={{
                    fontSize: "4rem",
                    marginTop: "2em",
                }}
            >
                Welcome to LOR Portal
            </Header>
            <Grid
                textAlign='center'
                style={{ marginTop: "3em" }}
                verticalAlign='middle'
            >
                <Grid.Column style={{ maxWidth: 500, marginBottom: "10em" }}>
                    <Header
                        as='h1'
                        color='violet'
                        textAlign='center'
                        style={{ fontSize: "2em", marginBottom: "1em" }}
                    >
                        Log In
                    </Header>
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(data, { setSubmitting, resetForm }) => {
                            setSubmitting(true);
                            // STORE INTO DATABASE
                            console.log("Submit: ", data);
                            history.push("/dashboard");
                            setSubmitting(false);
                            resetForm();
                        }}
                    >
                        {({ values, errors, isSubmitting }) => (
                            <FormikForm>
                                <Segment stacked size='big'>
                                    <InputField
                                        icon='user'
                                        placeholder='Email ID'
                                        name='email'
                                        type='email'
                                    />
                                    <InputField
                                        icon='lock'
                                        placeholder='Password'
                                        name='password'
                                        type='password'
                                        style={{ marginTop: "20px" }}
                                    />
                                </Segment>
                                <Button
                                    disabled={isSubmitting}
                                    type='submit'
                                    color='violet'
                                    fluid
                                    size='large'
                                >
                                    LOGIN
                                </Button>
                                {/* <pre>{JSON.stringify(values, null, 2)}</pre>
                                <pre>
                                    Errors: {JSON.stringify(errors, null, 2)}
                                </pre> */}
                            </FormikForm>
                        )}
                    </Formik>
                    <Message>
                        New user?
                        <a href='/register'> Register</a>
                    </Message>
                </Grid.Column>
            </Grid>
        </Container>
    );
}

export default Login;
