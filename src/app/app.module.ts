import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ButtonComponent } from './component/button/button.component';
import { CounterComponent } from './counter/counter.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeViewComponent } from './employee/employee-view/employee-view.component';
import { LibraryComponent } from './library/library.component';
import { BookSelectorComponent } from './library/book-selector/book-selector.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonComponent,
    CounterComponent,
    ToggleButtonComponent,
    RegistrationComponent,
    EmployeeComponent,
    EmployeeViewComponent,
    LibraryComponent,
    BookSelectorComponent,
    EmployeeSearchComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
