# CHAPTER 6: SYSTEM IMPLEMENTATION

## 6.1 Introduction
The implementation phase transformed the Waims project management system from a conceptual design into a functional, secure, and scalable web application. This chapter details the technical infrastructure, development stack, and the methodical approach taken to build and deploy the platform. By adopting an Agile, sprint-based methodology, we ensured continuous development and refinement of essential features. This iterative process allowed us to prioritize and deliver a reliable project registry, robust financial and milestone tracking, and secure role-based access control, establishing a strong foundation for long-term accountability and data integrity.

## 6.2 Implementation Overview
The application was deployed in a production-ready Linux environment, selected to provide a stable and secure foundation for the Laravel backend and its associated services.

**Development Methodology:** We organized the project into two-week sprints within an Agile framework. This approach fostered responsiveness, allowing for the continuous integration of feedback on the dashboard UI, financial workflows, and data management interfaces, ensuring the final product was both robust and user-centric.

**Operating System:** The server operates on a Long-Term Support (LTS) version of Linux, chosen for its proven stability, security, and excellent compatibility with the PHP runtime and database systems.

**Technology Stack:**
*   **Frontend:** The user interface is a modern Single-Page Application (SPA) built with **React** and **Inertia.js**. This stack provides a smooth, responsive experience without requiring a separate API. **Tailwind CSS** is used for utility-first styling, ensuring a consistent and maintainable design system.
*   **Backend:** The core business logic, routing, and data management are implemented in **PHP** using the **Laravel 12** framework. Laravel was chosen for its emphasis on clean code, robust security features (authentication, authorization, ORM), and extensive ecosystem.
*   **Database:** The system relies on a high-performance, open-source relational database (like MySQL or PostgreSQL), with **SQLite** used for development and testing. The schema enforces ACID standards to guarantee that all financial records, project budgets, and milestone transactions remain consistent and accurate.
*   **Server/DevOps:** A high-performance web server (e.g., Nginx) handles HTTP requests. We use **Git** for version control, **Composer** for managing PHP dependencies, and **NPM** for JavaScript dependency management. **Vite** is used for compiling frontend assets with hot-module replacement.

## 6.3 Database Implementation
Data integrity is the bedrock of the Waims platform. The database schema was designed with strict foreign key constraints and relationships to maintain a consistent and auditable state across all project-related data.

**Core Tables:**
*   **`users` & `roles`:** These tables manage user identity, secure Bcrypt-hashed credentials, and role-based access control (Admin, Project Manager, Contractor, etc.).
*   **`projects`:** The central table holding all core project data, including title, budget, status, and foreign keys linking to the assigned `manager_id` and `contractor_id`.
*   **`milestones`:** Tracks the distinct phases or payment stages of a project, linked directly to a `project_id`.
*   **`transactions`:** An immutable ledger that archives every financial event (e.g., fund releases), providing a transparent, auditable history linked to projects.
*   **`disputes`:** Captures information related to conflicts or issues raised against a project or milestone.

*[INSERT FIGURE 6.1: Entity-Relationship Diagram (ERD) showing the relationships between Users, Roles, Projects, Milestones, Transactions, and Disputes]*

## 6.4 Interface Implementation
The interface was engineered to translate complex project and financial data into a clean, intuitive, and highly functional user experience, making project oversight accessible and efficient.

*   **The Project Registry Dashboard:** This is the primary landing page (`Dashboard/Projects/index.tsx`) for authenticated users. It provides an at-a-glance overview of all projects, displaying key metrics like financial progress, personnel, status, and total budget.
*   **CRUD Management Pages:** The system includes dedicated interfaces for Creating, Reading, Updating, and Deleting projects and their related entities. These pages (`create.tsx`, `show.tsx`, `edit.tsx`) are powered by React components that interact seamlessly with the Laravel backend via Inertia.
*   **Role-Aware Components:** The UI dynamically adapts based on the logged-in user's role. For example, the "New Project" button is only visible to users with `Admin` or `Moderator` roles, enforcing authorization at the presentation layer.

*[INSERT FIGURE 6.2: Screenshot of the Main Project Registry Dashboard]*
*[INSERT FIGURE 6.3: Screenshot of the Project Details Page showing Milestones and Transactions]*
*[INSERT FIGURE 6.4: Screenshot of the "Create Project" Form]*

## 6.5 Tools Used
The following suite of software was instrumental in the system’s development:
*   **PHP (Laravel Framework):** Serves as the system's core, handling business logic (e.g., calculating `financial_progress_percentage`), database interactions via the Eloquent ORM, and enforcing security policies.
*   **React & Inertia.js (Frontend):** Facilitates the seamless, real-time feel of the application, allowing users to navigate and interact with data without traditional page reloads.
*   **PhpStorm (IDE):** Used for all code development, offering powerful debugging, code intelligence, and integrated version control tools that enhance productivity and maintainability.
*   **Relational Database (SQLite/MySQL):** Vital for enforcing data integrity, ensuring every transaction is properly anchored to a project and that relationships are maintained.
*   **Git:** Essential for managing code changes, tracking feature development, and enabling collaborative workflows within the development team.
*   **Vite:** The modern frontend build tool used to compile JavaScript/TypeScript and CSS assets for production and provide a fast, hot-reloading development server.

## 6.6 Testing and Evaluation
A multi-layered testing approach was applied using the **Pest** testing framework to ensure accuracy in all calculations and robustness in system workflows.

*   **Unit Testing:** We isolated and tested specific backend components, such as the `financialProgressPercentage` computed attribute on the `Project` model, to verify their correctness in isolation.
*   **Feature (Integration) Testing:** We validated end-to-end user workflows. For example, a test would simulate a user submitting the "Create Project" form and assert that a new record is created in the database and the user is redirected correctly.
*   **Browser Testing:** Where necessary, Laravel Dusk could be used to automate browser interactions and confirm that the React components behave as expected from a user's perspective.

| Test Case | Description                                                              | Expected Output                                                              | Result |
| :-------- | :----------------------------------------------------------------------- | :--------------------------------------------------------------------------- | :----- |
| **TC01**  | **Create Project:** A user with admin rights successfully submits a new project form. | A new entry is created in the `projects` table with the correct data.        | PASS   |
| **TC02**  | **Release Funds:** A user records an expenditure for an active project.    | A new record is added to `transactions`, and `total_paid` on the project is updated. | PASS   |
| **TC03**  | **Authentication:** An unauthenticated user attempts to access the dashboard. | The user is redirected to the login page.                                    | PASS   |
| **TC04**  | **Authorization:** A user with a "Contractor" role attempts to view the "New Project" button. | The button is not rendered in the DOM.                                       | PASS   |
| **TC05**  | **Data Validation:** A user submits the "Assign Team" form with an invalid `user_id`. | The system returns a validation error, and no changes are made to the database. | PASS   |

*[INSERT FIGURE 6.5: Chart showing system success rate across user test scenarios]*

## 6.7 Security Implementation
Security was a core design principle, integrated throughout the architecture to protect data and prevent unauthorized access.

*   **Password Hashing:** All user passwords are encrypted using **Bcrypt** by default in Laravel, a strong, slow hashing algorithm that defends against brute-force attacks.
*   **CSRF & XSS Protection:** Laravel’s middleware provides out-of-the-box protection against Cross-Site Request Forgery (CSRF), while Inertia.js inherently discourages Cross-Site Scripting (XSS) by rendering data as text.
*   **Input Sanitization & Validation:** All incoming data is strictly validated on the server-side using Laravel's **Form Requests**. This prevents malformed data and mitigates risks like SQL injection.
*   **Environment Variable Security:** All sensitive credentials, such as database passwords and API keys, are stored in `.env` files and are explicitly excluded from version control via `.gitignore`.
*   **Soft Deletes:** The `Project` model uses soft deletes, ensuring that project records are never permanently lost, which provides an essential audit trail for accountability.

## 6.8 Training and User Support
The system was designed to be highly intuitive, minimizing the need for extensive user training.

*   **Onboarding & UI Cues:** The interface uses clear labels, descriptive placeholders, and a logical layout to guide users. The dashboard serves as a central, easy-to-understand hub for all project activity.
*   **Contextual Error Messages:** Server-side validation errors are automatically propagated to the frontend, where they are displayed next to the relevant form fields, providing clear, immediate feedback to the user.
*   **Role-Based Simplicity:** By hiding irrelevant actions and information based on user roles, the interface is simplified for each user, reducing cognitive load and preventing confusion.

## 6.9 Review and Maintenance
The system is built for longevity, with clear processes for ongoing monitoring, maintenance, and refinement.

*   **Continuous Monitoring:** System logs in `storage/logs/laravel.log` track key application events and errors, enabling developers to diagnose and resolve issues proactively.
*   **Dependency Management:** PHP and JavaScript dependencies are regularly reviewed and updated using `composer update` and `npm update` to apply the latest security patches.
*   **Code Quality & Style:** We enforce a consistent code style using **Laravel Pint** for the backend and **Prettier** for the frontend. This ensures the codebase remains clean, readable, and maintainable over time.
*   **Database Optimization:** As the volume of project data grows, database indexes are reviewed and optimized to ensure query performance remains high.
