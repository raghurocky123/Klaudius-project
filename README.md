# Klaudiusproject

React Native Application with Login and Signup Functionalities written in Typescript

# User Authentication App

A modern React Native authentication app built with Expo Router, featuring a complete user authentication system with persistent login state and nice UI design.

# Core Authentication

Complete Authentication Flow: Login, signup, and logout functionality
React Context API: Global state management for authentication
Persistent Sessions: User remains logged in after app restart using AsyncStorage
Form Validation: Clientside validation with clear error messages

# User Interface

Responsive Layout: Optimized for all screen sizes and orientations
Custom Components: Reusable input fields, buttons, and UI elements
Loading States: Smooth loading indicators and animations
Password Toggle: Eye icon to show/hide password visibility
Tab Navigation: Bottom tab navigation for authenticated users

# Security & Validation

Email Validation: Proper email format checking
Password Requirements: Minimum 6 characters with clear feedback
Input Sanitization: Proper handling of user input
Error Handling: Graceful error states with userfriendly messages

# 1. Login Screen

Email and password input fields
Form validation with error messages
Demo credentials display for easy testing
Navigation to signup screen
Beautiful gradient background with cardbased layout

# 2. Signup Screen

Name, email, and password input fields
Realtime validation feedback
Password strength requirements
Navigation back to login screen
Consistent design with login screen

# 3. Home Screen (Tab 1)

Welcome message with user information
Display of current user's name and email
Quick logout functionality
Clean cardbased information display

# 4. Profile Screen (Tab 2)

Detailed user profile information
Account details with icons
Member since date
Logout functionality
Professional profile card design

# Prerequisites

Node.js (v18 or later)
npm or yarn
Expo CLI (optional, for additional features)

# Installation

1. Clone or download the project
   git clone https://github.com/raghurocky123/Klaudiusproject.git
   cd Klaudiusproject

2. Install dependencies
   npm install

3. Start the development server
   npm run dev

4. Open the app
   Web: Open the provided localhost URL
   Mobile: Use Expo Go app to scan the QR code

# Testing Scenarios

1. Login Flow

   Use demo credentials to test successful login
   Try invalid credentials to test error handling
   Test email format validation

2. Signup Flow

   Create a new account with valid information
   Test validation for missing fields
   Test password length requirements
   Try signing up with existing email

3. Persistence
   Log in and close/reopen the app
   Verify user remains logged in
   Test logout functionality
