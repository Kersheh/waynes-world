import '@testing-library/jest-dom/extend-expect';
import 'mutationobserver-shim';

global.MutationObserver = window.MutationObserver;

jest.mock('colorthief', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => {})
}));
