import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import 'firebase/auth';
import { Observable } from 'rxjs';

@Injectable()
export class AuthServiceService {
  user$: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth) {
  
    this.user$ = afAuth.authState;
  }

  login() {
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.signOut();
  }

}
