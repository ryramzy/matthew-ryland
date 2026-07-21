'use server'

import { cookies, headers } from 'next/headers'

// Simple in-memory rate limit store (resets on serverless cold starts)
// While Vercel KV is ideal, this provides robust burst protection per-instance.
const rateLimitStore = new Map<string, { attempts: number; windowStart: number }>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

export async function authenticatePIN(pin: string) {
  const headersList = headers();
  const ip = headersList.get('x-forwarded-for') || 'unknown-ip';

  const now = Date.now();
  const limitRecord = rateLimitStore.get(ip) || { attempts: 0, windowStart: now };

  // Reset window if expired
  if (now - limitRecord.windowStart > WINDOW_MS) {
    limitRecord.attempts = 0;
    limitRecord.windowStart = now;
  }

  // Check limit
  if (limitRecord.attempts >= MAX_ATTEMPTS) {
    return { success: false, error: 'Too many attempts. Please try again in 15 minutes.' };
  }

  limitRecord.attempts += 1;
  rateLimitStore.set(ip, limitRecord);

  // Parse PINs from env (fallback to a test code if undefined)
  let envPins: Record<string, string> = { "000000": "Test Client" };
  try {
    if (process.env.CLIENT_PORTAL_PINS) {
      envPins = JSON.parse(process.env.CLIENT_PORTAL_PINS);
    }
  } catch (e) {
    console.error("Failed to parse CLIENT_PORTAL_PINS", e);
  }

  if (envPins[pin]) {
    // Reset attempts on success
    rateLimitStore.delete(ip);

    // Set strict secure cookie
    cookies().set({
      name: 'vip_portal_auth',
      value: JSON.stringify({ client: envPins[pin], timestamp: now }),
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    });

    return { success: true, clientName: envPins[pin] };
  }

  return { success: false, error: 'Invalid access code.' };
}

export async function logoutPortal() {
  cookies().delete({
    name: 'vip_portal_auth',
    path: '/',
  });
}
