import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { UsersService } from "../services/users.service";
import { User } from "../interfaces/user";

export function userResolver(): Observable<User[]> {
    const usersService = inject(UsersService)
    return usersService.getAll()
}