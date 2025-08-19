import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employees = [
    { id: 1, name: 'Devika', department: 'IT' },
    { id: 2, name: 'Jaya', department: 'HR' },
    { id: 3, name: 'Sam', department: 'Finance' }
  ];

}
