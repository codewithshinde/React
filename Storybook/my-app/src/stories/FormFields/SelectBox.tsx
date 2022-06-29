import React from "react";
import { useField } from "formik";
import { Dropdown, IDropdownOption } from "@fluentui/react";


interface SelectBoxProps {
    label: string;
    name: string;
    id: string;
    options: IDropdownOption<any>[]
}

const SelectBox: React.FC<SelectBoxProps> = ({ label, ...props }) => {
    const [field, meta, form] = useField(props);

    return (
        <Dropdown
            {...meta}
            {...field}
            defaultSelectedKey={field.value.key}
            onChange={(e, d) => form.setValue(d)}
            options={props.options}
            label={label}
        />
    );
};

export default SelectBox;
