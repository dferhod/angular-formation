import { Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { UsersComponent } from "./features/users/users.component";

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: UsersComponent
    }
]