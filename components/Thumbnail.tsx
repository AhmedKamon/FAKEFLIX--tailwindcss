import {Movie} from '../typings'

interface Props {
    movie: Movie
}

function Thumbnail({movie}:Props) {
  return (
    <div>Thumbnail</div>
  )
}

export default Thumbnail