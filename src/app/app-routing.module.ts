import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AccountComponentComponent } from './account-component/account-component.component';
import { BillingComponentComponent } from './billing-component/billing-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { AuthguardService } from './authguard.service';
import { AuthServiceService } from './auth-service.service';


const routes: Routes = [
  { path: '', component: AccountComponentComponent , canActivate: [AuthguardService] },
  { path: 'billing', component: BillingComponentComponent , canActivate: [AuthguardService]},
  { path: 'login', component: LoginComponentComponent },
  { path: 'menu', component: MenuComponentComponent , canActivate: [AuthguardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  constructor(private auth:  AuthServiceService , router: Router) {
    this.auth.user$.subscribe(user => {
      if (user) {
        router.navigate(['/']);
      }
      else {
        router.navigate(['/login']);
      }
    })
  }
}
