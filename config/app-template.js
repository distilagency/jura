import { HOST, PORT, ENV } from './env';

// GraphQL
export const ROOT_API = 'http://localhost:3000/api';

// General
export const isProduction = ENV === 'production';
export const isDebug = ENV === 'development';
export const isClient = typeof window !== 'undefined';
export const baseURL = `http://${HOST}:${PORT}`;

// Redis
export const REDIS_PREFIX = 'jura-'; // change me to your project name, for example: 'jura-'

// Google Analytics
// Replace with 'UA-########-#' or similar to enable tracking
export const trackingID = null;
