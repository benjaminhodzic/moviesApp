import { useQuery } from "@tanstack/react-query";
import MovieSmallCart from "./MovieSmallCart";
import { fetchMovie } from "./util/http";


export default function TestRoute(){

    const { data, isPending, isError, error, isSuccess } = useQuery({
        queryKey: ['movie'],
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

      console.log(data);
    
      return (
          <>
              <div></div>
          </>
      );
};