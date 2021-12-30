import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Roles } from 'projects/core/src/app/dto/roles/roles';
import { SaveUsersResDto } from 'projects/core/src/app/dto/users/save-users-res-dto';
import { Users } from 'projects/core/src/app/dto/users/users';
import { UsersService } from 'projects/core/src/app/services/users/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register-modify',
  templateUrl: './register-modify.component.html',
  styleUrls: ['./register-modify.component.css']
})
export class RegisterModifyComponent implements OnInit, OnDestroy {

  usersReq:Users = new Users();
  saveUsersRes:SaveUsersResDto = new SaveUsersResDto();
  usersSub?:Subscription;

  constructor(private router: Router, private usersService: UsersService) { }
  ngOnDestroy(): void {
    this.usersSub?.unsubscribe()
  }

  ngOnInit(): void {

  }

  register(){
    this.usersReq.roles = new Roles();
    this.usersReq.roles.rolesCode = "ROLES3"
    this.usersSub = this.usersService.save(this.usersReq)?.subscribe(result=>{
      this.saveUsersRes=result
      this.router.navigateByUrl("register/sent")
    })
  }

}
