import {Component, Input} from '@angular/core';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-hinweis',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './hinweis.component.html',
  styleUrl: './hinweis.component.scss'
})
export class HinweisComponent {
  @Input() hinweistext: string | null | undefined;

  public setHinweistext(hinweistext: string) {
    this.hinweistext = hinweistext;
  }
}

