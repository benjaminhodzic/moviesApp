import { useEffect, useState } from 'react'
import './App.css'
import { Link, Navigate, useLoaderData, useNavigation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchMovie } from './util/http';

function MovieSmallCart({props}) {

  /*
  const { data, isPending, isError, error, isSuccess } = useQuery({
    queryKey: ['movie', id],
    queryFn: fetchMovie
  });

  if (isPending) {
    //return <p>Loading...</p>
    return (
      <div className='flex  justify-center'>
        <div className="box-border p-4  border-2 bg-white rounded-lg">
          <div className='h-50 w-32'>Loading...</div>
          </div>
      </div>
    )
  }

  */


  const received = props;





  const mouseDownHandler = ( event ) => {
    if( event.button === 0 ) {
      //navigate(`/titles/${received.id}`);
      console.log('left click');
      window.history.replaceState(null, "received.originalTitleText.text", `/titles/${received.id}`)
      // LOGIKA ZA MODUL PANEL
    }

    if( event.button === 1 ) {
      //navigate(`/titles/${received.id}`);
      console.log('middle click');
      const url = window.location.origin + `/titles/${received.id}`;
      window.open(url, "_blank", "noreferrer");
    }
  }

  //received.averageRating

  return (
    <>
      
      <div className='flex-initial w-40 h-66'>
        <div onMouseUp={mouseDownHandler} className="box-border p-4 border-2 bg-gray-100 rounded-lg hover:bg-blue-200">
          
          <div className='bg-red-500 h-48 w-32'>
            <img className='h-full object-cover rounded-lg ' src={received.primaryImage.url} alt={received.primaryImage.caption.plainText} />
          </div>

          <p className="text-center font-sans font-thin pl-2 truncate " >{received.originalTitleText.text}</p>
          
          <div className='flex justify-center' key='footer'>
            <h1 className='pr-2'>{received.releaseYear.year}</h1>
            <p>|</p>
            <div className="flex items-end pl-2" key='rating'>
              <svg class="w-4 h-4 text-yellow-300 me-1 pb-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <p class="ms-2 text-sm font-bold text-gray-900 dark:text-white">{'5.5'}</p>
            </div>
          </div>       
        </div>
      </div>
  
    </>
  )
}

export default MovieSmallCart;
