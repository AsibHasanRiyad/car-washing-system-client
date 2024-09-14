Certainly! Here's the updated `README.md` without the "Usage," "Contributing," "License," and "Contact" sections:

````markdown
<div align="center">
  <h1>CleanCarCo</h1>
</div>

---

## Introduction

CleanCarCo is a user-friendly web application designed to simplify the car wash booking process. This frontend application provides users with easy navigation, a streamlined booking experience, and a comprehensive admin dashboard for managing services, slots, and users.

## Project Description

The CleanCarCo frontend application allows users to explore car wash services, book appointments, and manage their profiles. Administrators can manage services, slots, and users from a dedicated dashboard. The application is built with React and styled using Tailwind CSS.

## Features

### Public Pages

1. **Home Page**

   - **Navigation Menu:** Links to key pages like Services, Booking, Login, and other essential sections.
   - **Hero/Branding Section:** An introductory section with a strong branding message and visuals.
   - **Call-to-Action Button:** Prominent button for booking a service.
   - **Featured Services:** Display of popular services with descriptions and images.
   - **Review Section:**
     - Input field & rating component with a star-based rating system.
     - Post-submission display of the average site rating and last two user reviews.
     - "See All Reviews" button linking to the Reviews page.
     - Black overlay with a login button if the user is not logged in.
   - **Footer:** Links to relevant pages, contact information, and social media links.

2. **User Authentication Pages**

   - **Sign Up Page:** Allows users to create an account with fields for name, email, password, phone number, and address.
   - **Login Page:** Provides secure login functionality with email and password fields.

3. **Services Page**

   - Lists all car wash services with descriptions, prices, and durations.
   - Features search, filter, and sort functionalities.

4. **Service Details Page**

   - Detailed information about selected services.
   - Display of available time slots, with booked slots disabled.
   - Option to select a slot and book the service.

5. **Booking Page**

   - **Left Side:** Displays the selected service and time slot.
   - **Right Side:** Form for submitting user information and a "Pay Now" button for payment processing.
   - **Functionality:** Redirects to AAMARPAY for payment and updates slot status.

6. **Error Pages**
   - Custom 404 page for non-existent routes with navigation options.

### Admin Pages

1. **Admin Dashboard**
   - **Features:** Overview of recent bookings, user management, slot management, and service management.
   - **Service Management:**
     - View and manage services in a table format.
     - Add, update, and delete services with modals and confirmation dialogs.
   - **Slot Management:**
     - Create and manage slots.
     - Update slot status between AVAILABLE and CANCELLED, excluding booked slots.
   - **User Management:**
     - View user bookings, list users, and edit user roles.

### User Pages

1. **User Dashboard**

   - **Features:** Overview of bookings and account information.
   - **Functionality:** Update profiles, manage personal information, and view past and upcoming bookings.

2. **Service Slot Countdown**
   - **Features:** Countdown timer for upcoming bookings displayed in the navbar and booking card.

## Technology Stack

- **Frontend:** React, Tailwind CSS
- **State Management:** Redux
- **APIs:** Custom REST APIs

## Installation Guideline

### Prerequisites

- **Node.js:** Ensure Node.js is installed. Download it from [Node.js official site](https://nodejs.org/).

### Installation Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/AsibHasanRiyad/car-washing-system-client.git
   ```
````

2. **Navigate to the Project Directory:**

   ```bash
   cd car-washing-system-client
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Run the Application Locally:**

   ```bash
   npm start
   ```

5. **Access the Application:**
   - Open your browser and go to `http://localhost:3000`.

```


```
