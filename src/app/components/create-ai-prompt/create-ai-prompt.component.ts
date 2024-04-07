import {Component, inject, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroupDirective,
  FormsModule, NgForm,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import { MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import { MatFormFieldModule, MatLabel, MatSuffix} from "@angular/material/form-field";
import { MatIconModule} from "@angular/material/icon";
import { MatInputModule} from "@angular/material/input";
import {MyErrorStateMatcher} from "../login/login.component";
import {UserService} from "../../shared/services/user.service";
import {User} from "../../shared/interfaces/user-interface";
import {SessionStorageService} from "../../shared/services/session-storage.service";
import {CreateAiPromptService} from "./create-ai-prompt.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-ai-prompt',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  templateUrl: './create-ai-prompt.component.html',
  styleUrl: './create-ai-prompt.component.scss'
})
export class CreateAiPromptComponent implements OnInit{
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private userService = inject(UserService);
  private aiPromptService = inject(CreateAiPromptService);
  private sessionService = inject(SessionStorageService);

  public form = this.fb.group({
    'promptDescription': ['', [Validators.required, Validators.maxLength(255), Validators.minLength(10)]],
  });
  public user: User | undefined;
  userId: number | null | undefined;

  ngOnInit() {
    this.sessionService.getUserIdItem().subscribe(value => this.userId = value);
    this.userService.getUserWithId(this.userId as number).subscribe({
      next: value => {
        this.user = value;
      }
    });
  }

  onSubmit(){
    this.aiPromptService.createPromptByUserIdAndDescription(this.form.controls.promptDescription.value, this.userId).subscribe({
      next: (value) => {
        this.router.navigate(['', 'homepage']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
