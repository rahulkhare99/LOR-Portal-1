import React from "react";
import { Field, FieldAttributes, useField } from "formik";
import { Form, Message } from "semantic-ui-react";

type InputFieldProps = {
    placeholder: string;
    type: string;
    icon?: string;
} & FieldAttributes<{}>;

export const InputField: React.FC<InputFieldProps> = ({
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
                    type={type}
                    style={style}
                    icon={icon}
                    {...field}
                    iconPosition='left'
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
                type={type}
                icon={icon}
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
