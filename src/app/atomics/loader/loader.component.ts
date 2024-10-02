import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  template: `
    <div [ngStyle]="{ color: loading ? 'green' : 'red', fontWeight: 'bold' }">Texte</div>
    @if (loading) {
      <article class="loader"></article>
    }
    @else {
      <ng-content />
    } 
  `,
  styles: `
    .loader {
      width: 48px;
      height: 48px;
      border: 3px solid black;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    } 
    .loader::after {
      content: '';  
      box-sizing: border-box;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 56px;
      height: 56px;
      border-radius: 50%;
      border: 3px solid transparent;
      border-bottom-color: #FF3D00;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    } 
  `,
  imports: [NgStyle]
})
export class LoaderComponent {
  @Input() loading = false

}
