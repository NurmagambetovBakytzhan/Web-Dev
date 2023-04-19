import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { VacanciesComponent } from './components/vacancies/vacancies.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    VacanciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'companies', component: CompaniesComponent },
      { path: 'companies/:companyId', component: VacanciesComponent },
      { path: '', redirectTo: 'companies', pathMatch: "full" },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
