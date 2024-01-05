import { useQuery } from "@tanstack/react-query";
import { fetchForHomePage } from "./util/http";
import { useLoaderData, useNavigation } from "react-router-dom";
import MovieSmallCart from "./MovieSmallCart";


export default function HomePage(){

    let data = useLoaderData();
    let navigation = useNavigation();

    //if (navigation.state === 'idle') {console.log(data)};
    console.log(data);

    let elements = [];

    const smallMovieCard = data.forEach(movieDetails => {
        elements.push(<MovieSmallCart key={movieDetails.id} props={movieDetails} />);
    })

    return(
        <>
            <p>HOME PAGE</p>
            
            <div className="flex flex-1">
            {elements}
            </div>
        </>
    );
}