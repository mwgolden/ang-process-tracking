import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ApplicationsComponent } from './applications/applications.component';
import { BootstrapTableComponent } from './bootstrap-table/bootstrap-table.component';
import { BootstrapPaginatorComponent } from './bootstrap-paginator/bootstrap-paginator.component';
import { ApplicationsDetailsComponent } from './applications-details/applications-details.component';
import { BootstrapTableFiltersComponent } from './bootstrap-table-filters/bootstrap-table-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationsComponent,
    BootstrapTableComponent,
    BootstrapPaginatorComponent,
    ApplicationsDetailsComponent,
    BootstrapTableFiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
