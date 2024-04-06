import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {AiPromptComponent} from "../../components/ai-prompt/ai-prompt.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [AiPromptComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
