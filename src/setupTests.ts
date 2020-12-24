import '@testing-library/jest-dom/extend-expect';
import 'mutationobserver-shim';

global.MutationObserver = window.MutationObserver;

jest.mock('colorthief', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => {})
}));

jest.mock('browser-image-compression', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => {})
}));

jest.mock('axios', () => ({
  get: () => Promise.resolve({ data: {} }),
  post: () => Promise.resolve({ data: {} }),
  put: () => Promise.resolve({ data: {} }),
  delete: () => Promise.resolve({ data: {} })
}));
