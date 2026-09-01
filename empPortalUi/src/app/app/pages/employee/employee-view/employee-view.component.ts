import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { EmployeeViewResponse } from '../models/employee-view-response.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-employee-view',
  standalone: true,
  imports: [CommonModule],
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './employee-view.component.html',
  styleUrl: './employee-view.component.scss'
})
export class EmployeeViewComponent implements OnInit {

  private readonly _employee = signal<EmployeeViewResponse|null>(null);
    readonly employee=this._employee.asReadonly();

  constructor(private route:ActivatedRoute,private _employeeService: EmployeeService){

  }


  ngOnInit(): void {
    
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this._employeeService.getEmployeeById(id).subscribe((response:EmployeeViewResponse)=>{
      if(response){
      this.setEmployeeById(response);
      }
    });


  }

  setEmployeeById(data:EmployeeViewResponse):void{
    this._employee.set(data);
  }
}
