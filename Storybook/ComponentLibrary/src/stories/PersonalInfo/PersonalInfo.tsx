import React from "react";
import {
  IStyleSet,
  Label,
  ILabelStyles,
  Pivot,
  PivotItem,
} from "@fluentui/react";
import { PersonalDetailsForm } from "../FormsLib/Forms";

const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
  root: { marginTop: 10 },
};

const PersonalInfo: React.FC<{}> = () => {
  return (
    <Pivot aria-label="Basic Pivot Example">
      <PivotItem headerText="Personal Info">
        <PersonalDetailsForm />
      </PivotItem>
      <PivotItem headerText="Recent">
        <Label styles={labelStyles}>Pivot #2</Label>
      </PivotItem>
      <PivotItem headerText="Shared with me">
        <Label styles={labelStyles}>Pivot #3</Label>
      </PivotItem>
    </Pivot>
  );
};

export default PersonalInfo;
