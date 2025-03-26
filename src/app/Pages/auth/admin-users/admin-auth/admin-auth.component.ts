// admin-auth.component.ts
import { Component, OnInit } from '@angular/core';
import { InstitutionDataType } from '../../../../../../INTERFACE/institution';
import { InstitutionSelectionService } from '../../services/institution-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-auth',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css'],
})
export class AdminAuthComponent{
  adminLoginData = { email: '', password: '' };
  loginError = false;

  constructor(private router: Router) {}

  onAdminLogin() {
    if (this.adminLoginData.email === 'admin.' && this.adminLoginData.password === 'root.') {
      this.loginError = false;
      this.router.navigateByUrl('/auth/manage-institute');
    } else {
      this.loginError = true;
    }
  }
}