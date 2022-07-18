import { PrimaryButton } from '@fluentui/react';
import { Formik, Form } from 'formik';
import React from 'react';
import FormBuilder from '../../FormBuilder';
import { PersonalDetailsData } from '../types';
import { PERSONAL_DETAILS_LIST } from './constants';

export interface PersonalFormProps {
    data?: PersonalDetailsData;
}

const PersonalDetails: React.FC<PersonalFormProps> = ({ data }) => {
    return (
        <Formik initialValues={data || ({} as PersonalDetailsData)}
            onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2));
            }}
        >
            <Form>
                <FormBuilder
                    name="personal"
                    fieldList={PERSONAL_DETAILS_LIST}
                    data-test="personal-details-test-id"
                />
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
}

export default PersonalDetails;