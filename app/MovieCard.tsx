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
        // <div>
        //     <h1>{props.movie.title}</h1>
        //     <h2>{props.movie.release_date}</h2>
        //     <Link href={`/${props.movie.id}`}>
        //         <Image src={poster_url} alt={props.movie.title} width={800} height={800} />
        //     </Link>
        // </div >

        // <div className="card card-side bg-base-100 shadow-xl">
        //     <figure>
        //         <Link href={`/${props.movie.id}`}>
        //             <Image src={poster_url} alt={props.movie.title} width={250} height={250} />
        //         </Link>
        //     </figure>

        //     <div className="card-body">
        //         <h2 className="card-title">{props.movie.title}</h2>
        //         <p>{props.movie.release_date}</p>
        //         <div className="card-actions justify-end">
        //             <button className="btn btn-primary">Watch</button>
        //         </div>
        //     </div>
        // </div>

        <Link href={`/${props.movie.id}`}>
            <div className="card bg-base-200 hover:bg-base-100 shadow-xl">
                <figure>
                    <Image src={poster_url} alt={props.movie.title} width={500} height={500} priority={true} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title truncate">
                        {props.movie.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className="truncate">If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}