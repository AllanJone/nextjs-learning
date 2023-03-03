import Image from "next/image";
import { Movie } from "./types/Movie"

interface MovieDetailProps {
    movie: Movie;
}

export default function MovieDetail({ movie }: MovieDetailProps) {
    const base_url = process.env.TMDB_IMAGE_BASE_URL ?? 'https://image.tmdb.org/t/p/original';
    const backdrop_path = movie.backdrop_path ? (base_url + movie.backdrop_path) : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';

    return (
        <div>
            <div>
                <h2 className="text-2xl font-bold">{movie.title}</h2>
                <h2 className="text-lg">{movie.release_date}</h2>
                <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded-md">Rating: {movie.vote_average}🌟</h2>
                <Image
                    className="my-12 w-full"
                    src={backdrop_path}
                    width={1000}
                    height={1000}
                    alt={movie.title}
                    priority
                />
                <p className="text-gray-600">{movie.overview}</p>
            </div>
        </div>
    );
}