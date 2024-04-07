import {Component, inject, OnInit,} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {AiPromptService} from "./ai-prompt.service";
import {HttpClientModule} from "@angular/common/http";
import {Prompt} from "../../shared/interfaces/prompt-interface";
import {DatePipe, NgForOf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {SessionStorageService} from "../../shared/services/session-storage.service";
import {MatSelect, MatSelectModule} from "@angular/material/select";
import {FormBuilder, FormsModule, NonNullableFormBuilder, ReactiveFormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {take} from "rxjs";

interface PromptSearch {
  value: string | null,
  viewValue: string,
}
@Component({
  selector: 'app-ai-prompt',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDividerModule, HttpClientModule, DatePipe, MatSelectModule, ReactiveFormsModule, FormsModule, MatInput, NgForOf],
  templateUrl: './ai-prompt.component.html',
  styleUrls: ['./ai-prompt.component.scss']
})
export class AiPromptComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private aiService = inject(AiPromptService);
  private fb = inject(FormBuilder);

  public form = this.fb.nonNullable.group({
    'searchField': ['Ersteller', []],
    'searchText': ['', []]
  });
  public searchArray: PromptSearch[] = [
    {value: 'Ersteller', viewValue: 'Ersteller'},
    {value: 'Beschreibung', viewValue: 'Beschreibung'}
  ]
  public prompts: Array<Prompt> | undefined;
  public originalPrompts: Array<Prompt> | undefined;

  ngOnInit() {
    // bei initialem Aufruf
    this.sendGetRequestForPrompts();

    // mit Suchfeld
    this.form.valueChanges.subscribe((value) => {
      if(value.searchField === 'Ersteller') {
        this.prompts = this.filterPromptsByNameStartsWith(this.form.controls.searchText.value);
      } else if(value.searchField === 'Beschreibung') {
        this.prompts = this.filterPromptsByDescriptionContains(this.form.controls.searchText.value);
      } else if(value.searchText === '') {
        this.sendGetRequestForPrompts();
      }
    });
  }

  public filterPromptsByNameStartsWith(startsWithString: string): Array<Prompt> | undefined {
    return this.originalPrompts?.filter(prompt => prompt.user.username.toLowerCase().startsWith(startsWithString.toLowerCase()));
  }

  public filterPromptsByDescriptionContains(searchString: string): Array<Prompt> | undefined {
    // if empty return original
    if (!searchString.trim()) return this.originalPrompts;

    // split string into single words
    const searchWords = searchString.toLowerCase().split(/\s+/);

    // filter words - contains every single word in description
    return this.originalPrompts?.filter(prompt =>
      searchWords.every(word =>
        prompt.description.toLowerCase().split(/\s+/).some(descWord =>
          descWord.includes(word)
        )
      )
    );
  }

  public sendGetRequestForPrompts() {
    this.route.url.subscribe(url => {
      url.map((x) => {
        x?.path === 'homepage' ?
          this.aiService.getAllPrompts().subscribe(prompts => {
            this.originalPrompts = prompts; // Speichern der ursprünglichen Liste in `originalPrompts`
            this.prompts = prompts; // Aktualisieren von `prompts` für die Anzeige
          }) :
          this.aiService.getMyPrompts(sessionStorage.getItem('userId')).subscribe(prompts => {
            this.originalPrompts = prompts;
            this.prompts = prompts;
          });
      });
    });
  }
}
