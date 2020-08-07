import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthguardService  implements CanActivate{

  constructor(private auth: AuthServiceService, private router: Router) { }
  canActivate() {
    return this.auth.user$.map(user => { 
      if (user) {
        return true;
      } 
      this.router.navigate(['/login']);
      return false;
    });
    
  }
}
