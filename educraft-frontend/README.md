# **EduCraft LMS – A Modern Learning Management System**
EduCraft-LMS is a web-based platform designed to simplify online teaching and learning through an intuitive and engaging interface. Built with Frappe on the backend and React on the frontend, it ensures seamless performance, flexibility, and scalability. The system supports course creation, lesson delivery (via text, videos, or external resources), quizzes, and progress tracking. With its modern design and user-focused features, EduCraft-LMS empowers both educators and learners to achieve better outcomes in digital education.

<ins> </ins>

## **Database Schema**
<img width="1842" height="1872" alt="Educraft-DB drawio" src="https://github.com/user-attachments/assets/237c5dd5-aa56-4759-bcae-6220fc44c670" />


## **Design Patterns & Principles for Educraft-LMS**
1. Model–Controller Separation (Frappe Doctypes)

Each domain entity (Course, Lesson, Enrollment, User, Assessment, etc.) is defined as a Doctype in Frappe.

Business logic is encapsulated in Controller methods (Python files attached to Doctypes).

This ensures separation between data schema (models) and business rules (controllers).

2. Service Layer Pattern

Instead of putting all logic in controllers, create Service modules for core features (e.g., course enrollment, lesson tracking, assessments).

Services coordinate multiple Doctypes and make the logic reusable across APIs, background jobs, and frontend calls.

Example: course_service.py → handles course creation, enrollment rules, and certificate issuance.

3. API Layer with Frappe REST

Expose clean REST endpoints (via Frappe’s whitelisted methods).

Follow consistent naming conventions like:

api/educraft/course/enroll

api/educraft/lesson/complete

Return structured JSON responses that React can consume easily.

4. Frontend State Management (React + Context/Redux)

React handles UI, while Frappe serves as the backend API.

Context API (or Redux if large scale) manages global states like:

User authentication

Enrolled courses

Progress tracking

Ensures loose coupling between backend and frontend.

5. Data Transfer Objects (DTOs) → Pydantic Alternative

Frappe doesn’t use Pydantic, but you can mimic DTOs:

Validate API request payloads in Frappe controllers.

Define Response Schemas (dicts with consistent structure).

This keeps frontend–backend contracts clear and predictable.

6. Middleware (Frappe Hooks + React Interceptors)

Frappe Hooks:

Authentication & Permissions

Request Logging

Error Tracking

React Axios Interceptors:

Attach JWT/session tokens automatically

Handle expired sessions & redirect to login

Global error handling on API calls

7. Error Handling

Backend (Frappe):

Centralized exception handling with custom error classes.

Standard response format:

{
  "success": false,
  "error_code": "COURSE_NOT_FOUND",
  "message": "The requested course does not exist."
}


Frontend (React):

Show friendly error messages (snackbar/toast).

Retry mechanisms for network issues.

8. Event-Driven Extensions

Use Frappe Events for background tasks like:

Sending course completion certificates

Sending reminders for incomplete lessons

Keeps business logic decoupled from user requests.

9. Design Principles Applied

Single Responsibility Principle (SRP): Each service/module handles one responsibility.

Dependency Inversion: Frontend depends only on APIs, not internal Frappe logic.

Consistency: Standard request/response structures across all endpoints.

Loose Coupling: React consumes APIs without depending on Frappe internals.
