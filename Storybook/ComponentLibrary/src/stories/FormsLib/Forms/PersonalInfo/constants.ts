import { IChoiceGroupOption } from "@fluentui/react";
import { Field, FormTypes } from "../../FormFields/types";

export enum PersonalDetailsFields {
    FIRST_NAME = "firstname",
    MIDDLE_NAME = "middlename",
    LAST_NAME = "lastname",
    GENDER = "gender",
    EMAIL = "email",
    PASSWORD = "password",
    CONTACT_NO = "contactno",
    EMP_CODE = "employeecode",
    DATE_OF_JOINING = "doj",
    TERMINATION_DATE = "terminationdate"
}

const genderOptions: IChoiceGroupOption[] = [
    { key: "male", text: "Male" },
    { key: "female", text: "Female" },
    { key: "other", text: "Other" },
]

export const PERSONAL_DETAILS_LIST: (Field<PersonalDetailsFields>[]) = [
    {
        field: PersonalDetailsFields.EMAIL,
        type: FormTypes.TEXT,
        label: "Email"
    },
    {
        field: PersonalDetailsFields.PASSWORD,
        type: FormTypes.TEXT,
        inputType: "password",
        label: "Password"
    },
    {
        field: PersonalDetailsFields.EMP_CODE,
        type: FormTypes.TEXT,
        label: "Employee code"
    },
    {
        field: PersonalDetailsFields.FIRST_NAME,
        type: FormTypes.TEXT,
        label: "First Name"
    },
    {
        field: PersonalDetailsFields.MIDDLE_NAME,
        type: FormTypes.TEXT,
        label: "Middle Name"
    },
    {
        field: PersonalDetailsFields.LAST_NAME,
        type: FormTypes.TEXT,
        label: "Last Name"
    },
    {
        id: "personal-details-gender-id",
        field: PersonalDetailsFields.GENDER,
        type: FormTypes.RADIO,
        label: "Gender",
        options: genderOptions
    },
    {
        field: PersonalDetailsFields.CONTACT_NO,
        type: FormTypes.TEXT,
        label: "Contact number"
    },
    {
        id: "date-of-joining-id",
        field: PersonalDetailsFields.DATE_OF_JOINING,
        type: FormTypes.DATE,
        label: "Date of joining"
    },
    {
        id: "termination-date-id",
        field: PersonalDetailsFields.TERMINATION_DATE,
        type: FormTypes.DATE,
        label: "Termination date"
    }

]