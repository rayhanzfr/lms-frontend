import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-modify',
  templateUrl: './employees-modify.component.html',
  styleUrls: ['./employees-modify.component.css']
})
export class EmployeesModifyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  back():void{
    this.router.navigateByUrl('admin/user')
  }
}
