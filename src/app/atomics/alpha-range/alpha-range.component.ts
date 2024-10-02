import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alpha-range',
  standalone: true,
  imports: [NgStyle, FormsModule],
  template: `
    <input type="range" [(ngModel)]="opacity" min="0" max="1" step="0.01" (input)="changeOpacity()">
    <div [ngStyle]="{ opacity, backgroundColor: color }"></div>
  `,
  styles: `
    div {
      width: 100px;
      height: 100px;
    }
  `
})
export class AlphaRangeComponent {
  @Input() opacity = 1
  @Input() color = 'white'

  changeOpacity() {

  }
}
