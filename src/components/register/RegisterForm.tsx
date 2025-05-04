
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  age: string;
  gender: string;
  terms: boolean;
  musicPreference: string[];
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  age?: string;
  gender?: string;
  terms?: string;
  musicPreference?: string;
}

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    gender: '',
    terms: false,
    musicPreference: []
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  
  // Form validation functions (without regex as per requirements)
  const validateName = (name: string) => {
    if (!name) {
      return 'Name is required';
    }
    if (name.length < 2) {
      return 'Name must be at least 2 characters';
    }
    return '';
  };
  
  const validateEmail = (email: string) => {
    if (!email) {
      return 'Email is required';
    }
    if (!email.includes('@')) {
      return 'Email must contain @ symbol';
    }
    if (!email.includes('.')) {
      return 'Email must contain a domain';
    }
    return '';
  };
  
  const validatePassword = (password: string) => {
    if (!password) {
      return 'Password is required';
    }
    if (password.length < 8) {
      return 'Password must be at least 8 characters';
    }
    return '';
  };
  
  const validateConfirmPassword = (confirmPassword: string, password: string) => {
    if (!confirmPassword) {
      return 'Please confirm your password';
    }
    if (confirmPassword !== password) {
      return 'Passwords do not match';
    }
    return '';
  };
  
  const validateAge = (age: string) => {
    if (!age) {
      return 'Age is required';
    }
    const ageNumber = parseInt(age);
    if (isNaN(ageNumber)) {
      return 'Age must be a number';
    }
    if (ageNumber < 13) {
      return 'You must be at least 13 years old';
    }
    if (ageNumber > 120) {
      return 'Please enter a valid age';
    }
    return '';
  };
  
  const validateGender = (gender: string) => {
    if (!gender) {
      return 'Please select a gender';
    }
    return '';
  };
  
  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    newErrors.name = validateName(formValues.name);
    newErrors.email = validateEmail(formValues.email);
    newErrors.password = validatePassword(formValues.password);
    newErrors.confirmPassword = validateConfirmPassword(formValues.confirmPassword, formValues.password);
    newErrors.age = validateAge(formValues.age);
    newErrors.gender = validateGender(formValues.gender);
    
    if (!formValues.terms) {
      newErrors.terms = 'You must agree to the terms';
    }
    
    if (formValues.musicPreference.length === 0) {
      newErrors.musicPreference = 'Please select at least one music preference';
    }
    
    setErrors(newErrors);
    
    // Check if we have any errors
    return !Object.values(newErrors).some(error => error);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      
      if (name === 'terms') {
        setFormValues({
          ...formValues,
          terms: target.checked
        });
      } else if (name === 'musicPreference') {
        let newPreferences = [...formValues.musicPreference];
        
        if (target.checked) {
          newPreferences.push(value);
        } else {
          newPreferences = newPreferences.filter(pref => pref !== value);
        }
        
        setFormValues({
          ...formValues,
          musicPreference: newPreferences
        });
      }
    } else {
      setFormValues({
        ...formValues,
        [name]: value
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const isValid = validateForm();
    
    if (isValid) {
      setSubmitted(true);
      console.log('Form submitted:', formValues);
      
      // In a real app, we would submit to a server here
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  };
  
  if (submitted) {
    return (
      <div className="bg-music-gray p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold text-music-purple mb-4">Registration Successful!</h2>
        <p className="text-gray-300 mb-4">Thank you for registering with C'Groovy!</p>
        <p className="text-gray-300">You will be redirected to the home page shortly...</p>
      </div>
    );
  }
  
  return (
    <div className="bg-music-gray p-6 md:p-8 rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            className={`form-input w-full bg-music-darkGray text-white border ${
              errors.name ? 'border-red-500' : 'border-gray-600'
            } rounded-lg p-3 focus:outline-none`}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className={`form-input w-full bg-music-darkGray text-white border ${
              errors.email ? 'border-red-500' : 'border-gray-600'
            } rounded-lg p-3 focus:outline-none`}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        
        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            className={`form-input w-full bg-music-darkGray text-white border ${
              errors.password ? 'border-red-500' : 'border-gray-600'
            } rounded-lg p-3 focus:outline-none`}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>
        
        {/* Confirm Password Field */}
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleChange}
            className={`form-input w-full bg-music-darkGray text-white border ${
              errors.confirmPassword ? 'border-red-500' : 'border-gray-600'
            } rounded-lg p-3 focus:outline-none`}
          />
          {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
        </div>
        
        {/* Age Field */}
        <div>
          <label htmlFor="age" className="block text-sm font-medium mb-2">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formValues.age}
            onChange={handleChange}
            className={`form-input w-full bg-music-darkGray text-white border ${
              errors.age ? 'border-red-500' : 'border-gray-600'
            } rounded-lg p-3 focus:outline-none`}
          />
          {errors.age && <p className="error-message">{errors.age}</p>}
        </div>
        
        {/* Gender Field */}
        <div>
          <label htmlFor="gender" className="block text-sm font-medium mb-2">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formValues.gender}
            onChange={handleChange}
            className={`form-input w-full bg-music-darkGray text-white border ${
              errors.gender ? 'border-red-500' : 'border-gray-600'
            } rounded-lg p-3 focus:outline-none`}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
          {errors.gender && <p className="error-message">{errors.gender}</p>}
        </div>
        
        {/* Music Preferences */}
        <div>
          <label className="block text-sm font-medium mb-2">Music Preferences</label>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="pop"
                name="musicPreference"
                value="pop"
                checked={formValues.musicPreference.includes('pop')}
                onChange={handleChange}
                className="h-4 w-4 text-music-purple border-gray-600 focus:ring-music-purple"
              />
              <label htmlFor="pop" className="ml-2">Pop</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rnb"
                name="musicPreference"
                value="rnb"
                checked={formValues.musicPreference.includes('rnb')}
                onChange={handleChange}
                className="h-4 w-4 text-music-purple border-gray-600 focus:ring-music-purple"
              />
              <label htmlFor="rnb" className="ml-2">R&B</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rock"
                name="musicPreference"
                value="rock"
                checked={formValues.musicPreference.includes('rock')}
                onChange={handleChange}
                className="h-4 w-4 text-music-purple border-gray-600 focus:ring-music-purple"
              />
              <label htmlFor="rock" className="ml-2">Rock</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="kpop"
                name="musicPreference"
                value="kpop"
                checked={formValues.musicPreference.includes('kpop')}
                onChange={handleChange}
                className="h-4 w-4 text-music-purple border-gray-600 focus:ring-music-purple"
              />
              <label htmlFor="kpop" className="ml-2">K-Pop</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="jazz"
                name="musicPreference"
                value="jazz"
                checked={formValues.musicPreference.includes('jazz')}
                onChange={handleChange}
                className="h-4 w-4 text-music-purple border-gray-600 focus:ring-music-purple"
              />
              <label htmlFor="jazz" className="ml-2">Jazz</label>
            </div>
          </div>
          {errors.musicPreference && <p className="error-message">{errors.musicPreference}</p>}
        </div>
        
        {/* Terms and Conditions */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={formValues.terms}
            onChange={handleChange}
            className="h-4 w-4 text-music-purple border-gray-600 focus:ring-music-purple"
          />
          <label htmlFor="terms" className="ml-2 text-sm">
            I agree to the <a href="#" className="text-music-purple hover:underline">Terms and Conditions</a>
          </label>
        </div>
        {errors.terms && <p className="error-message">{errors.terms}</p>}
        
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-music-purple hover:bg-music-darkPurple text-white font-medium py-3 px-4 rounded-lg transition-colors"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
