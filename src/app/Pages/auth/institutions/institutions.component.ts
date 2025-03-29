import { GeneralserviceService } from './services/generalservice.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Institutions } from './class/institutions';

@Component({
  selector: 'app-institutions',
  imports: [CommonModule, FormsModule],
  templateUrl: './institutions.component.html',
  styleUrl: './institutions.component.css',
})
export class InstitutionsComponent {
  institutions: Institutions[] = [];

  constructor(private generalService: GeneralserviceService) {}

  ngOnInit(): void {
    this.getGeneral();
  }

  private getGeneral() {
    this.generalService.getGeneralList().subscribe(
      (data) => {
        console.log('Data fetched from API:', data); // Check the data
        this.institutions = data;
      },
      (error) => {
        console.error('Error fetching data:', error); // Log any error
      }
    );
  }
}
