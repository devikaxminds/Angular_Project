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
import { EmployeeDetailComponent } from './employee-list/employee-detail/employee-detail.component';
import { ChatComponent } from './chat/chat.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { HightlightDirective } from './hightlight.directive';
import { ColorChangeComponent } from './color-change/color-change.component';
import { BookComponent } from './book/book.component';
import { InStockDirective } from './in-stock.directive';
import { NameEmitterComponent } from './name-emitter/name-emitter.component';
import { ObservableComponent } from './observable/observable.component';

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
    EmployeeListComponent,
    EmployeeDetailComponent,
    ChatComponent,
    BookSearchComponent,
    HightlightDirective,
    ColorChangeComponent,
    BookComponent,
    InStockDirective,
    NameEmitterComponent,
    ObservableComponent
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
