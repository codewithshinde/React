import React from "react";
import { IChoiceGroupOption, PrimaryButton } from "@fluentui/react";
import { Form, Formik } from "formik";
import TextInput from "../../FormFields/TextInput";
import { FormConatiner } from "./styled";
import { Text, ITextProps } from "@fluentui/react/lib/Text";
import LogInMessage from "./LogInMessage";
import RadioInput from "../../FormFields/RadioInput";

interface MyFormValues {
  email: string;
  password: string;
}

const LogInFields: React.FC<{}> = () => {
  const initialValues: MyFormValues = { email: '', password: "" };
  const onLoginFormSubmit = (value: any) => {
    console.log(JSON.stringify(value));
  }

  // const op: IChoiceGroupOption[] = [
  //   { key: 'A', text: 'Option A' },
  //   { key: 'B', text: 'Option B' },
  //   { key: 'C', text: 'Option C', disabled: true },
  //   { key: 'D', text: 'Option D' },
  // ];

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
        <FormConatiner>
          <LogInMessage />
          <Text variant={"xxLarge" as ITextProps["variant"]}>
            Login
          </Text>
          <TextInput name="email" id="email" label="Username/Email" />
          <TextInput name="password" id="password" type="password" label="Password" />
          {/* <RadioInput options={op} defaultSelectedKey="A" name="Question" label="Pick one" id="quiz-label" /> */}
          <PrimaryButton className="loginBtn" text="Login" type="submit" disabled={false} checked={false} />
        </FormConatiner>
      </Form>
    </Formik>
  );
};

export default LogInFields;
