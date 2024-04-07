import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {UserLogin} from "../../shared/interfaces/user-interface";
import {Prompt} from "../../shared/interfaces/prompt-interface";

@Injectable({
  providedIn: 'root'
})
export class CreateAiPromptService {
  private http = inject(HttpClient);

  public createPromptByUserIdAndDescription(description: string | null, userId: number | null | undefined): Observable<Prompt> {
    return this.http.post<Prompt>(`api/prompts`, {description: description, userId: userId}).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    return throwError('Prompt Erstellung nicht möglich')
  }
}
