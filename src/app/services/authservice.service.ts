import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/employee/login/';  // Backend login endpoint

  constructor(private http: HttpClient, private router:Router) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { username, password }).pipe(
      tap(response => {
        if (response.token) {
          this.saveToken(response.token);  // Store token in localStorage
        }
      })
    );
  }

  // Store token in localStorage
  saveToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  // Retrieve token
  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  // Logout - remove token
  logout(): void {
    localStorage.removeItem('auth_token');
    this.router.navigate(['/login']);
  }

  // Function to get authenticated request headers
  getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token ? `Token ${token}` : ''
    });
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
