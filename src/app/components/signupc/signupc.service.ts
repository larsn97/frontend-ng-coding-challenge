import {inject, Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {SignupUser} from "../../shared/interfaces/signup-interface";

@Injectable({
  providedIn: 'root'
})
export class SignupcService {
  private http = inject(HttpClient);

  public signup(username: string, password: string): Observable<SignupUser> {
    return this.http.post<SignupUser>(`api/user`, {username: username, password: password}).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    return throwError('Nutzer bereits vorhanden.')
  }
}
