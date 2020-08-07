import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'navg-bar',
  templateUrl: './nav-bar-compone.component.html',
  styleUrls: ['./nav-bar-compone.component.css']
})
export class NavBarComponeComponent implements OnInit {
  public user;
  constructor(public auth: AuthServiceService) { 
    auth.user$.subscribe(x => { this.user = x;});
  }
  ngOnInit(): void {
  }

  logout() {
    this.auth.logout();
  }

}
