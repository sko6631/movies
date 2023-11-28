import { z } from "zod";
import { movieSchema, moviesResponseSchema } from "../schemas/movie";
import { useQuery } from "@tanstack/react-query";
import { moviesData } from "../data/movies";

export type Movie = z.infer<typeof movieSchema>;

export const useMovies = () => {
  return useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      // const response = await fetch("/api/movies").then((res) => res.json());
      return moviesResponseSchema.parse(moviesData);
    },
  });
};
