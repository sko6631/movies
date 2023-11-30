import { z } from "zod";
import { movieSchema, moviesResponseSchema } from "../schemas/movie";
import { useInfiniteQuery } from "@tanstack/react-query";

export type Movie = z.infer<typeof movieSchema>;

export const useMovies = () => {
  return useInfiniteQuery({
    queryKey: ["movies"],
    queryFn: async ({ pageParam }) => {
      const response = await fetch(
        `/api/articles?limit=25&offset=${pageParam}`
      ).then((res) => res.json());

      return moviesResponseSchema.parse(response);
    },
    initialPageParam: 0,
    getNextPageParam: (_, pages) => {
      return pages.length * 25;
    },
  });
};
