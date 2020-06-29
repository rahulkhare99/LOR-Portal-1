import React from "react";
import "semantic-ui-css/semantic.min.css";
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
    Container,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
function Login() {
    return (
        <Container style={{ textAlign: "center" }}>
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
                    <Form size='large'>
                        <Segment stacked>
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
                                    Login
                                </Button>
                            </Link>
                        </Segment>
                    </Form>
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
