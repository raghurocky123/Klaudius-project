# Klaudiusproject

React Native Application with Login and Signup Functionalities written in Typescript

# Loom video link of the demo video

https://www.loom.com/share/7412c5a0f6434689b2c99ee9c59884ea?sid=0587e839-9c12-4ffc-a0cc-caed1202a73f

# User Authentication App

A React Native authentication app built with Expo Router, featuring a complete user authentication system with persistent login state and nice UI design.

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
Navigation to signup screen

# 2. Signup Screen

Name, email, and password input fields
Navigation back to login screen

# 3. Home Screen (Tab 1)

Display of current user's name and email
Quick logout functionality

# 4. Profile Screen (Tab 2)

Detailed user profile information
Account details with icons
Logout functionality

# Prerequisites

Node.js (v18 or later)
npm

# Installation

1. Clone or download the project
   git clone https://github.com/raghurocky123/Klaudius-project.git
   cd Klaudius-project

2. Install dependencies
   npm install

3. Start the development server
   npm run dev

4. Open the app
   Web: Open the provided localhost URL
   Mobile: Use Expo Go app to scan the QR code

# Testing Scenarios

1. Signup Flow

   Create a new account with valid information
   Test validation for missing fields
   Test password length requirements
   Try signing up with existing email

2. Persistence
   Log in and close/reopen the app
   Verify user remains logged in
   Test logout functionality
