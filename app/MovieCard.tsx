import { Movie } from "./types/Movie"
import Link from "next/link"
import Image from "next/image"

interface MovieCardProps {
    movie: Movie
}

export default function MovieCard(props: MovieCardProps) {
    const base_url = process.env.TMDB_IMAGE_BASE_URL ?? 'https://image.tmdb.org/t/p/original';
    const poster_url = props.movie.poster_path ? (base_url + props.movie.poster_path) : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';

    return (
        <div>
            <h1>{props.movie.title}</h1>
            <h2>{props.movie.release_date}</h2>
            <Link href={`/${props.movie.id}`}>
                <Image src={poster_url} alt={props.movie.title} width={800} height={800} />
            </Link>
        </div >
    )
}