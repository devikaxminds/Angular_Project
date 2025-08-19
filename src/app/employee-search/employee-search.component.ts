import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrl: './employee-search.component.css'
})
export class EmployeeSearchComponent {
  @ViewChild('searchInput') searchInput!: ElementRef;

  employees = [
    { id: 1, name: 'Alice', position: 'Developer' },
    { id: 2, name: 'Bob', position: 'Designer' },
    { id: 3, name: 'Charlie', position: 'Manager' }
  ];

  foundEmployee: any = null;
  notFound: boolean = false;

  searchEmployee() {
    const query = this.searchInput.nativeElement.value.trim().toLowerCase();
    const emp = this.employees.find(e => e.name.toLowerCase() === query);

    if (emp) {
      this.foundEmployee = emp;
      this.notFound = false;
    } else {
      this.foundEmployee = null;
      this.notFound = true;
    }
  }

}
