export interface EmployeeViewResponse{
    id:number,
    firstName:string,
    lastName:string,
    email:string,
    phone:string,
    username:string,
    company:{
        department:string,
        title:string
    }
    role:string
}