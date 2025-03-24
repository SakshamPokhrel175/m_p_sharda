import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { InstitutionDataType } from '../../../../../../INTERFACE/institution';
import { InstitutionSelectionService } from '../../services/institution-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-institution-selector',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './institution-selector.component.html',
  styleUrls: ['./institution-selector.component.css']
})
export class InstitutionSelectionComponent implements OnInit {

  institutions: InstitutionDataType[] = [];
  filteredInstitutions: InstitutionDataType[] = [];
  searchText: string = '';
  selectedInstitution: InstitutionDataType | null = null;
  showLoginSuccess = false;

  loginData = {
    userId: '',
    password: ''
  };

  @Output() institutionSelected = new EventEmitter<InstitutionDataType | null>();

  constructor(private institutionService: InstitutionSelectionService, private router: Router) {}

  ngOnInit(): void {
    this.fetchInstitutions();
  }

  fetchInstitutions(): void {
    this.institutionService.getInstitutes().subscribe((data: InstitutionDataType[]) => {
      this.institutions = data;
      this.filteredInstitutions = data;
    });
  }

  onSearch(): void {
    const term = this.searchText.trim().toLowerCase();
    this.filteredInstitutions = term.length >= 3
      ? this.institutions.filter(inst => inst.name.toLowerCase().includes(term))
      : [];
  }

  selectInstitution(inst: InstitutionDataType): void {
    this.selectedInstitution = inst;
    this.institutionSelected.emit(inst);
  }

  clearInstitution(): void {
    this.selectedInstitution = null;
    this.searchText = '';
    this.loginData = { userId: '', password: '' };
    this.filteredInstitutions = this.institutions;
    this.institutionSelected.emit(null);
  }

  login(): void {
    if (this.loginData.userId && this.loginData.password) {
      this.showLoginSuccess = true;
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 2000);
    }
  }
}
