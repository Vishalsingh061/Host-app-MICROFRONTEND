import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Add global styles
const style = document.createElement('style');
style.textContent = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
`;
document.head.appendChild(style);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);