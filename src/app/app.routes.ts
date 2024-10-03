import { Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { IndexComponent } from "./layouts/index/index.component";

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: IndexComponent
    }
]