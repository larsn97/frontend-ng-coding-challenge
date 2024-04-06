import { Component } from '@angular/core';
import {SignupcComponent} from "../../components/signupc/signupc.component";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    SignupcComponent
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

}
