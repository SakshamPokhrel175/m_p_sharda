// admin-auth.component.ts
import { Component, OnInit } from '@angular/core';
import { InstitutionDataType } from '../../../../../../INTERFACE/institution';
import { InstitutionSelectionService } from '../../services/institution-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-auth',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css'],
})
export class AdminAuthComponent{
  
}