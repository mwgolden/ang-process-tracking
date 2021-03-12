import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-bootstrap-table-filters',
  templateUrl: './bootstrap-table-filters.component.html',
  styleUrls: ['./bootstrap-table-filters.component.css']
})
export class BootstrapTableFiltersComponent implements OnInit {


  constructor(private fb: FormBuilder) {

  }

  @Output()
  applyFilters = new EventEmitter<any[]>()

  filters = new FormArray([])

  form = this.fb.group({
    filters: this.filters
  })
  ngOnInit(): void {
    //this.addFilter()
  }
  addFilter(){
    const predicate = new FormGroup({
      variable: new FormControl(' ', [Validators.required]),
      operator: new FormControl(' ', [Validators.required]),
      value: new FormControl(' ', [Validators.required])
    })
    this.filters.push(predicate)
  }
  deleteFilter($event){
    const filterIndex = $event.target.value
    this.filters.removeAt(filterIndex)
  }

  apply(){
    const filters = this.form.value.filters as Array<Object>
    this.applyFilters.emit(filters)
  }
}
