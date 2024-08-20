import {Component, DestroyRef, inject, OnInit, ViewChild} from '@angular/core';
import {MatMenu} from "@angular/material/menu";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {SessionStorageService} from "./shared/services/session-storage.service";
import {HinweisComponent} from "./shared/libs/hinweis/hinweis.component";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop"

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
  private destroyRef = inject(DestroyRef);

  public isAuthenticated: boolean | null = false;

  ngOnInit() {
    this.storageService.getAuthenticatedItem().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      this.isAuthenticated = value;
    });

    this.navigateToHomepage();
  }

  @ViewChild(HinweisComponent) hinweisComponent!: HinweisComponent

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
    this.router.navigate(['', 'homepage']);
  }
}
