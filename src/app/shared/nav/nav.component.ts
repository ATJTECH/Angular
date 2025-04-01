import { Component } from '@angular/core';
import { AuthService } from '../../services/authservice.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(private authService: AuthService) {}
  logout(): void {
    this.authService.logout();  // Call the logout method from AuthService
  }

}
