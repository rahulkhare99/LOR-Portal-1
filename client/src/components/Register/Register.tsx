import React from "react";
import "semantic-ui-css/semantic.min.css";
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

function Register() {
    return (
        <div>
            <Grid
                textAlign='center'
                style={{ height: "100vh" }}
                verticalAlign='middle'
            >
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header
                        as='h1'
                        color='violet'
                        textAlign='center'
                        style={{ fontSize: "2.5em", marginBottom: "1em" }}
                    >
                        Register
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input fluid placeholder='Name' />
                            <Form.Input
                                fluid
                                placeholder='Registration Number'
                            />
                            <Form.Input
                                fluid
                                icon='user'
                                iconPosition='left'
                                placeholder='Email ID'
                                type='email'
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                            />
                            <Link to='/dashboard'>
                                <Button color='violet' fluid size='large'>
                                    Register
                                </Button>
                            </Link>
                        </Segment>
                    </Form>
                    <Message>
                        Already a user?
                        <a href='/login'> Login</a>
                    </Message>
                </Grid.Column>
            </Grid>
        </div>
    );
}

export default Register;
