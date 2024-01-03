import { useParams } from "react-router-dom"

export default function MoviePage(){


    let { movieID } = useParams();

    return(
        <>
         <p>{movieID}</p>
        </>
    )
}