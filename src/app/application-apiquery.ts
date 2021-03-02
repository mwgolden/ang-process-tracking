import { Application } from './application'
export class ApplicationAPIQuery {
  data: Application[]
  totalCount: number
  pageIndex: number
  pageSize: number
  totalPages: number
  hasPreviousPage: boolean
  hasNextPage: boolean
}
