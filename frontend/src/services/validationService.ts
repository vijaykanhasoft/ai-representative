/**
 * Simple validation service for form fields
 */

// Email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Simple validation functions
const validateEmail = (email: string): string => {
  if (!email) return 'Email is required';
  if (!EMAIL_REGEX.test(email)) return 'Please enter a valid email address';
  return '';
};

const validateCompanyName = (companyName: string): string => {
  if (!companyName) return 'Company name is required';
  if (companyName.length < 2) return 'Company name must be at least 2 characters';
  return '';
};

// Validate a field based on its type
const validate = (fieldType: string, value: string): string => {
  switch (fieldType) {
    case 'email':
      return validateEmail(value);
    case 'companyName':
      return validateCompanyName(value);
    default:
      return '';
  }
};

// Check if a form is valid
const isFormValid = (values: { [key: string]: string }): boolean => {
  // Check if all fields have values
  return Object.values(values).every(value => !!value);
};

const validationService = {
  validateEmail,
  validateCompanyName,
  validate,
  isFormValid
};

export default validationService; 