Here’s the updated README file in a more concise format:

---

# Bluebash Micro-Frontend Application

## Overview
This project demonstrates a **micro-frontend architecture** using **Webpack Module Federation**. It integrates multiple **micro-frontends** (Chat and Email applications) into a **host application** while sharing a common design system. Each micro-frontend is independently deployable.

## Tools and Frameworks Used

- **React 18**: For building user interfaces.
- **Webpack 5 with Module Federation**: For sharing and loading micro-frontends.
- **React Router v6**: For navigation.
- **TailwindCSS**: For utility-first styling.
- **Babel, ESLint, Prettier**: For code transformation and quality.

## Setting Up and Running the Application

### Prerequisites
- **Node.js (v16 or higher)**
- **npm (v7 or higher)**

### Installation

1. **Clone the repositories**:
    ```bash
    git clone https://github.com/Vishalsingh061/Host-app-MICROFRONTEND.git
    git clone https://github.com/Vishalsingh061/Chat-app-MF.git
    git clone https://github.com/Vishalsingh061/email-app-MF.git
    ```

2. **Install dependencies**:
    ```bash
    cd host-app && npm install
    cd ../chat-app && npm install
    cd ../email-app && npm install
    ```

### Running the Application

- **Start all applications**:
    ```bash
    npm start
    ```

- **Start individual applications**:
    - Host: `localhost:3000`
    - Chat: `localhost:3001`
    - Email: `localhost:3002`

## Architectural Decisions

- **Module Federation**: Chosen for runtime integration, shared dependencies, code splitting, lazy loading, and independent deployment.
- **Component Library**: Centralized design system for consistent UI, reduced duplication, and easier maintenance.

### Trade-offs Considered

- **Module Federation vs Single-SPA**: Module Federation was chosen for better dependency sharing and simpler configuration.
- **Custom Components vs UI Libraries**: Custom components provide full control over design, smaller bundle size, and are tailored to the project.
- **State Management**: The event bus was selected for loose coupling between applications and simpler state management.

## Performance Considerations

### Optimizations
- Code splitting
- Lazy loading of micro-frontends
- Shared dependencies
- TailwindCSS for CSS optimization

### Monitoring
- Performance tracking
- Error boundary implementation
- Loading state management

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to your fork
5. Open a pull request to the main repository
