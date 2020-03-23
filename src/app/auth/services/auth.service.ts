import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;
  private isLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor(private af: AngularFireAuth, private router: Router) {
    this.af.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  async register(email: string, password: string) {
    await this.af.createUserWithEmailAndPassword(email, password);
    this.isLoggedIn$.next(true);
    this.router.navigate(['products']);
  }

  async login(email: string, password: string) {
    await this.af.signInWithEmailAndPassword(email, password);
    this.isLoggedIn$.next(true);
    this.router.navigate(['products']);
  }

  async logout() {
    await this.af.signOut();
    this.isLoggedIn$.next(false);
    localStorage.removeItem('user');
    this.router.navigate(['auth/login']);
  }

  get loggedIn() {
    return this.isLoggedIn$.asObservable();
  }
}
