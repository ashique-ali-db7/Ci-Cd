// vitest.setup.ts
import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
// (add any other global mocks or polyfills here if needed)
afterEach(() => {
    cleanup();
  });
  