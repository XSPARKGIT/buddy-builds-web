import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ErrorBoundary from './components/ErrorBoundary'

console.log('React application is starting to load...');

const root = document.getElementById("root")
if (!root) throw new Error("Root element not found")

try {
  createRoot(root).render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>
  );
  console.log('React application mounted successfully');
} catch (error) {
  console.error('Failed to mount React application:', error);
}
