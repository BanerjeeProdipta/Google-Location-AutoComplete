export enum FieldTypes {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  SELECT = 'select',
  MULTISELECT = 'multiselect',
  CHECKBOX = 'checkbox',
  SWITCH = 'switch',
  RADIO = 'radio',
  FILE = 'file',
  ARRAY = 'array',
  SECTION = 'section',
  CUSTOM = 'custom',
  ROW = 'row',
  COLUMN = 'column',
}

type RuleType<T> = {
  value: T;
  message: string;
};

type VisibilityDependenciesWithValue = {
  name: string;
  value: string | ((value: unknown) => boolean);
};

type CommonType = {
  name: string;
  label: string;
  defaultValue?: string;
  placeholder?: string;
  optionalText?: string;
  bottomText?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  visibilityDependencies?: VisibilityDependenciesWithValue[];
  rules?: {
    deps?: string[];
    required?: RuleType<boolean>;
    minLength?: RuleType<number>;
    maxLength?: RuleType<number>;
    min?: RuleType<number>;
    max?: RuleType<number>;
    pattern?: RuleType<RegExp>;
    validate?: (value: any) => string | string[] | boolean;
  };
};

export type InputFieldType = {
  type: FieldTypes.INPUT;
  inputType?:
    | 'text'
    | 'number'
    | 'email'
    | 'password'
    | 'date'
    | 'time'
    | 'datetime-local'
    | 'month'
    | 'week'
    | 'tel'
    | 'url'
    | 'color';
  leftAddon?: string | React.ReactNode;
  rightAddon?: string | React.ReactNode;
  max?: string | number;
  min?: string | number;
  optionalText?: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  customProperties?: { [key: string]: string };
} & CommonType;

export type TextareaFieldType = {
  type: FieldTypes.TEXTAREA;
  resize?: 'vertical' | 'horizontal' | 'both' | 'none';
} & CommonType;

export type SelectFieldType = {
  type: FieldTypes.SELECT;
  options: {
    value: string;
    label: string;
    profession_code?: string;
  }[];
} & CommonType;

export type MultiSelectFieldType = {
  type: FieldTypes.MULTISELECT;
  optionalText?: string;
  options: {
    value: string;
    label: string;
  }[];
} & CommonType;

export type CheckboxFieldType = {
  type: FieldTypes.CHECKBOX;
  direction?: 'column' | 'row';
  spacing?: string;
  options: {
    value: string;
    label: string;
    required?: boolean;
  }[];
} & CommonType;

export type SwitchFieldType = {
  type: FieldTypes.SWITCH;
} & CommonType;

export type RadioFieldType = {
  type: FieldTypes.RADIO;
  direction?: 'column' | 'row';
  options: {
    value: string;
    label: string;
    required?: boolean;
  }[];
} & CommonType;

export type FileFieldType = {
  type: FieldTypes.FILE;
  accept?: string;
  bottomText?: string;
  multiple?: boolean;
} & CommonType;

type PropTypes = {
  data: CustomFieldType;
  register: any;
  errors: any;
  setValue: any;
  setError: any;
  clearErrors: any;
  watch: any;
  control: any;
};

export type CustomFieldType = {
  type: FieldTypes.CUSTOM;
  component: (props: PropTypes) => JSX.Element;
} & CommonType;

export type ArrayFieldType = {
  type: FieldTypes.ARRAY;
  fields: FormFieldType[];
  addButtonText: string;
} & CommonType;

export type FormFieldType =
  | InputFieldType
  | TextareaFieldType
  | SelectFieldType
  | MultiSelectFieldType
  | CheckboxFieldType
  | RadioFieldType
  | FileFieldType
  | SwitchFieldType
  | CustomFieldType
  | ArrayFieldType;

export type FormRowType = {
  type: FieldTypes.ROW;
  name: string; // this is just for the keys for mapping
  label?: string;
  bottomText?: string;
  fields: (FormFieldType | FormColumnType | FormRowType)[];
};

export type FormColumnType = {
  type: FieldTypes.COLUMN;
  name: string; // this is just for the keys for mapping
  label?: string;
  bottomText?: string;
  fields: (FormFieldType | FormColumnType | FormRowType)[];
};

export type FormDataType = FormFieldType | FormRowType | FormColumnType;
