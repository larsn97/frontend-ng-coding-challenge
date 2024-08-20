import {Component, inject} from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  FormsModule, NgForm,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ErrorStateMatcher} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";
import {SessionStorageService} from "../../shared/services/session-storage.service";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, DatePipe, MatCardModule, MatInputModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private fb = inject(NonNullableFormBuilder);
  private service = inject(LoginService);
  private storageService = inject(SessionStorageService);
  private router = inject(Router);

  public matcher = new MyErrorStateMatcher()
  public form = this.fb.group({
    'username': ['', Validators.required],
    'password': ['', Validators.required]
  });
  public hide = true;

  public onSubmit() {
    this.service.login(this.form.controls.username.value, this.form.controls.password.value).subscribe({
      next: (value) => {
        this.storageService.setAuthenticatedItem(value.isAuthenticated);
        this.storageService.setUserIdItem(value.userId);
        this.router.navigate(['', 'homepage']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
