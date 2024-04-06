import { Component } from '@angular/core';
import {LoginComponent} from "../../components/login/login.component";

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [
    LoginComponent
  ],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.scss'
})
export class LoginpageComponent {

}
