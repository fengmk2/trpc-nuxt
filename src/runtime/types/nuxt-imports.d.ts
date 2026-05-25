declare module '#imports' {
  export type H3Event = import('h3').H3Event;
  export type { AsyncData, AsyncDataOptions } from 'nuxt/app';
  export const useAsyncData: typeof import('nuxt/app').useAsyncData;
  export const useRequestHeaders: typeof import('nuxt/app').useRequestHeaders;
  export const eventHandler: typeof import('h3').eventHandler;
  export const getRequestURL: typeof import('h3').getRequestURL;
  export const getRequestWebStream: typeof import('h3').getRequestWebStream;
}
