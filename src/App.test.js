import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

// Mock react-router-dom to handle React Router v7 ESM with Jest in CRA
jest.mock('react-router-dom', () => ({
  HashRouter: ({ children }) => <div data-testid="router">{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ element }) => <div>{element}</div>,
  Link: ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>,
  NavLink: ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>,
  Outlet: () => <div data-testid="outlet" />,
  useLocation: () => ({ pathname: '/', hash: '' }),
}));

import App from './App';
import Home from './pages/Home';
import Projects from './pages/Projects';

test('renders portfolio title and brand', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/AR/i);
  expect(brandElements.length).toBeGreaterThan(0);
});

test('renders Home page elements, hero and sections', () => {
  render(<Home />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Abhinay Reddy/i);
  expect(screen.getByText(/Core Focus & Engineering/i)).toBeInTheDocument();
  expect(screen.getByText(/Portfolio Wallet/i)).toBeInTheDocument();
  expect(screen.getByText(/About Abhinay/i)).toBeInTheDocument();
  expect(screen.getByText(/My Journey/i)).toBeInTheDocument();
  expect(screen.getByText(/Frequently Asked Questions/i)).toBeInTheDocument();
  expect(screen.getByText(/Let's Build Together/i)).toBeInTheDocument();
});

test('renders Projects page and supports search filtering', () => {
  render(<Projects />);
  expect(screen.getByText(/Selected Projects/i)).toBeInTheDocument();

  // Search input
  const searchInput = screen.getByLabelText(/Search projects/i);
  expect(searchInput).toBeInTheDocument();

  // Type in search query
  fireEvent.change(searchInput, { target: { value: 'Hira' } });
  expect(screen.getByText(/Hira Fragrances/i)).toBeInTheDocument();

  // Category filter
  const webPill = screen.getByRole('tab', { name: 'Web' });
  fireEvent.click(webPill);
  expect(screen.getByText(/Hira Fragrances/i)).toBeInTheDocument();
});
