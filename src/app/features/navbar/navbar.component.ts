import { Component, inject, OnInit } from "@angular/core";
import { SearchComponent } from "./search.component";
import { CommonModule, CurrencyPipe, DatePipe, UpperCasePipe } from "@angular/common";
import { AppService } from "../../core/services/app.service";
import { RouterLink } from "@angular/router";
import { UsersService } from "../../core/services/users.service";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title() | uppercase }}</h1>
        <p>{{ now | date:'longTime':'GMT+2' }}</p>
        <p>{{ price | currency:'EUR':'code' }}</p>
        <app-search [userName]="name" (eventSearch)="listenSearch($event)" />
        <button routerLink="/login">Se connecter</button>
        <button (click)="changeTitle()">Changer titre</button>
    `,
    standalone: true,
    imports: [SearchComponent, /*UpperCasePipe, DatePipe, CurrencyPipe*/CommonModule, RouterLink]
})
export class NavbarComponent {
    private appService = inject(AppService)
    private userService = inject(UsersService)

    title = this.appService.title
    name = 'ben'
    now = Date.now()
    price = 15.23456789

    // constructor(private appService: AppService) {
    //     this.title = appService.getTitle()
    // }

    listenSearch(userName: string) {
        this.userService.setSearchName(userName)
    }

    changeTitle() {
        this.appService.setTitle('New Title')
    }
}