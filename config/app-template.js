import { HOST, PORT, ENV } from './env';

// GraphQL
export const ROOT_API = 'http://localhost:3000/api';

// General
export const isProduction = ENV === 'production';
export const isDebug = ENV === 'development';
export const isClient = typeof window !== 'undefined';

// Starward
export const baseURL = `http://${HOST}:${PORT}`;

// Google Analytics
// Replace with 'UA-########-#' or similar to enable tracking
export const trackingID = null;
