import React from "react";
import { string } from "yup";
import TextInput from "./TextInput";

enum FormTypes {
  TEXT,
  RADIO,
  DROPDOWN,
  DATE,
}

const getFieldByType = (type: FormTypes): JSX.Element => {
  switch (type) {
    case FormTypes.TEXT:
      return <h1>test1</h1>;
    default:
      return <h1>test2</h1>;
  }
};

const FormBuilder: React.FC<{}> = () => {
  return <h1>2</h1>;
};

export default FormBuilder;
