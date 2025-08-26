import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employees: Employee[] = [
    { id: 1, name: 'Alice', position: 'Developer', department: 'IT', email: 'alice@company.com' },
    { id: 2, name: 'Bob', position: 'Designer', department: 'UI/UX', email: 'bob@company.com' },
    { id: 3, name: 'Charlie', position: 'Manager', department: 'HR', email: 'charlie@company.com' },
    { id: 4, name: 'David', position: 'Analyst', department: 'Finance', email: 'david@company.com' },
    { id: 5, name: 'Eva', position: 'Tester', department: 'QA', email: 'eva@company.com' }
  ];
  
  searchTerm: string = '';
  selectedEmployee: Employee | null = null;

  @ViewChildren('empItem') empItems!: QueryList<ElementRef>;

  onSelect(employee: Employee) {
    this.selectedEmployee = employee;
  }

  search() {
    this.empItems.forEach((item) => {
      const name = item.nativeElement.innerText.toLowerCase();
      if (name.includes(this.searchTerm.toLowerCase()) && this.searchTerm !== '') {
        item.nativeElement.style.backgroundColor = 'yellow';
      } else {
        item.nativeElement.style.backgroundColor = 'transparent';
      }
    });
  }
}
