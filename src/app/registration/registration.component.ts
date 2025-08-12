import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  name: string = '';
  email: string = '';

  logValues() {
    console.log('Name:', this.name);
    console.log('Email:', this.email);

}
}