import {Component, inject} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MyErrorStateMatcher} from "../login/login.component";
import {DatePipe} from "@angular/common";
import {SignupcService} from "./signupc.service";
import {SessionStorageService} from "../../shared/services/session-storage.service";
import {Router} from "@angular/router";
import {subscribe} from "node:diagnostics_channel";

@Component({
  selector: 'app-signupc',
  standalone: true,
  imports: [FormsModule, DatePipe, MatCardModule, MatInputModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatIconModule],
  templateUrl: './signupc.component.html',
  styleUrl: './signupc.component.scss'
})
export class SignupcComponent {
  private fb = inject(NonNullableFormBuilder);
  private service = inject(SignupcService);
  private storageService = inject(SessionStorageService);
  private router = inject(Router);

  public matcher = new MyErrorStateMatcher()
  public form = this.fb.group({
    'username': ['', Validators.required],
    'password': ['', Validators.required],
    'repeatPassword': ['', Validators.required],
  });
  public hidePassword = true;
  public hideRepeatPassword = true;

  onSubmit() {
    if(this.form.controls.password.value === this.form.controls.repeatPassword.value) {
      this.service.signup(this.form.controls.username.value, this.form.controls.password.value).subscribe({
        next: (value) => {
          this.storageService.setAuthenticatedItem(true);
          this.storageService.setUserIdItem(value.id);
          this.router.navigate(['', 'homepage']);
        },
        error: (err) => {
          console.log(err);
        }
      });
    } else {

    }
  }
}
