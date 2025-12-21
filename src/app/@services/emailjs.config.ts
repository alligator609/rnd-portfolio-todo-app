// EmailJS Configuration
// Get your credentials from https://dashboard.emailjs.com/

export const emailjsConfig = {
  serviceId: 'YOUR_SERVICE_ID',      // Replace with your EmailJS Service ID
  templateId: 'YOUR_TEMPLATE_ID',    // Replace with your EmailJS Template ID
  publicKey: 'YOUR_PUBLIC_KEY'       // Replace with your EmailJS Public Key
};

// Instructions to set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add an email service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables:
//    - {{from_name}} - Sender's name
//    - {{from_email}} - Sender's email
//    - {{subject}} - Email subject
//    - {{message}} - Email message
//    - {{to_name}} - Your name (Zia Uddin Ahmed)
// 4. Copy your Service ID, Template ID, and Public Key
// 5. Replace the values above with your actual credentials
