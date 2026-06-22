#!/usr/bin/env node
// Generates a cryptographically secure API key (shared secret) for the
// WeLoad website <-> CRM webhook integration.
//
// Usage:
//   node scripts/gen-api-key.mjs
//
// The SAME value must go in two places (see README/notes):
//   - website  .env.local -> CRM_API_KEY
//   - CRM       .env.local -> WELOAD_WEBHOOK_SECRET

import { randomBytes } from "node:crypto";

// 48 bytes -> 64 url-safe base64 characters. Plenty of entropy.
const key = randomBytes(48).toString("base64url");

console.log("\n  Generated API key (shared secret):\n");
console.log("  " + key + "\n");
console.log("  Put this SAME value in BOTH apps:");
console.log("    website .env.local  ->  CRM_API_KEY=" + key);
console.log("    CRM     .env.local  ->  WELOAD_WEBHOOK_SECRET=" + key);
console.log("\n  Keep it secret. Never commit it to git.\n");
