import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../@services/emailjs.config';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class Contact {
  contactInfo = {
    email: 'zia.ete10@gmail.com',
    phone: '+8801670502610',
    location: 'Boshundhara R/A, Chattogram, Bangladesh',
    github: 'https://github.com/alligator609',
    linkedin: 'https://www.linkedin.com/in/zia-uddin-ahmed',
    twitter: 'https://twitter.com/alligator609'
  };

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  onSubmit() {
    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    const templateParams = {
      from_name: this.formData.name,
      from_email: this.formData.email,
      subject: this.formData.subject,
      message: this.formData.message,
      to_name: 'Zia Uddin Ahmed'
    };

    emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      templateParams,
      emailjsConfig.publicKey
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.formData = { name: '', email: '', subject: '', message: '' };
        
        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);
      },
      (error) => {
        console.error('FAILED...', error);
        this.isSubmitting = false;
        this.submitError = true;
        
        setTimeout(() => {
          this.submitError = false;
        }, 5000);
      }
    );
  }
}
