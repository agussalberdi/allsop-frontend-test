import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor(private af: AngularFireAuth, private router: Router) {}

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
    this.router.navigate(['auth/login']);
  }

  get loggedIn() {
    return this.isLoggedIn$.asObservable();
  }
}
