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
import {
    Formik,
    Form as FormikForm,
    Field,
    FieldAttributes,
    useField,
} from "formik";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

type InputFieldProps = {
    placeholder: string;
    type: string;
    icon?: string;
} & FieldAttributes<{}>;

const InputField: React.FC<InputFieldProps> = ({
    placeholder,
    icon,
    style,
    type,
    ...props
}) => {
    const [field, meta] = useField<{}>(props);
    // get the error text from meta
    const errorText: string | undefined =
        meta.error && meta.touched ? meta.error : "";
    let output: any;
    if (!!errorText) {
        output = (
            <>
                <Field
                    fluid
                    style={style}
                    icon={icon}
                    {...field}
                    iconPosition='left'
                    type={type}
                    placeholder={placeholder}
                    error={!!errorText}
                    as={Form.Input}
                />
                <Message error content={errorText} size='tiny' />
            </>
        );
    } else {
        output = (
            <Field
                fluid
                icon={icon}
                type={type}
                {...field}
                style={style}
                iconPosition='left'
                placeholder={placeholder}
                error={!!errorText}
                as={Form.Input}
            />
        );
    }
    return output;
};

const validationSchema = yup.object({
    name: yup.string().required("Name is a required.").max(50),
    regNo: yup.string().required("Registration Number is required.").max(8),
    email: yup.string().email().required("Email is required."),
    password: yup.string().required("Password is required.").min(5).max(30),
});

function Register() {
    const history = useHistory();
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
                    <Formik
                        initialValues={{
                            name: "",
                            regNo: "",
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
                                        name='name'
                                        type='input'
                                        placeholder='Name'
                                        style={{ marginTop: "20px" }}
                                    />
                                    <InputField
                                        name='regNo'
                                        type='input'
                                        placeholder='Registration Number'
                                        style={{ marginTop: "20px" }}
                                    />
                                    <InputField
                                        icon='user'
                                        placeholder='Email ID'
                                        name='email'
                                        type='email'
                                        style={{ marginTop: "20px" }}
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
                                    REGISTER
                                </Button>
                                <pre>{JSON.stringify(values, null, 2)}</pre>
                                <pre>
                                    Errors: {JSON.stringify(errors, null, 2)}
                                </pre>
                            </FormikForm>
                        )}
                    </Formik>
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
