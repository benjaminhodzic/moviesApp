import { useQuery } from "@tanstack/react-query";
import { fetchForHomePage } from "./util/http";
import { useLoaderData, useNavigation } from "react-router-dom";
import MovieSmallCart from "./MovieSmallCart";
import MovieDetailsModal from "./modals/MovieDetailsModal";
import { useState } from "react";


export default function HomePage(){

    let data = useLoaderData();
    let navigation = useNavigation();

    const [isOpen, setIsOpen] = useState(false);
    const [currentModalMovie, changeCurrentModalMovie] = useState('tt1375666');
    //PROSLIJEDI currentModalMovie U fetchMovie FUNKCIJU U https.jsx NEKAKOOO!!!!PROXY???


    //if (navigation.state === 'idle') {console.log(data)};
    console.log('HOME PAGE ACTIVE');

    let elements = [];

    const smallMovieCard = data.forEach(movieDetails => {
        elements.push(<MovieSmallCart className="" key={movieDetails.id} props={movieDetails} modalOnOff={setIsOpen} changeCurrentModalMovie={changeCurrentModalMovie} />);
    })

    return(
        <>
            <p>HOME PAGE</p>
            <MovieDetailsModal activityState={isOpen} changeState={setIsOpen} movieID={currentModalMovie}></MovieDetailsModal>
            
            <div className="
            grid justify-center
            sm:grid-cols-3 
            md:grid-cols-4 
            lg:grid-cols-6 
            xl:grid-cols-7  
            2xl:grid-cols-7
            
            ">
            {elements}
            </div>
        </>
    );
}