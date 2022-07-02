import React, { FC } from "react";
import { Text } from "@react-pdf/renderer";
import compose from "../styles/compose";
import {
  DatePicker,
  IDatePicker,
  mergeStyleSets,
  defaultDatePickerStrings,
  DefaultButton,
} from "@fluentui/react";

interface Props {
  className?: string;
  value?: string;
  selected?: Date;
  onChange?: (date: Date | [Date, Date] | null) => void;
  pdfMode?: boolean;
}

const EditableCalendarInput: FC<Props> = ({
  className,
  value,
  selected,
  onChange,
  pdfMode,
}) => {
  const datePickerRef = React.useRef<IDatePicker>(null);
  const styles = mergeStyleSets({
    root: { selectors: { "> *": { marginBottom: 15 } } },
    control: { maxWidth: 300, marginBottom: 15 },
  });
  return (
    <>
      {pdfMode ? (
        <Text style={compose("span " + (className ? className : ""))}>
          {value}
        </Text>
      ) : (
        <DatePicker
          componentRef={datePickerRef}
          label="Start date"
          allowTextInput
          value={selected}
          ariaLabel="Select a date"
          onSelectDate={
            onChange
              ? (date: Date | null | undefined) => date && onChange(date)
              : (date: Date | null | undefined) => console.log(date)
          }
          className={styles.control}
          // DatePicker uses English strings by default. For localized apps, you must override this prop.
          strings={defaultDatePickerStrings}
        />

        // <DatePicker
        //   className={"input " + (className ? className : "")}
        //   selected={selected}
        //   onChange={
        //     onChange
        //       ? (date: Date) => onChange(date)
        //       : (date: Date) => console.log(date)
        //   }
        //   dateFormat="MMM dd, yyyy"
        // />
      )}
    </>
  );
};

export default EditableCalendarInput;
