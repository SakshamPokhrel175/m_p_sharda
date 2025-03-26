import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { GeneralAuthComponent } from './Pages/auth/general-users/general-auth/general-auth.component';
import { StudentAuthComponent } from './Pages/auth/institution-users/student-auth/student-auth.component';
import { FacultyAuthComponent } from './Pages/auth/institution-users/faculty-auth/faculty-auth.component';
import { AdminAuthComponent } from './Pages/auth/admin-users/admin-auth/admin-auth.component';
import { InstitutionSelectionComponent } from './Pages/auth/institution-users/institution-selector/institution-selector.component';
import { ManageInstitutionComponent } from './Pages/auth/manage-institution/manage-institution.component';
import { FeatureComponent } from './Pages/feature/feature.component';
import { PlanComponent } from './Pages/plan/plan.component';
import { TestimonialComponent } from './Pages/testimonial/testimonial.component';
import { HelpComponent } from './Pages/help/help.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./Pages/home/home.component').then((m) => m.HomeComponent),
  },

  // General Users
  {
    path: 'auth/general',
    loadComponent: () =>
      import(
        './Pages/auth/general-users/general-auth/general-auth.component'
      ).then((m) => m.GeneralAuthComponent),
  },
  // Institution Users - Student
  {
    path: 'auth/student',
    loadComponent: () =>
      import(
        './Pages/auth/institution-users/student-auth/student-auth.component'
      ).then((m) => m.StudentAuthComponent),
  },

  // Institution Users - Faculty
  {
    path: 'auth/faculty',
    loadComponent: () =>
      import(
        './Pages/auth/institution-users/faculty-auth/faculty-auth.component'
      ).then((m) => m.FacultyAuthComponent),
  },
  {
    path: 'auth/admin',
    loadComponent: () =>
      import('./Pages/auth/admin-users/admin-auth/admin-auth.component').then(
        (m) => m.AdminAuthComponent
      ),
  },
  {
    path: 'auth/manage-institute',
    loadComponent: () =>
      import('./Pages/auth/manage-institution/manage-institution.component').then(
        (m) => m.ManageInstitutionComponent
      ),
  },
  {
    path: 'features',
    loadComponent: () =>
      import('./Pages/feature/feature.component').then(
        (m) => m.FeatureComponent
      ),
  },

  {
    path: 'plans',
    loadComponent: () =>
      import('./Pages/plan/plan.component').then(
        (m) => m.PlanComponent
      ),
  },
  {
    path: 'testimonials',
    loadComponent: () =>
      import('./Pages/testimonial/testimonial.component').then(
        (m) => m.TestimonialComponent
      ),
  },
  {
    path: 'help',
    loadComponent: () =>
      import('./Pages/help/help.component').then(
        (m) => m.HelpComponent
      ),
  },


];
