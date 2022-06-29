import React from "react";
import { PrimaryButton } from "@fluentui/react";
import { Form, Formik } from "formik";
import TextInput from "../../FormFields/TextInput";

interface MyFormValues {
  email: string;
  password: string;
}

const LoginFields: React.FC<{}> = () => {
  const initialValues: MyFormValues = { email: '', password: "" };
  const onLoginFormSubmit = (value: any) => {
    console.log(JSON.stringify(value));
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      <Form>
        <TextInput name="email" id="email" label="Username/Email" />
        <TextInput name="password" id="password" type="password" label="Password" />
        <PrimaryButton text="Login" type="submit" disabled={false} checked={false} />
      </Form>
    </Formik>
  );
};

export default LoginFields;
