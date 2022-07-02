import * as React from 'react';
import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react/lib/ChoiceGroup';
import { useField } from 'formik';

interface RadioBoxProps {
    label: string;
    name: string;
    id: string;
    options: IChoiceGroupOption[];
    defaultSelectedKey: string;
};

const RadioInput: React.FC<RadioBoxProps> = ({ label, ...props }) => {
    const [field, meta, form] = useField(props);
    return <ChoiceGroup
        {...meta}
        {...field}
        defaultSelectedKey={props.defaultSelectedKey}
        onChange={(e, d) => form.setValue(d)}
        options={props.options}
        label={label}
    />;
};

export default RadioInput;