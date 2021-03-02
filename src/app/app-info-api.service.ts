import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApplicationAPIQuery } from './application-apiquery';
import { Application } from './application';
@Injectable({
  providedIn: 'root'
})
export class AppInfoApiService {

  baseUrl: string = 'https://localhost:44375/api/'
  appInfoUrl: string = this.baseUrl + 'ApplicationInfo'

  constructor(private httpClient:HttpClient) { }

  public getApplications(pageIndex: number = 0, pageSize: number = 50 ){
    let httpParams = new HttpParams()
      .set('pageSize', String(pageSize))
      .set('pageIndex', String(pageIndex))

    const requestUrl = `${this.appInfoUrl}?${httpParams.toString()}`
    return this.httpClient.get<ApplicationAPIQuery>(requestUrl)
  }
  public getApplicationById(id: number){
    const requestUrl = `${this.appInfoUrl}/${id}`
    return this.httpClient.get<Application>(requestUrl)
  }
  public createApplication(application: Application){
      const requestUrl = `${this.appInfoUrl}`
      this.httpClient.post<Application>(requestUrl, application).subscribe()
  }
  public updateApplication(application: Application){
    const requestUrl = `${this.appInfoUrl}/${application.applicationId}`
    this.httpClient.put<Application>(requestUrl, application).subscribe(app => app)
  }
  public deleteApplication(id: number){}
}
