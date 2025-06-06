export const collections = ['books'] as const
export type Collection = typeof collections[number]
