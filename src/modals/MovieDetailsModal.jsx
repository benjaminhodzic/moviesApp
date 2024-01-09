import { useQueries, useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchMovie } from '../util/http';

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(188, 170, 83, 0.9)',
    padding: '30% 40% 10% 40%',
    zIndex: 1000,
    'border-radius': '20px',
}

const OVERLAY_STYLES = {
    position: 'fixed', 
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.5)',
    zIndex: 1000
}

export default function MovieDetailsModal({activityState, changeState, movieID}) {
    if (!activityState) return null;

    async function fetchMovieHandler(){
        return await fetchMovie(movieID);
        //SKONTAJ KAKO DA PASSAŠ PARAMETRE fetchMovie FUNKCIJI
    }

    const { data, isPending, isError, error, isSuccess, status } = useQuery({
        queryKey: ['movie', movieID],
        queryFn: fetchMovie
      });
    
    console.log('status: ' + status);
    if (isPending) {
    //return <p>Loading...</p>
    return (
        <>
            <div style={OVERLAY_STYLES}></div>
        
            <div style={MODAL_STYLES}>
                <div className='flex  justify-center'>
                <div className="box-border p-4  border-2 bg-white rounded-lg">
                    <div className='h-50 w-32'>Loading...</div>
                    </div>
                </div>
            </div>
        </>
    )
    }

    if(isError) {
        <>
            <div style={OVERLAY_STYLES}></div>

            <div style={MODAL_STYLES}>
                error
            </div>
        </>
    }


    return (
        <>
            <div style={OVERLAY_STYLES}></div>

            <div style={MODAL_STYLES}>
                <button onClick={() => {changeState(false)}}>X</button>
                {data.results.id}
            </div>
        </>
    )
}
