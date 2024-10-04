import { Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { IndexComponent } from "./layouts/index/index.component";
import { RegisterComponent } from "./pages/register/register.component";

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }
]