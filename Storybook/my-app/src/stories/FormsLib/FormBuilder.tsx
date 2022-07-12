import React from "react";
import { PersonalDetailsFields } from "./Forms/PersonalInfo/constants";
import { FormBuilderProps, FormTypes, Field } from "./FormFields/types";
import { InputDate, SelectBox, RadioInput, TextInput } from "./FormFields";

const getFieldByType = <U extends | PersonalDetailsFields>(name: string, field: Field<U>, key: number): JSX.Element => {
  switch (field.type) {
    case FormTypes.RADIO:
      return <RadioInput
        key={key}
        id={field.id}
        label={field.label}
        name={`${name}.${field.field}`}
        options={field.options}
      />;
    case FormTypes.DROPDOWN:
      return <SelectBox
        key={key}
        id={field.id}
        label={field.label}
        name={`${name}.${field.field}`}
        options={field.options}
      />;
    case FormTypes.DATE:
      return <InputDate
        key={key}
        id={field.id}
        label={field.label}
        name={`${name}.${field.field}`}
      />;
    case FormTypes.TEXT:
    default:
      return <TextInput
        key={key}
        label={field.label}
        inputType={field.inputType}
        name={`${name}.${field.field}`}
      />;
  }
};

const FormBuilder = <U extends | PersonalDetailsFields>({ name, fieldList, 'data-test': dataTestId }: FormBuilderProps<U>): React.ReactElement => {
  return (
    <div data-test={dataTestId}>
      {fieldList.map((field, index) => {
        return getFieldByType(name, field, index);
      })}
    </div>
  );
};

export default FormBuilder;
