# Patient Intake Form Application

This is a React-based application designed to collect patient information in a multilingual and user-friendly way on kiosk screens.  The app supports multiple languages (German and English) and provides a step-by-step interface to gather personal and contact information from patients. It also allows users to print a waiting number for further processing.

---

## Features

- **Language Localization**  
  Supports multiple languages using JSON translation files. 

- **Dynamic Routing**  
  Implements client-side routing with `wouter` for navigation between views.

- **State Management**  
  Utilizes Jotai for atomic state management to handle patient data.

- **Modular Design**  
  Components are reusable and self-contained, making the app easy to maintain and extend.

---

## Getting Started

### Prerequisites:

1. Node.js (>=16.0.0)
2. npm or yarn

### Installation:

1. Dependencies:
    ```bash
    npm install
   
2. Run the development server:
   ```bash
    npm run dev

***NOTE:***
This application is specifically designed for kiosk screens and is optimized for devices with fixed dimensions of ****1080 x 1920****. It may not function correctly or provide an ideal user experience on devices with different screen sizes or resolutions.
