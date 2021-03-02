import { Component, OnInit, Input, Output, OnChanges,SimpleChanges, EventEmitter } from '@angular/core';
import { TableData }  from './table-data';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-bootstrap-table',
  templateUrl: './bootstrap-table.component.html',
  styleUrls: ['./bootstrap-table.component.css']
})
export class BootstrapTableComponent implements OnInit {

  @Input()
  inputData: TableData<any>

  @Output()
  selection = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {

  }
  ngOnChanges(changes:SimpleChanges): void {
    
  }

  EmitSelectedItem($event) {
    this.selection.emit($event)
  }
}
