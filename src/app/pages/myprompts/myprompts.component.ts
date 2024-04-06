import { Component } from '@angular/core';
import {AiPromptComponent} from "../../components/ai-prompt/ai-prompt.component";

@Component({
  selector: 'app-myprompts',
  standalone: true,
  imports: [AiPromptComponent],
  templateUrl: './myprompts.component.html',
  styleUrl: './myprompts.component.scss'
})
export class MypromptsComponent {

}
