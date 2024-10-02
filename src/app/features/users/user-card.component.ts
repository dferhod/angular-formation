import { Component, Input } from "@angular/core";
import { User } from "../../core/interfaces/user";

@Component({
    selector: 'app-user-card',
    template: `
        <article>
            <header>{{ user.name }}</header>
            {{ user.email }}
        </article>  
    `,
    standalone: true
})
export class UserCardComponent {
    @Input() user: User = {} as User
}