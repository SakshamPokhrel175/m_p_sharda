import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-plan',
  imports: [CommonModule],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.css'
})
export class PlanComponent {
  plans = [
    {
      title: 'Free Individual Plan',
      description: 'Ideal for individuals who want to explore the platform with limited access.',
      price: 0,
      features: [
        'Free Access to Basic Features',
        'Limited Question Bank',
        'Add GB (1 GB)',
        'Community Support'
      ]
    },
    {
      title: 'Basic Plan',
      description: 'Ideal for individuals or small institutions. Access to essential features.',
      price: 19,
      features: [
        'Secure Exam Environment',
        'Basic Proctoring',
        'Role-Based Access',
        'Question Bank with Auto-Grading',
        'Add GB (20 GB)'
      ]
    },
    {
      title: 'Institution Plan',
      description: 'Designed for institutions with custom branding and advanced proctoring.',
      price: 49,
      features: [
        'Institution Branding',
        'AI-Powered Proctoring',
        'Live Exam Monitoring',
        'Advanced Reports and Analytics',
        'Priority Support',
        'Add GB (1 TB)'
      ]
    },
    {
      title: 'Enterprise Plan',
      description: 'Best for large organizations with enterprise-level requirements.',
      price: 99,
      features: [
        'Custom Subdomains and Themes',
        'Advanced Security Features',
        'Unlimited User Accounts',
        'Dedicated Account Manager',
        '24/7 Premium Support',
        'Add GB (Unlimited)'
      ]
    },
    {
      title: 'Premium Plan',
      description: 'Advanced plan for organizations requiring additional features and priority services.',
      price: 149,
      features: [
        'Priority Exam Scheduling',
        'Advanced Analytics and Insights',
        'Customizable Question Bank',
        'Real-Time Data Syncing',
        'Add GB (2 TB)',
        'Dedicated Support Team'
      ]
    },
    {
      title: 'Custom Enterprise Plan',
      description: 'Tailored solutions for large organizations with specific needs and full customization.',
      price: 249,
      features: [
        'Fully Customizable Branding',
        'Unlimited Exam Customization',
        'Custom Security Features',
        'Enterprise-Level Integration',
        '24/7 Dedicated Support',
        'Add GB (Unlimited)',
        'On-Site Support and Training'
      ]
    }
  ];
}
