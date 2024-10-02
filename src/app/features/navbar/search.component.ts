import { NgFor, NgIf } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AutoCompletePipe } from "../../shared/pipes/autocomplete.pipe";

@Component({
    selector: 'app-search',
    template: `
        <input type="text" [(ngModel)]="userName">
        @if (userName != '') {
            <button (click)="search()">Rechercher</button>
        }
        <!-- <button (click)="search()" *ngIf="userName != ''">Rechercher</button> -->

       <ul>
        @for (name of fistNames | autocomplete:userName ; track $index) {
            <li>{{ name }}</li>
        }
        @empty {
            <p>Aucun nom trouvé</p>
        }
            <!-- <li *ngFor="let name of fistNames ; let i = index ; let isFirst = first">
                {{ isFirst }} - {{ name }}
            </li> -->
        </ul>
    `,
    standalone: true,
    imports: [FormsModule, /*NgIf, NgFor*/ AutoCompletePipe]
})
export class SearchComponent {
    @Input() userName = ''
    @Output() eventSearch: EventEmitter<string> = new EventEmitter()
    fistNames: string[] = ['ana', 'jim', 'ben']

    search() {
       this.eventSearch.emit(this.userName)
    }
}