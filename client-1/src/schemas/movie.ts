import { z } from "zod";

export const movieSchema = z.object({
  id: z.number(),
  tconst: z.string(),
  titleType: z.string(),
  primaryTitle: z.string(),
  originalTitle: z.string(),
  startYear: z.string(),
  endYear: z.string().transform((value) => (value === "N" ? null : value)),
  runtimeMinutes: z
    .string()
    .transform((value) => (value === "N" ? null : value))
    .transform((value) => Number(value)),
  genres: z
    .string()
    .transform((value) => (value === "N" ? null : value))
    .transform((value) => value?.split(",")),
});

export const moviesSchema = z.array(movieSchema);

export const moviesResponseSchema = moviesSchema;
