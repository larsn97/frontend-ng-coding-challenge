import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  private isAuthenticated: BehaviorSubject<boolean | null>;
  private userId: BehaviorSubject<number | null>;

  constructor() {
    const isSessionStorageAvailable = typeof sessionStorage !== 'undefined';
    const authenticatedItem = isSessionStorageAvailable ? Boolean(sessionStorage.getItem('isAuthenticated')) : null;
    const userIdItem = isSessionStorageAvailable ? Number(sessionStorage.getItem('userId')) : null;
    this.isAuthenticated = new BehaviorSubject<boolean | null>(authenticatedItem);
    this.userId = new BehaviorSubject<number | null>(userIdItem);
  }

  getAuthenticatedItem(): Observable<boolean | null> {
    return this.isAuthenticated.asObservable();
  }

  getUserIdItem(): Observable<number | null> {
    return this.userId.asObservable();
  }

  setAuthenticatedItem(value: boolean): void {
    sessionStorage.setItem('isAuthenticated', JSON.stringify(value));
    this.isAuthenticated.next(value);
  }

  setUserIdItem(value: number): void {
    sessionStorage.setItem('userId', JSON.stringify(value));
    this.userId.next(value);
  }

  removeAuthenticatedItem(): void {
    sessionStorage.removeItem('isAuthenticated');
    this.isAuthenticated.next(null);
  }

  removeUserIdItem(): void {
    sessionStorage.removeItem('userId');
    this.userId.next(null);
  }
}
