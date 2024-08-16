import { z } from 'zod';

export const bookSchema = z.object({
  author: z.string(),
  meetingAt: z.string().datetime(),
  name: z.string(),
  url: z.string().optional(),
})

export type Book = z.infer<typeof bookSchema>
