// lib/movies.ts

export interface Movie {
  id: number
  title: string
  category: string
  image: string
  description: string
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Blade Runner",
    category: "Trending Now",
    image: "/movies/blade.png",
    description: "A blade runner must hunt down and eliminate four replicants who stole a ship in space and have returned to Earth.",
  },
  {
    id: 2,
    title: "Interstellar",
    category: "Trending Now",
    image: "/movies/interstellar.png",
    description: "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
  },
  {
    id: 3,
    title: "Oppenheimer",
    category: "New Releases",
    image: "/movies/oppenheimer.png",
    description: "The story of J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.",
  },
  {
    id: 4,
    title: "The Matrix",
    category: "Watch Again",
    image: "/movies/matrix.png",
    description: "A hacker discovers reality is a simulation and joins a rebellion against its controllers.",
  },
  {
    id: 5,
    title: "The Boys",
    category: "Comedies",
    image: "/movies/boys.png",
    description: "A group of vigilantes sets out to take down corrupt superheroes who abuse their powers.",
  },
  {
    id: 6,
    title: "Inception",
    category: "Action & Adventure",
    image: "/movies/inception.png",
    description: "A skilled thief is given a chance at redemption if he can successfully perform inception: planting an idea into someone's mind.",
  },
  {
    id: 7,
    title: "The Witcher",
    category: "Watch Again",
    image: "/movies/witcher.png",
    description: "A monster hunter struggles to find his place in a world where people often prove more wicked than beasts.",
  },
  {
    id: 8,
    title: "John Wick",
    category: "Action & Adventure",
    image: "/movies/wick.png",
    description: "An ex-hitman comes out of retirement to track down the gangsters that killed his dog and stole his car.",
  },
  {
    id: 9,
    title: "Brooklyn Nine-Nine",
    category: "Comedies",
    image: "/movies/b99.png",
    description: "A fun-loving detective and his quirky precinct navigate crime and chaos in New York City.",
  },
  {
    id: 10,
    title: "Dune",
    category: "New Releases",
    image: "/movies/dune.png",
    description: "A young nobleman must travel to the most dangerous planet in the universe to ensure the future of his family and people.",
  },
]
