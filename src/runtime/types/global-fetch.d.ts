declare global {
  // Nuxt injects `$fetch` on globalThis at runtime.
  // We declare it here so library source can use it with proper types.
  interface GlobalThis {
    $fetch: typeof import('ofetch').$fetch;
  }
}

export {};
