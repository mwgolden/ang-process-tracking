import { Component, OnInit, SimpleChanges } from '@angular/core';
import { TableData } from '../bootstrap-table/table-data';
import { HeaderData } from '../bootstrap-table/header-data';
import { Application } from '../application';
import { ApplicationAPIQuery } from '../application-apiquery';
import { AppInfoApiService } from '../app-info-api.service';
import { PaginatorInterface } from '../bootstrap-paginator/paginator-interface';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  applications$: Observable<TableData<Application>>
  headers: HeaderData[]
  pageSize: number
  pageIndex: number
  pagination: PaginatorInterface
  filters: any[]

  constructor(private appInfoApiService: AppInfoApiService, private router: Router, private route: ActivatedRoute) {
    this.pageSize = 50
    this.pageIndex = 0

    this.headers = [
      { column: 'applicationCode', value: 'Application Code' },
      { column: 'applicationName', value: 'Application Name', isLink: true },
      { column: 'applicationDesc', value: 'Description' },
      { column: 'frequency', value: 'Frequency' },
      { column: 'boundType', value: 'Bound Type' },
      { column: 'remarks', value: 'Remarks' }
    ]

    this.getApplicationInfo()
  }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void{
    this.getApplicationInfo()
  }
  getApplicationInfo() {
    this.applications$ = this.appInfoApiService
        .getApplications(this.pageIndex, this.pageSize)
        .pipe(
          map(apps => {
            this.pagination = {
              pageCount: apps.totalPages,
              pageIndex: apps.pageIndex,
              pageSize: apps.pageSize,
              hasNextPage: apps.hasNextPage,
              hasPreviousPage: apps.hasPreviousPage,
              pageSizes: [10, 25, 50, 100]
            }
            return { data: apps.data, headers: this.headers }
          })
        )
  }
  updatePage($event: number){
    this.pageIndex = $event
    this.getApplicationInfo()
  }
  updateSize($event: number) {
    this.pageSize = $event
    this.getApplicationInfo()
  }
  onselectedItem($event){
    this.router.navigate([`/application/${$event.applicationId}`])
  }
  onFilterChanged($event: Array<any>){
    console.warn('in filter changed')
    console.warn( $event)

  }
  onNewItem(): void {
      this.router.navigate([`/application`])
  }
}
