import { computed, inject, Injectable, signal } from "@angular/core";
import { User } from "../interfaces/user";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private http = inject(HttpClient)
    readonly url = 'https://jsonplaceholder.typicode.com/users'
    private _users = signal<User[]>([])
    private _searchName = signal('')
    users = this._users.asReadonly()
    searchName = this._searchName.asReadonly()

    usersFiltered = computed<User[]>(() => {
      return  this.users().filter(user => user.name.includes(this.searchName()))
    })

    setSearchName(val: string) {
      this._searchName.set(val)
    }

    getAll(): Observable<User[]> {
      return this.http.get<User[]>(this.url)
        .pipe(
          tap((users) => {
            this._users.set(users)
          })
        )
    }

    create(payload: { name: string, email: string }): Observable<User> {
      return this.http.post<User>(this.url, payload)
        .pipe(
          tap((userCreated) => {
             const users = this._users()
             this._users.set([ ...users, userCreated ])
          })
        )
    }

    delete(id: number): Observable<void> {
      return this.http.delete<void>(this.url + '/' + id)
        .pipe(
          tap(() => {
            this._users.set(
              this._users().filter(user => user.id != id)
            )
          })
        )
    }
}