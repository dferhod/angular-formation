import { Component, inject, OnInit } from "@angular/core";
import { SearchComponent } from "./search.component";
import { CommonModule, CurrencyPipe, DatePipe, UpperCasePipe } from "@angular/common";
import { AppService } from "../../core/services/app.service";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-navbar',
    template: `
        <h1>{{ title | uppercase }}</h1>
        <p>{{ now | date:'longTime':'GMT+2' }}</p>
        <p>{{ price | currency:'EUR':'code' }}</p>
        <app-search [userName]="name" (eventSearch)="listenSearch($event)" />
        <button routerLink="/login">Se connecter</button>
    `,
    standalone: true,
    imports: [SearchComponent, /*UpperCasePipe, DatePipe, CurrencyPipe*/CommonModule, RouterLink]
})
export class NavbarComponent implements OnInit {
    private appService = inject(AppService)

    title = ''
    name = 'ben'
    now = Date.now()
    price = 15.23456789

    ngOnInit() {
        this.title = this.appService.getTitle()
    }

    // constructor(private appService: AppService) {
    //     this.title = appService.getTitle()
    // }

    listenSearch(userName: string) {
        console.log(userName)
    }
}