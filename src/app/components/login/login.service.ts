import {inject, Injectable} from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {Prompt} from "../../shared/interfaces/prompt-interface";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {User, UserLogin} from "../../shared/interfaces/user-interface";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private http = inject(HttpClient);

  public login(username: string, password: string): Observable<UserLogin> {
    return this.http.get<UserLogin>(`api/login?username=${username}&password=${password}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError('User oder Passwort stimmen nicht überein.')
  }
}
