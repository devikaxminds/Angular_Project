import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employees: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Alice', 'Eva'];
  searchTerm: string = '';

  @ViewChildren('empItem') empItems!: QueryList<ElementRef>;

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
