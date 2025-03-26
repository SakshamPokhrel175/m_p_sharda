import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-general-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './general-auth.component.html', // Ensure this file exists
  styleUrls: ['./general-auth.component.css'],
})
export class GeneralAuthComponent {
  loginData = { email: '', password: '' };
  signupData = { email: '', password: '', confirmPassword: '' };
  isLoginSelected = true;

  toggleForm(isLogin: boolean) {
    this.isLoginSelected = isLogin;
  }

  onLogin() {
    console.log('Login form submitted', this.loginData);
  }

  onSignup() {
    if (this.signupData.password === this.signupData.confirmPassword) {
      console.log('Signup form submitted', this.signupData);
    } else {
      alert('Passwords do not match!');
    }
  }

  onForgotPassword(event: Event) {
    event.preventDefault();
    alert('Forgot password functionality to be implemented.');
  }
}
