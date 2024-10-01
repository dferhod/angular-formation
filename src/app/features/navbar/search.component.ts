import { NgIf } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-search',
    template: `
        <input type="text" [(ngModel)]="userName">
        @if (userName != '') {
            <button (click)="search()">Rechercher</button>
        }
        <!-- <button (click)="search()" *ngIf="userName != ''">Rechercher</button> -->

       <ul>
        @for (name of fistNames ; track $index) {
            <li>{{ $index }} - {{ name }}</li>
        }
        </ul>
    `,
    standalone: true,
    imports: [FormsModule, NgIf]
})
export class SearchComponent {
    @Input() userName = ''
    @Output() eventSearch: EventEmitter<string> = new EventEmitter()
    fistNames: string[] = ['ana', 'jim', 'ben']

    search() {
       this.eventSearch.emit(this.userName)
    }
}