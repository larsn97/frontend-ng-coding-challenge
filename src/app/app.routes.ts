import { Routes } from '@angular/router';
import {SignupComponent} from "./pages/signup/signup.component";
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {LoginpageComponent} from "./pages/loginpage/loginpage.component";
import {MypromptsComponent} from "./pages/myprompts/myprompts.component";

export const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginpageComponent},
  {path: 'myprompts', component: MypromptsComponent}
];
