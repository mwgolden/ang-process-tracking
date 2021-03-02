import { HeaderData } from './header-data';

export interface TableData<T> {
  data: T[],
  headers: HeaderData[]
}
