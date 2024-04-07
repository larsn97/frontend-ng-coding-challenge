import { Component } from '@angular/core';
import {CreateAiPromptComponent} from "../../components/create-ai-prompt/create-ai-prompt.component";

@Component({
  selector: 'app-create-prompt',
  standalone: true,
  imports: [
    CreateAiPromptComponent
  ],
  templateUrl: './create-prompt.component.html',
  styleUrl: './create-prompt.component.scss'
})
export class CreatePromptComponent {
}
