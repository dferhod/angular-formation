import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

type TokenResponse = {
  token: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  readonly url = 'https://reqres.in/api/login';
  private token = '';

  login(payload: {
    password: string;
    email: string;
  }): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(this.url, payload).pipe(
      tap((res) => {
        this.token = res.token;
      })
    );
  }
}
