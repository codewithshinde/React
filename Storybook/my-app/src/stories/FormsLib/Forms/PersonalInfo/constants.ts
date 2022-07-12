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
    EMP_CODE = "employeecode"
}

const genderOptions: IChoiceGroupOption[] = [
    { key: "male", text: "Male" },
    { key: "female", text: "Female" },
    { key: "other", text: "Other" },
]

export const PERSONAL_DETAILS_LIST: (Field<PersonalDetailsFields>[]) = [
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
    }

]