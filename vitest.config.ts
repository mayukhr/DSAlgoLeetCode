import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: [
      "problems/**/*.test.{ts,js}",
      "data-structures/**/*.test.{ts,js}",
    ],
    environment: "node",
  },
});
