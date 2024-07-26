import { useEffect, useState } from "react"
import { getReviews } from "../../getMovies/getMovies"
import { useParams,  } from "react-router-dom"
const MovieReviews = () => {
  const {movieId} = useParams()
  const [reviews, setReviews] = useState({results: []})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(()=>{

    const getReviewsById = async(id) =>{

      try {
        const data = await getReviews(id)
        setReviews(data)
      } catch (error) {
        setError(error)
      } finally{
        setLoading(false)
      }
    }

    if (movieId) getReviewsById(movieId)
  },[movieId])


  return (
    <>
    {loading && <p>Loading...</p>}
    {reviews.results.length > 0 && <ul>
      {reviews.results.map(review =>
        <div key={review.id}>
          <b>Author: {review.author}</b>
          <p>Author: {review.content}</p>
        </div>
      )}
    </ul>}
    </>
  )
}

export default MovieReviews