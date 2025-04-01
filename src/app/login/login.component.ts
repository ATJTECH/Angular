import { Component } from '@angular/core';
import { AuthService } from '../services/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService,private router:Router) {}

  loginUser() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        console.log('Login successful', response);
        this.router.navigate(['/employee/edashboard']);
        // localStorage.setItem('token', response.token);  
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }

}
