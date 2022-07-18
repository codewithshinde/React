import React from "react";
import { useField } from "formik";
import {
  DatePicker,
  DayOfWeek,
  defaultDatePickerStrings,
} from '@fluentui/react';

interface InputDateProps {
  label: string;
  id?: string;
  name: string;
}

const InputDate: React.FC<InputDateProps> = ({ label, ...props }) => {
  const [field, meta, form] = useField(props);
  return (
    <DatePicker
      firstDayOfWeek={DayOfWeek.Sunday}
      showWeekNumbers={true}
      label={label}
      firstWeekOfYear={1}
      onSelectDate={(e) => {
        form.setValue(e);
      }}
      showMonthPickerAsOverlay={true}
      placeholder="Select a date..."
      ariaLabel="Select a date"
      value={field.value}
      // DatePicker uses English strings by default. For localized apps, you must override this prop.
      strings={defaultDatePickerStrings}
    />
  );
};

export default InputDate;
