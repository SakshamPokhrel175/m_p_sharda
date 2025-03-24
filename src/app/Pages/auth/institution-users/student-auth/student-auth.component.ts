import { Component, OnInit } from '@angular/core';
import { InstitutionSelectionComponent } from "../institution-selector/institution-selector.component";
import { InstitutionDataType } from '../../../../../../INTERFACE/institution';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-auth',
  imports: [InstitutionSelectionComponent, CommonModule, FormsModule],
  templateUrl: './student-auth.component.html',
  styleUrl: './student-auth.component.css'
})
export class StudentAuthComponent {
  selectedInstitution: InstitutionDataType | null = null;

  // ✅ THIS is the method Angular is looking for in the template
  onInstitutionSelected(inst: InstitutionDataType | null): void {
    this.selectedInstitution = inst;
  }
}
