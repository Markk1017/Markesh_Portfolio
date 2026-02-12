import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

interface ContactMethod {
  icon: string;
  title: string;
  value: string;
  link?: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  
  statusMessage = '';
  isLoading = false;

  constructor(private cdr: ChangeDetectorRef) {}

  contactMethods: ContactMethod[] = [
    {
      icon: '📧',
      title: 'Email',
      value: 'tallapanenimarkesh.dev@gmail.com',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=tallapanenimarkesh.dev@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 7661884343',
      link: 'tel:+917661884343'
    },
    
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://www.linkedin.com/in/tallapaneni-markesh'
    }
  ];


  
async onSubmit(event: Event) {
  event.preventDefault();

  if (this.isLoading) return;

  const form = event.currentTarget as HTMLFormElement;

  this.isLoading = true;
  this.statusMessage = '';

  emailjs.init('CEgD4swShr93uB4u7');

  emailjs.sendForm(
    'service_emkduic',
    'template_rlg2dpg',
    form
  )
  .then((response) => {
   
    console.log('EMAILJS SUCCESS RESPONSE:', response);

    // change button state based on response
    this.isLoading = false;
    this.statusMessage = '✓ Message sent successfully!';
    form.reset();
    
    // Manually trigger change detection
    this.cdr.detectChanges();
    
    // Clear message after 5 seconds
    setTimeout(() => {
      this.statusMessage = '';
      this.cdr.detectChanges();
    }, 5000);
  })
  .catch((error) => {
    console.log('EMAILJS ERROR RESPONSE:', error);

    this.isLoading = false;
    this.statusMessage = '✗ Failed to send message. Please try again.';
    
    // Manually trigger change detection
    this.cdr.detectChanges();
    
    // Clear error message after 5 seconds
    setTimeout(() => {
      this.statusMessage = '';
      this.cdr.detectChanges();
    }, 5000);
  });
}


  
}
