import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Prompt} from "../../shared/interfaces/prompt-interface";
import {catchError, Observable, throwError} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class AiPromptService {
  private  http = inject(HttpClient);

  public getAllPrompts(): Observable<Array<Prompt>> {
    return this.http.get<Array<Prompt>>('api/prompts')
  }

  public getMyPrompts(userId: string | null): Observable<Array<Prompt>> {
    return this.http.get<Array<Prompt>>(`api/prompts/user?userId=${userId}`)
  }
}
