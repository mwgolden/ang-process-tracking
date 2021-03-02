import { Component, OnInit, NgModule } from '@angular/core';
import { AppInfoApiService } from '../app-info-api.service';
import { Application } from '../application';
import { Observable, of } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import {  ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-applications-details',
  templateUrl: './applications-details.component.html',
  styleUrls: ['./applications-details.component.css']
})
export class ApplicationsDetailsComponent implements OnInit {

  application: Application
  id: number | null
  submitted = false

  frequencies: string[] = [
    'Adhoc', 'Annual', 'Any', 'Daily', 'Hourly', 'Monthly', 'Quarterly', 'Schedule', 'Semiannual', 'Weekly', 'Yearly'
  ]

  boundTypes: string[] = [
    'Any', 'Inbound', 'Outbound', 'Inout'
  ]
  constructor(private appInfoApiService: AppInfoApiService, private router: Router, private route: ActivatedRoute, private location: Location) {

  }

  ngOnInit(): void {
      this.id = +this.route.snapshot.paramMap.get('id')
      if(this.id){
        this.appInfoApiService.getApplicationById(this.id)
        .subscribe(app => {
            this.application = app
            this.application['frequency'] = this.application['frequency'].charAt(0).toUpperCase() + this.application['frequency'].slice(1).toLowerCase()
            this.application['boundType'] = this.application['boundType'].charAt(0).toUpperCase() + this.application['boundType'].slice(1).toLowerCase()
          })
      }else {
        this.application = new Application()
      }
  }

  onSubmit() {
    this.submitted = true
    if(this.application.applicationId){
      this.appInfoApiService.updateApplication(this.application)
      this.location.back()
    }else {
      this.appInfoApiService.createApplication(this.application)
    }
  }
  onCancel(){
    this.location.back()
  }
  get diagnostic() { return JSON.stringify(this.application); }
}
