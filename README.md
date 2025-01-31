# Bluebash Micro-Frontend Application

## Overview
This project demonstrates a **micro-frontend architecture** using **Webpack Module Federation**. It consists of a **host application** that integrates multiple **micro-frontends** (Chat and Email applications). The micro-frontends are independently deployable, but they share a common design system.

## Tools and Frameworks Used

- **React 18**: JavaScript library for building user interfaces.
- **Webpack 5 with Module Federation**: Allows sharing and loading of micro-frontends.
- **React Router v6**: For handling navigation.
- **TailwindCSS**: Utility-first CSS framework for consistent styling.
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

2. **Install dependencies** for all applications:
    ```bash
    cd host-app && npm install
    cd ../chat-app && npm install
    cd ../email-app && npm install
    ```

### Running the Application

- **Start all applications** using:
    ```bash
    npm start
    ```

- **Start individual applications**:
    - Host: `localhost:3000`
    - Chat: `localhost:3001`
    - Email: `localhost:3002`

## Key Architectural Decisions

- **Module Federation**: Chosen to share code and load micro-frontends at runtime. It allows independent deployment and easy updates.
- **Event Bus**: Used for communication between micro-frontends. It’s lightweight, easy to implement, and reduces dependencies.
- **TailwindCSS and Custom Components**: Provides flexibility and keeps the bundle size smaller compared to using pre-built UI libraries.
