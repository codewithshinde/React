import { IChoiceGroupOption, IDropdownOption } from "@fluentui/react";

export enum FormTypes {
  TEXT,
  RADIO,
  DROPDOWN,
  DATE,
}

interface BasicFieldDetails<T, U> {
  type: T;
  ["data-test"]?: string;
  field: U;
  label: string
}

export interface TextField<U> extends BasicFieldDetails<FormTypes.TEXT, U> { }

export interface RadioField<U> extends BasicFieldDetails<FormTypes.RADIO, U> {
  id: string;
  options: IChoiceGroupOption[]
}

export interface DropdownField<U>
  extends BasicFieldDetails<FormTypes.DROPDOWN, U> {
  id: string;
  options: IDropdownOption<any>[]
}

export interface DateField<U> extends BasicFieldDetails<FormTypes.DATE, U> {
  id: string;
}

export type Field<U> = TextField<U> | RadioField<U> | DropdownField<U> | DateField<U>;

export interface FormBuilderProps<U> {
  fieldList: Field<U>[];
  name: string;
  ["data-test"]?: string;
}
