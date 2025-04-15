import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
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
