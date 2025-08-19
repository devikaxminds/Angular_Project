import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrl: './employee-view.component.css'
})
export class EmployeeViewComponent {
   @Input() employees: { id: number; name: string; department: string }[] = [];

}
