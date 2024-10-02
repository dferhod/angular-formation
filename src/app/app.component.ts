import { Component } from '@angular/core'
import { NavbarComponent } from './features/navbar/navbar.component';
import { UsersComponent } from './features/users/users.component';
import { DrawComponent } from './features/draw/draw.component';

@Component({
    selector: 'app-root',
    template: `
        <app-navbar />
        <app-users />
        <!-- <app-draw /> -->
    `,
    standalone: true,
    imports: [NavbarComponent, UsersComponent /*, DrawComponent */]
})
export class AppComponent {}