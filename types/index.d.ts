interface FormProps<T = any> {
  onChange: (param?: T) => void;
  value: T;
  label: string | React.ReactElement;
  defaultValues: AnyObject;
}

interface BaseProps<T = any> {
  children: React.ReactElement<T> | string;
  className?: string;
}

interface Option {
  label: string;
  value: React.Key;
}

interface PageList<T> {
  rows: T[];
}

interface Pagination {
  pageNum: number;
  pageSize: number;
}
