import React from "react";
import { PrimaryButton } from "@fluentui/react";
import { Form, Formik } from "formik";
import { RadioInput } from "../FormsLib/FormFields";
import { QuizProps } from "./types";

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const initialValues = {};

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
        {questions.map((ques) => (
          <RadioInput
            options={ques.options}
            name={ques.questionId}
            label={ques.title}
            id={ques.questionId}
          />
        ))}
        <PrimaryButton
          className="loginBtn"
          text="Login"
          type="submit"
          disabled={false}
          checked={false}
        />
      </Form>
    </Formik>
  );
};

export default Quiz;
