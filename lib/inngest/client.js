import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "Finnexus", // Unique app ID
  name: "An AI powered Finance Management Platform",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});