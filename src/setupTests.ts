import '@testing-library/jest-dom';

// Polyfill for RR6 Data Router tests in JSDOM
// Node 18+ has these, but JSDOM environment might not expose them to global
// We use the ones from Node's global if they exist, otherwise class mocks
global.Request = global.Request || class Request {};
global.Response = global.Response || class Response {};
global.fetch = global.fetch || jest.fn();
global.Headers = global.Headers || class Headers {};
