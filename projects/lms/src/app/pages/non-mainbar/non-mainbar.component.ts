import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainbar',
  templateUrl: './non-mainbar.component.html',
  styleUrls: ['./non-mainbar.component.css']
})
export class NonMainbarComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleClick(): void {
    const body = document.getElementsByTagName('body')[0]
    if (body.className.match('sidebar-icon-only')) {
      body.classList.remove('sidebar-icon-only')
    }
    else {
      body.classList.add('sidebar-icon-only')
    }
  }

  showSidebar(): void {
    const canvas = document.getElementById('sidebar')
    if (canvas?.className.match('active')) {
      canvas.classList.remove('active')
    }
    else {
      canvas?.classList.add('active')
    }
  }

  inHover(data: any): void {
    const body = document.getElementsByTagName('body')[0]
    if (body.className.match("sidebar-icon-only")) {
      data.classList.add('hover-open')
    }
  }

  outHover(data: any): void {
    const body = document.getElementsByTagName('body')[0]
    if (body.className.match("sidebar-icon-only")) {
      data.classList.remove('hover-open')
    }
  }

}
