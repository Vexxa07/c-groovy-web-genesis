
export const validateName = (name: string): string => {
  if (!name.trim()) {
    return 'Name is required';
  }
  if (name.length < 2) {
    return 'Name must be at least 2 characters';
  }
  return '';
};

export const validateEmail = (email: string): string => {
  if (!email.trim()) {
    return 'Email is required';
  }
  if (!email.includes('@')) {
    return 'Email must include @ symbol';
  }
  if (!email.includes('.')) {
    return 'Email must include domain';
  }
  const atIndex = email.indexOf('@');
  const dotIndex = email.lastIndexOf('.');
  
  if (atIndex > dotIndex) {
    return 'Invalid email format';
  }
  
  if (dotIndex === email.length - 1) {
    return 'Invalid email domain';
  }
  
  return '';
};

export const validatePassword = (password: string): string => {
  if (!password) {
    return 'Password is required';
  }
  if (password.length < 8) {
    return 'Password must be at least 8 characters';
  }
  
  let hasUpperCase = false;
  let hasLowerCase = false;
  let hasDigit = false;
  
  for (let i = 0; i < password.length; i++) {
    const char = password.charAt(i);
    if (char >= 'A' && char <= 'Z') {
      hasUpperCase = true;
    } else if (char >= 'a' && char <= 'z') {
      hasLowerCase = true;
    } else if (char >= '0' && char <= '9') {
      hasDigit = true;
    }
  }
  
  if (!hasUpperCase) {
    return 'Password must contain at least one uppercase letter';
  }
  
  if (!hasLowerCase) {
    return 'Password must contain at least one lowercase letter';
  }
  
  if (!hasDigit) {
    return 'Password must contain at least one digit';
  }
  
  return '';
};

export const validatePasswordMatch = (password: string, confirmPassword: string): string => {
  if (!confirmPassword) {
    return 'Please confirm your password';
  }
  if (password !== confirmPassword) {
    return 'Passwords do not match';
  }
  return '';
};

export const validateAge = (age: string): string => {
  if (!age.trim()) {
    return 'Age is required';
  }
  
  const ageValue = parseInt(age);
  
  if (isNaN(ageValue)) {
    return 'Age must be a valid number';
  }
  
  if (ageValue < 13) {
    return 'You must be at least 13 years old';
  }
  
  if (ageValue > 120) {
    return 'Please enter a valid age';
  }
  
  return '';
};
