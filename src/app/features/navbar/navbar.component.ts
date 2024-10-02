import { Component } from "@angular/core";
import { SearchComponent } from "./search.component";
import { CommonModule, CurrencyPipe, DatePipe, UpperCasePipe } from "@angular/common";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title | uppercase }}</h1>
        <p>{{ now | date:'longTime':'GMT+2' }}</p>
        <p>{{ price | currency:'EUR':'code' }}</p>
        <app-search [userName]="name" (eventSearch)="listenSearch($event)" />
    `,
    standalone: true,
    imports: [SearchComponent, /*UpperCasePipe, DatePipe, CurrencyPipe*/CommonModule]
})
export class NavbarComponent {
    title = 'Mon App'
    name = 'ben'
    now = Date.now()
    price = 15.23456789

    listenSearch(userName: string) {
        console.log(userName)
    }
}