import {Component, inject, OnInit,} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {AiPromptService} from "./ai-prompt.service";
import {HttpClientModule} from "@angular/common/http";
import {Prompt} from "../../shared/interfaces/prompt-interface";
import {DatePipe} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {SessionStorageService} from "../../shared/services/session-storage.service";

@Component({
  selector: 'app-ai-prompt',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDividerModule, HttpClientModule, DatePipe],
  templateUrl: './ai-prompt.component.html',
  styleUrls: ['./ai-prompt.component.scss']
})
export class AiPromptComponent implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private aiService = inject(AiPromptService);
  private sessionService = inject(SessionStorageService);

  public prompts: Array<Prompt> | undefined;

  ngOnInit() {
    this.route.url.subscribe(url => {
        url.map((x) => {
          x?.path === 'homepage' ?
            this.aiService.getAllPrompts().subscribe(prompt => {this.prompts = prompt;}) :
              this.aiService.getMyPrompts(sessionStorage.getItem('userId')).subscribe(prompt => {
              this.prompts = prompt;
          });
        });
    });
  }

  //filter einbauen

}
