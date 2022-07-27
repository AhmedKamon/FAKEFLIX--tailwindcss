import Image from "next/image"
import { useEffect, useState } from "react"
import { Movie } from "../typings"

interface Props {
  netflixOriginals : Movie[]
}
function Banner({netflixOriginals}:Props  ) {
  const [movie,setMovie] = useState<Movie | null>(null)
  console.log(movie)

useEffect(() =>{
 setMovie(netflixOriginals[ Math.floor(Math.random() * netflixOriginals.length ) ]  )
},[netflixOriginals])

  return (
    <div>
        <div>
            {/* <Image src={``} /> */}
        </div>
    </div>
  )
}

export default Banner