import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteEmployeesResDto } from '../../dto/employee/delete-employees-res-dto';
import { Employees } from '../../dto/employee/employees';
import { GetAllEmployeesResDto } from '../../dto/employee/get-all-employees-res-dto';
import { SaveEmployeesResDto } from '../../dto/employee/save-employees-res-dto';
import { UpdateEmployeesResDto } from '../../dto/employee/update-employees-res-dto';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  getAll():Observable<Employees[]>{
    return this.http.get<Employees[]>('http://localhost:8888/employees/')
  }
  getAllByCompany():Observable<Employees[]>{
    return this.http.get<Employees[]>('http://localhost:8888/employees/companies')
  }
  getById(id: string): Observable<Employees>{
    return this.http.get<Employees>('http://localhost:8888/employees/id?id='+id)
  }
  getByCode(code: string): Observable<Employees>{
    return this.http.get<Employees>('http://localhost:8888/employees/code?code='+code)
  }
  getByUsersId():Observable<Employees>{
    return this.http.get<Employees>('http://localhost:8888/employees/users')
  }
  save(employee:Employees):Observable<SaveEmployeesResDto>{
    return this.http.post<SaveEmployeesResDto>('http://localhost:8888/employees',employee)
  }
  update(employee:Employees):Observable<UpdateEmployeesResDto>{
    return this.http.put<UpdateEmployeesResDto>('http://localhost:8888/employees',employee)
  }
  delete(id:string):Observable<DeleteEmployeesResDto>{
    return this.http.delete<DeleteEmployeesResDto>('http://localhost:8888/employees/id?id='+id)
  }
}
