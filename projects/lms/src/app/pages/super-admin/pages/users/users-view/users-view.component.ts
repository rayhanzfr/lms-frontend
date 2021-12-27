import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Users } from 'projects/core/src/app/dto/users/users';
import { UsersService } from 'projects/core/src/app/services/users/users.service';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})
export class UsersViewComponent implements OnInit {

  loading: boolean = true;
  data:Users[]=[]
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getAll().subscribe(result=>this.data = result);
  }

  clear(table: Table) {
    table.clear();
}
}
