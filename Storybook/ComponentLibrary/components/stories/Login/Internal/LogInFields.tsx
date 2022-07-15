import React from "react";
import { PrimaryButton } from "@fluentui/react";
import { Form, Formik } from "formik";
import { TextInput, RadioInput } from "../../FormsLib/FormFields";
import { FormConatiner } from "./styled";
import { Text, ITextProps } from "@fluentui/react/lib/Text";
import LogInMessage from "./LogInMessage";

interface MyFormValues {
  email: string;
  password: string;
}

const LogInFields: React.FC<{}> = () => {
  const initialValues: MyFormValues = { email: "", password: "" };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <FormConatiner>
          <LogInMessage />
          <Text variant={"xxLarge" as ITextProps["variant"]}>Login</Text>
          <TextInput
            name="email"
            id="email"
            label="Username/Email"
          />
          <TextInput
            name="password"
            id="password"
            type="password"
            label="Password"
          />
          <PrimaryButton
            className="loginBtn"
            text="Login"
            type="submit"
            disabled={false}
            checked={false}
          />
        </FormConatiner>
      </Form>
    </Formik>
  );
};

export default LogInFields;
