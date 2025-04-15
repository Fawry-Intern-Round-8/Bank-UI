import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  form = {
    email: '',
    password: ''
  };

  onLogin() {
    console.log('Login submitted:', this.form);
    // Later: send to backend for auth
  }
}
