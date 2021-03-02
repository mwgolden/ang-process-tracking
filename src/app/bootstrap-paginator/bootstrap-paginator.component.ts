import { Component, OnInit, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { PaginatorInterface } from './paginator-interface'
@Component({
  selector: 'app-bootstrap-paginator',
  templateUrl: './bootstrap-paginator.component.html',
  styleUrls: ['./bootstrap-paginator.component.css']
})
export class BootstrapPaginatorComponent implements OnInit {

  @Input()
  pagination: PaginatorInterface

  @Output()
  updatePageIndex = new EventEmitter<number>()

  @Output()
  updatePageSize = new EventEmitter<number>()

  pages: number[]
  
  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes:SimpleChanges): void {
    if(this.pagination){
      this.pages = [...Array(this.pagination.pageCount).keys()]
    }
  }
  getPreviousPage(){
    if(this.pagination.hasPreviousPage){
      this.updatePageIndex.emit(this.pagination.pageIndex - 1)
    }
  }
  getNextPage(){
    if(this.pagination.hasNextPage){
      this.updatePageIndex.emit(this.pagination.pageIndex + 1)
    }
  }
  getPageByIndex(page:number){
    this.updatePageIndex.emit(page)
  }
  setPageSize($event) {
    this.updatePageSize.emit($event.target.value)
  }
}
