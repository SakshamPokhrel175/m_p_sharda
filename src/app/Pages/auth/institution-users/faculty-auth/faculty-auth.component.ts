// faculty-auth.component.ts

import { Component } from '@angular/core';
import { InstitutionSelectionComponent } from "../institution-selector/institution-selector.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InstitutionDataType } from '../../../../../../INTERFACE/institution';

@Component({
  selector: 'app-faculty-auth',
  standalone: true,
  imports: [InstitutionSelectionComponent, CommonModule, FormsModule],
  templateUrl: './faculty-auth.component.html',
  styleUrls: ['./faculty-auth.component.css']
})
export class FacultyAuthComponent {
  selectedInstitution: InstitutionDataType | null = null;

  // ✅ THIS is the method Angular is looking for in the template
  onInstitutionSelected(inst: InstitutionDataType | null): void {
    this.selectedInstitution = inst;
  }
}