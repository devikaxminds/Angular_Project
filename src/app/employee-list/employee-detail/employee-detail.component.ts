import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
}

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnChanges {
  @Input() employee: Employee | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['employee']) {
      console.log('Currently selected employee data:', this.employee);
    }
  }
}
