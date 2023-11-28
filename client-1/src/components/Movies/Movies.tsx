import { Center, Skeleton, Spinner, Stack } from "@chakra-ui/react";
import { useMovies } from "../../hooks/useMovies";
import { MoviesTable } from "./MoviesTable";
import { InView } from "react-intersection-observer";

export const Movies = () => {
  const { data, isLoading, error, fetchNextPage } = useMovies();

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

  return (
    <>
      <MoviesTable movies={data.pages.flat()} />
      <InView
        onChange={(inView) => {
          if (inView) fetchNextPage();
        }}
      >
        <Center py={4}>
          <Spinner />
        </Center>
      </InView>
    </>
  );
};
