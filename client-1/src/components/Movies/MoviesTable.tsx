import {
  Badge,
  Center,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FC } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { Movie } from "../../hooks/useMovies";

type MoviesTableProps = {
  movies: Movie[];
};

export const MoviesTable: FC<MoviesTableProps> = ({ movies }) => {
  return (
    <TableContainer mt={4}>
      <Table>
        <Thead>
          <Th>Titre primaire</Th>
          <Th
            display={{
              base: "none",
              md: "table-cell",
            }}
          >
            Titre original
          </Th>
          <Th>Année</Th>
          <Th>Genres</Th>
          <Th>Ajouter au panier</Th>
        </Thead>
        <Tbody>
          {movies.map((movie) => {
            const emptyGenres =
              movie.genres === undefined || movie.genres?.length === 0;

            const noEndYear = movie.endYear === null;

            return (
              <Tr key={movie.id}>
                <Td maxWidth="300px">
                  <Text
                    whiteSpace="normal"
                    wordBreak="break-all"
                    overflowWrap="break-word"
                  >
                    {movie.primaryTitle}
                  </Text>
                </Td>
                <Td
                  maxWidth="300px"
                  display={{
                    base: "none",
                    md: "table-cell",
                  }}
                >
                  <Text
                    whiteSpace="normal"
                    wordBreak="break-all"
                    overflowWrap="break-word"
                  >
                    {movie.originalTitle}
                  </Text>
                </Td>
                <Td>
                  <Text>
                    {movie.startYear}
                    {!noEndYear && ` - ${movie.endYear}`}
                  </Text>
                </Td>
                <Td>
                  <Stack direction="row" flexWrap="wrap">
                    {emptyGenres && <Badge>Aucun</Badge>}
                    {!emptyGenres &&
                      movie.genres?.map((genre) => {
                        return <Badge colorScheme="blue">{genre}</Badge>;
                      })}
                  </Stack>
                </Td>
                <Td>
                  <Center>
                    <MdAddShoppingCart size="24px" />
                  </Center>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
