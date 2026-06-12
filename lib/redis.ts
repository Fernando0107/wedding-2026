import { Redis } from '@upstash/redis';

// Initialize Redis client using environment variables
// Upstash Redis fromEnv() looks for UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN
// But Vercel integration provides UPSTASH_REDIS_KV_REST_API_URL and UPSTASH_REDIS_KV_REST_API_TOKEN
// So we'll use the explicit constructor with the available variables
export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || '',
});
