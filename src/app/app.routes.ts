import { Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { IndexComponent } from "./layouts/index/index.component";
import { RegisterComponent } from "./pages/register/register.component";
import { UsersComponent } from "./features/users/users.component";
import { UserEditComponent } from "./pages/user-edit/user-edit.component";

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: IndexComponent,
        children: [
            {
                path: '',
                component: UsersComponent
            },
            {
                path: 'user/:id',
                component: UserEditComponent
            }
        ]
    },
    {
        path: 'register',
        component: RegisterComponent
    }
]