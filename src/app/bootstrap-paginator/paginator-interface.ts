export interface PaginatorInterface {
  pageCount: number,
  pageIndex: number,
  pageSize: number,
  hasNextPage: boolean,
  hasPreviousPage: boolean,
  pageSizes?: number[]
}
