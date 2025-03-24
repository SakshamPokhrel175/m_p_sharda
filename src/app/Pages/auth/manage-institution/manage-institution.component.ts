import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { InstitutionSelectionService } from '../services/institution-service.service';
import { InstitutionDataType } from '../../../../../INTERFACE/institution';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-institution',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './manage-institution.component.html',
  styleUrls: ['./manage-institution.component.css']
})
export class ManageInstitutionComponent implements OnInit {
  @ViewChild('logoInput') logoInput!: ElementRef;

  institutions: InstitutionDataType[] = [];
  selectedInstitution: InstitutionDataType | undefined;
  selectedLogoBase64: string = '';

  institutionFormData: InstitutionDataType = {
    id: '',
    name: '',
    location: '',
    image: ''
  };

  constructor(private institutionService: InstitutionSelectionService) {}

  ngOnInit(): void {
    this.loadInstitutes();
  }

  loadInstitutes(): void {
    this.institutionService.getInstitutes().subscribe((data) => {
      this.institutions = data;
    });
  }

  onLogoSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedLogoBase64 = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  submitInstitution(form: NgForm): void {
    if (!this.selectedInstitution) {
      // Add New Institution
      this.institutionFormData.id = (this.institutions.length > 0)
        ? (Number(this.institutions[this.institutions.length - 1].id) + 1).toString()
        : '1';
      this.institutionFormData.image = this.selectedLogoBase64;

      this.institutionService.addInstitute(this.institutionFormData).subscribe(() => {
        this.resetForm(form);
        this.loadInstitutes();
      });
    } else {
      // Update Existing Institution
      this.institutionFormData.id = this.selectedInstitution.id;
      this.institutionFormData.image = this.selectedLogoBase64 || this.selectedInstitution.image;

      this.institutionService.updateInstitute(this.institutionFormData).subscribe(() => {
        this.resetForm(form);
        this.loadInstitutes();
        this.selectedInstitution = undefined;
      });
    }
  }

  editInstitution(institution: InstitutionDataType): void {
    this.selectedInstitution = { ...institution };
    this.institutionFormData = { ...institution };
    this.selectedLogoBase64 = institution.image;
  }

  removeInstitution(id: string): void {
    const confirmDelete = confirm('Are you sure you want to delete this institution?');
    if (confirmDelete) {
      this.institutionService.deleteInstitute(id).subscribe(() => {
        this.loadInstitutes();
      });
    }
  }

  resetForm(form: NgForm): void {
    form.resetForm();
    this.institutionFormData = { id: '', name: '', location: '', image: '' };
    this.selectedLogoBase64 = '';
    this.logoInput.nativeElement.value = '';
    this.selectedInstitution = undefined;
  }
}
