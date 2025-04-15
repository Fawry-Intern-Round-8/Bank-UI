import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-signup',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  form = {
    name: '',
    email: '',
    password: ''
  };

  onSubmit() {
    console.log('Form Submitted', this.form);
    // later: send to backend user service
  }
}
