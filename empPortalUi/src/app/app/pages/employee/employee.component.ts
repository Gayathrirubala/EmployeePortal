import { Component,inject, OnInit,computed, ChangeDetectionStrategy, signal } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    CommonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
  
})
export class EmployeeComponent implements OnInit{

  /** why use signals
   * When we add Search, Pagination, and CRUD, the UI updates
   *  automatically without manual subscriptions.
   */
  
  readonly employeeService = inject(EmployeeService);
  readonly employees = this.employeeService.employees;
  private router = inject(Router);


  
  displayedColumns = [
  'image',
  'name',
  'email',
  'department',
  'designation',
  'actions'
];


ngOnInit(): void {
    
    this.employeeService.getEmployees().subscribe({
      next:(response)=>{
        this.employeeService.setEmployees(response);
      },error(err){
        console.error(err);
      }
    });
  }

readonly pageIndex = signal(0);
readonly pageSize = signal(10);
employeeList = computed(()=>this.employeeService.employees()?.users ??[]);

readonly searchText = signal('');

readonly filteredEmployee = computed(()=>{
  const search = this.searchText().toLowerCase().trim();
   if(!search){
    return this.employeeList();
   }

   return this.employeeList().filter(emp=>
    emp.firstName.toLowerCase().includes(search) ||
    emp.lastName.toLowerCase().includes(search) || 
    emp.email.toLowerCase().includes(search)||
    emp.company.department.toLowerCase().includes(search) || 
    emp.company.title.toLowerCase().includes(search)

   );
});


onPageChange(event: PageEvent) {

  this.pageIndex.set(event.pageIndex);

  this.pageSize.set(event.pageSize);

}

readonly paginatedEmployees = computed(() => {

  const start = this.pageIndex() * this.pageSize();

  return this.filteredEmployee().slice(start, start + this.pageSize());

});


onSearch(searchValue:string):void{

  this.searchText.set(searchValue);
  this.pageIndex.set(0);
}

viewEmployee(empId:string):void{
  
  this.router.navigateByUrl('/employees/view/'+empId);
}


  
}
