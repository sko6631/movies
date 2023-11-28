import { z } from "zod";
import { movieSchema, moviesResponseSchema } from "../schemas/movie";
import { useQuery } from "@tanstack/react-query";

export type Movie = z.infer<typeof movieSchema>;

export const useMovies = () => {
  return useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const response = await fetch("/api/articles?limit=25").then((res) =>
        res.json()
      );

      return moviesResponseSchema.parse(response);
    },
  });
};
