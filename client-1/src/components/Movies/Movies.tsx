import { Skeleton, Stack } from "@chakra-ui/react";
import { useMovies } from "../../hooks/useMovies";
import { MoviesTable } from "./MoviesTable";

export const Movies = () => {
  const { data, isLoading, error } = useMovies();

  if (isLoading) {
    return (
      <Stack>
        {Array.from({ length: 10 }).map((_, index) => {
          return <Skeleton key={index} width="100%" height="50px" />;
        })}
      </Stack>
    );
  }

  if (error || !data) {
    return <div>Une erreur est survenue</div>;
  }

  return <MoviesTable movies={data} />;
};
