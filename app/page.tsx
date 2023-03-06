import MovieCard from "./MovieCard"
import { Movie } from "./types/Movie"

export default async function Home() {
  const data = await fetch(`${process.env.API_BASE_URL}movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json()
  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid">
        {/* <div> */}
        {
          res.results.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        }
      </div>
    </main>
  )
}
