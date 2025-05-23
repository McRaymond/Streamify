import MovieCard from "@/components/ui/movie-card"

interface Props {
  title: string
}

export default function MovieCarousel({ title }: Props) {
  const placeholderMovies = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    title: `Movie ${i + 1}`,
    image: "/vercel.svg",
  }))

  return (
    <section className="px-6">
      <h2 className="text-2xl font-bold text-purple-300 mb-4">{title}</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {placeholderMovies.map((movie) => (
          <MovieCard key={movie.id} title={movie.title} image={movie.image} />
        ))}
      </div>
    </section>
  )
}

