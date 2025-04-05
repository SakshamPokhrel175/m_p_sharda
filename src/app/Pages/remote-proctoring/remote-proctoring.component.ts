import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-remote-proctoring',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './remote-proctoring.component.html',
  styleUrls: ['./remote-proctoring.component.css']
})
export class RemoteProctoringComponent {
  features = [
    {
      title: 'Secure Login with JWT & OAuth',
      description: 'Robust access control using JWT & OAuth protocols. Ensures seamless login with strong encryption for individuals and institutions.',
      image: 'https://source.unsplash.com/800x600/?cybersecurity,login'
    },
    {
      title: 'Face & Eye Tracking Authentication',
      description: 'Biometric verification with real-time facial and eye detection to prevent impersonation and ensure candidate authenticity.',
      image: 'https://source.unsplash.com/800x600/?face-recognition'
    },
    {
      title: 'Role-Based Quiz Creation',
      description: 'Faculty and Admins enjoy structured control with role-based quiz management for targeted learning and assessment.',
      image: 'https://source.unsplash.com/800x600/?online-learning'
    },
    {
      title: 'Real-Time Video Monitoring',
      description: 'AI & human proctors monitor candidates live to detect suspicious behavior, ensuring a secure exam environment.',
      image: 'https://source.unsplash.com/800x600/?monitoring,webcam'
    },
    {
      title: 'Auto Evaluation & Instant Feedback',
      description: 'Objective answers are auto-evaluated with real-time result delivery, boosting transparency and learning feedback.',
      image: 'https://source.unsplash.com/800x600/?evaluation,feedback'
    },
    {
      title: 'Premium Institution Access',
      description: 'Get premium features like deep analytics, branding, priority support, and secure integrations built for scale.',
      image: 'https://source.unsplash.com/800x600/?institution,technology'
    },
    {
      title: 'Rich Dashboards & Reports',
      description: 'Visualize quiz performance and activity logs with exportable, audit-ready dashboards tailored for institutions.',
      image: 'https://source.unsplash.com/800x600/?dashboard,analytics'
    }
  ];
}
