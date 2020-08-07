import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponeComponent } from './nav-bar-compone/nav-bar-compone.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountComponentComponent } from './account-component/account-component.component';
import { CreateCategoryComponent } from './account-component/dialogs/create-category/create-category.component';
import { BillingComponentComponent } from './billing-component/billing-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth/public_api';
import { AuthguardService } from './authguard.service';
import { AuthServiceService as AuthService, AuthServiceService } from './auth-service.service';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CreateDishComponent } from './account-component/dialogs/create-dish/create-dish.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponeComponent,
    AccountComponentComponent,
    BillingComponentComponent,
    LoginComponentComponent,
    MenuComponentComponent,
    CreateCategoryComponent,
    CreateDishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatBadgeModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
    AuthguardService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
