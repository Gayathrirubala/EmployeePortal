import { Employee } from "./employee.model";

export interface EmployeeResponse {

    users: Employee[];

    total: number;

    skip: number;

    limit: number;

}