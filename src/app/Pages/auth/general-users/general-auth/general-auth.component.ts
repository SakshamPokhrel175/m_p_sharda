import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-general-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule , FormsModule],
  templateUrl: './general-auth.component.html',
  styleUrls: ['./general-auth.component.css']
})
export class GeneralAuthComponent {
  loginData = {
    email: '',
    password: ''
  };

  signupData = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  // Default to Login form
  isLoginSelected = true;

  // Toggle between Login and Signup forms
  toggleForm(isLogin: boolean) {
    this.isLoginSelected = isLogin;
  }

  // Handle login form submission
  onLogin() {
    console.log('Login form submitted', this.loginData);
    // Add logic to process login
  }

  // Handle signup form submission
  onSignup() {
    if (this.signupData.password === this.signupData.confirmPassword) {
      console.log('Signup form submitted', this.signupData);
      // Add logic to process signup
    } else {
      alert('Passwords do not match!');
    }
  }
}