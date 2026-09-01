import { Injectable,inject, signal} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeResponse } from '../models/employee-response.model';
import { EmployeeViewResponse } from '../models/employee-view-response.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private http = inject(HttpClient);

  private readonly _employees = signal<EmployeeResponse|null>(null);
  readonly employees = this._employees.asReadonly();

  

  getEmployees():Observable<EmployeeResponse>{
     return this.http.get<EmployeeResponse>(
      'https://dummyjson.com/users'
    );
  }

  setEmployees(data:EmployeeResponse):void{
    this._employees.set(data);
  }

  getEmployeeById(Id:number):Observable<EmployeeViewResponse>{
    const url=`https://dummyjson.com/users/${Id}`;
    return this.http.get<EmployeeViewResponse>(
      url
    );
  }


}
