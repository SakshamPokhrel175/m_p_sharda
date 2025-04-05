import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InstitutionService } from './services/institutionService';
import { Institutions } from './class/institutions';

declare var bootstrap: any;

@Component({
  selector: 'app-institutions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.css'],
})
export class InstitutionsComponent implements OnInit {
  institutions: Institutions[] = [];

  InstitutionData: Institutions = {
    id: 0,
    institute_name: '',
    institute_location: '',
    institute_image: '',
  };

  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;

  errorMessage: string = '';
  isEditMode: boolean = false;

  selectedInstitutionToDelete: Institutions | null = null;

  @ViewChild('formSection') formSection!: ElementRef;

  constructor(private institutionService: InstitutionService) {}

  ngOnInit(): void {
    this.getInstitutions();
  }

  scrollToForm(): void {
    setTimeout(() => {
      this.formSection?.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  showSuccessModal(message: string): void {
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));
    (document.getElementById('successModalBody') as HTMLElement).innerText = message;
    successModal.show();
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    this.errorMessage = '';

    const name = this.InstitutionData.institute_name.trim();
    const location = this.InstitutionData.institute_location.trim();

    if (!name || !location) {
      this.errorMessage = 'Institution name and location are required.';
      return;
    }

    // Check for duplicate (case-insensitive match of name and location)
    const duplicate = this.institutions.find(i =>
      i.institute_name.toLowerCase() === name.toLowerCase() &&
      i.institute_location.toLowerCase() === location.toLowerCase() &&
      (!this.isEditMode || i.id !== this.InstitutionData.id)
    );

    if (duplicate) {
      this.errorMessage = `Institution already exists with ID: ${duplicate.id} and Name: "${duplicate.institute_name}"`;
      return;
    }

    const formData = new FormData();
    formData.append('institute_name', name);
    formData.append('institute_location', location);
    if (this.selectedFile) {
      formData.append('institute_image', this.selectedFile);
    }

    if (this.isEditMode) {
      const updatedName = this.InstitutionData.institute_name;
      const updatedId = this.InstitutionData.id;

      this.institutionService.updateInstitution(updatedId, formData).subscribe({
        next: () => {
          this.getInstitutions();
          this.resetForm();
          this.showSuccessModal(`Institution "${updatedName}" (ID: ${updatedId}) updated successfully!`);
        },
        error: err => {
          console.error('Update error:', err);
          this.errorMessage = 'Failed to update institution.';
        },
      });
    } else {
      this.institutionService.createInstitution(formData).subscribe({
        next: (res: any) => {
          this.getInstitutions();
          this.resetForm();
          this.showSuccessModal(`Institution "${res.institute_name}" (ID: ${res.id}) added successfully!`);
        },
        error: err => {
          console.error('Create error:', err);
          this.errorMessage = 'Failed to add institution.';
        },
      });
    }
  }

  editInstitution(inst: Institutions): void {
    this.InstitutionData = { ...inst };
    this.previewUrl = inst.institute_image;
    this.selectedFile = null;
    this.isEditMode = true;
    this.errorMessage = '';
    this.scrollToForm();
  }

  cancelEdit(): void {
    this.resetForm();
  }

  openDeleteModal(institution: Institutions): void {
    this.selectedInstitutionToDelete = institution;
    const modal = new bootstrap.Modal(document.getElementById('deleteModal'));
    modal.show();
  }

  confirmDelete(): void {
    if (!this.selectedInstitutionToDelete) return;

    this.institutionService.deleteInstitution(this.selectedInstitutionToDelete.id).subscribe({
      next: () => {
        this.getInstitutions();
        this.selectedInstitutionToDelete = null;
        const modalEl = document.getElementById('deleteModal');
        if (modalEl) bootstrap.Modal.getInstance(modalEl).hide();
      },
      error: err => {
        console.error('Delete error:', err);
        this.errorMessage = 'Failed to delete institution.';
      },
    });
  }

  getInstitutions(): void {
    this.institutionService.getInstitutionList().subscribe({
      next: data => (this.institutions = data),
      error: err => console.error('Fetch error:', err),
    });
  }

  resetForm(): void {
    this.InstitutionData = {
      id: 0,
      institute_name: '',
      institute_location: '',
      institute_image: '',
    };
    this.selectedFile = null;
    this.previewUrl = null;
    this.errorMessage = '';
    this.isEditMode = false;
  }
}
