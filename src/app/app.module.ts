import { PersonService } from './services/person/person.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonsListComponent } from './pages/persons-list/persons-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarTopComponent } from './components/navbar-top/navbar-top.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SavePersonButtonComponent } from './components/save-person-button/save-person-button.component';
@NgModule({
  declarations: [
    AppComponent,
    PersonsListComponent,
    DashboardComponent,
    NavbarTopComponent,
    SavePersonButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
