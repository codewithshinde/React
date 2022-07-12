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
}

export interface TextField<U> extends BasicFieldDetails<FormTypes.TEXT, U> {}

export interface RadioField<U> extends BasicFieldDetails<FormTypes.TEXT, U> {}

export interface DropdownField<U>
  extends BasicFieldDetails<FormTypes.TEXT, U> {}

export interface DateField<U> extends BasicFieldDetails<FormTypes.TEXT, U> {}

type Field<U> = TextField<U> | RadioField<U> | DropdownField<U> | DateField<U>;

export interface FormBuilderProps<U> {
  fieldList: Field<U>[];
}
