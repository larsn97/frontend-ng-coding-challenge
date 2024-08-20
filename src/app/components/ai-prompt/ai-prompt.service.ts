import {inject, Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {Prompt} from "../../shared/interfaces/prompt-interface";
import {catchError, Observable, throwError} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class AiPromptService {
  private  http = inject(HttpClient);

  public getAllPrompts(): Observable<Array<Prompt>> {
    return this.http.get<Array<Prompt>>('api/prompts');
  }

  public getMyPrompts(userId: string | null): Observable<Array<Prompt>> {
    return this.http.get<Array<Prompt>>(`api/prompts/user?userId=${userId}`);
  }

  public likePrompt(promptId: number, userId: number): Observable<any> | undefined {
    return this.http.post<any>('api/like', {promptId: promptId, userId: userId}).pipe(catchError(this.handleError));
  }

  public isLikedByUser(promptId: number, userId: number): Observable<boolean> {
    return this.http.get<boolean>(`api/like?promptId=${promptId}&userId=${userId}`);
  }

  public deletePrompt(promptId: number): Observable<any> {
    return this.http.delete(`api/prompts?promptId=${promptId}`);
  }

  private handleError(error: HttpErrorResponse) {
    return throwError('Like Erstellung nicht möglich');
  }
}
