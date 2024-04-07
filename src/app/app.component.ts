import {Component, inject, OnInit} from '@angular/core';
import {MatMenu} from "@angular/material/menu";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {SessionStorageService} from "./shared/services/session-storage.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatMenu, MatButtonToggle, MatToolbar, MatIcon, MatToolbarRow, RouterLink, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  private router = inject(Router);
  private storageService = inject(SessionStorageService);

  public isAuthenticated: boolean | null = false;

  ngOnInit() {
    this.storageService.getAuthenticatedItem().subscribe((value) => {
      this.isAuthenticated = value;
    });

    this.navigateToHomepage();
  }

  navigateToHomepage() {
    this.router.navigate(['', 'homepage'])
  }

  navigateToSignUp() {
    this.router.navigate(['', 'signup'])
  }

  navigateToMyAiPrompts() {
    this.router.navigate(['', 'myprompts'])
  }

  navigateToLoginPage() {
    this.router.navigate(['', 'login'])
  }

  navigateTocreatePrompt() {
    this.router.navigate(['', 'createPrompt'])
  }

  logout() {
    this.storageService.removeAuthenticatedItem();
    this.storageService.removeUserIdItem();
    sessionStorage.clear();
  }
}
