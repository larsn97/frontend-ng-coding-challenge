import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {User} from "../interfaces/user-interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);

  public getUserWithId(id: number): Observable<User> {
    return this.http.get<User>(`api/user?id=${id}`);
  }
}
