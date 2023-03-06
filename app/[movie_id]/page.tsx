import { Movie } from "../types/Movie";
import MovieDetail from "../MovieDetail";

// export async function generateStaticParams() {
//   const data = await fetch(`${process.env.API_BASE_URL}movie/popular?api_key=${process.env.API_KEY}`)
//   const res = await data.json()

//   return res.results.map((movie: Movie) => (
//     {
//       movie_id: movie.id.toString()
//     }
//   ));
// }

export default async function MovieDetailPage({
  params,
  searchParams,
}: {
  params: { movie_id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { movie_id } = params;
  const data = await fetch(`${process.env.API_BASE_URL}movie/${movie_id}?api_key=${process.env.API_KEY}`)
  const movie: Movie = await data.json()
  return (
    <MovieDetail movie={movie} />
  );
}