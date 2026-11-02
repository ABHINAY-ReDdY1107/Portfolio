import '@testing-library/jest-dom';

// Mock window.scrollTo
window.scrollTo = jest.fn();

// Mock Element.prototype.scrollIntoView
window.HTMLElement.prototype.scrollIntoView = jest.fn();

// Mock window.matchMedia for JSDOM
window.matchMedia = window.matchMedia || function (query) {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  };
};

// Mock IntersectionObserver for JSDOM
class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {
    return null;
  }
  unobserve() {
    return null;
  }
  disconnect() {
    return null;
  }
}
window.IntersectionObserver = window.IntersectionObserver || MockIntersectionObserver;
