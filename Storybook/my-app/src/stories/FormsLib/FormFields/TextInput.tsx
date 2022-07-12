import React from "react";
import { useField } from "formik";
import { ITextFieldProps, TextField } from "@fluentui/react";

interface TextInputProps extends ITextFieldProps {
    label: string;
    name: string;
    id?: string;
    inputType?: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, name, inputType = "text", ...props }) => {
    const [field, meta] = useField(name);

    return <TextField label={label} {...field} {...meta} type={inputType} />;
};

export default TextInput;
