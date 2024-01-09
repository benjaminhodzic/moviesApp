export async function fetchMovie(receivedID){

    const inception = 'tt1375666';
    const squidGame = 'tt10919420'

    if (!receivedID) return;

    const id = receivedID;
     
    const response = await fetch(`https://moviesdatabase.p.rapidapi.com/titles/${id}?info=base_info`,
    {
        method: 'GET',
        headers: {
        'X-RapidAPI-Key': '9b7924a126msh32d1539dac2ed65p158020jsn3314d79606f2',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    });

    if (!response.ok) {
        
        const error = new Error('An error occured!');
        error.code = response.status;
        error.info = await response.json();
        console.error(response.info);
        throw error;
    }

    const movieData = await response.json();
    //return data;
    //const copyValue = JSON.parse(JSON.stringify(dataToCopy.results));

    /*
    let getRatingValue = await fetchRating(id);
    const zaFinalReturn = {...movieData.results, ...getRatingValue.results};
    return zaFinalReturn;
    */

    const zaFinalReturn = {...movieData.results};
    console.log(zaFinalReturn);
    return movieData;

    //updateData(copyValue);
    //console.log(copyValue);
    //console.log(copyValue.id === data.id);
    //setTimeout(3000);
    
  }

export async function fetchRating(id){
    const response = await fetch(`https://moviesdatabase.p.rapidapi.com/titles/${id}/ratings`,
    {
        method: 'GET',
        headers: {
        'X-RapidAPI-Key': '9b7924a126msh32d1539dac2ed65p158020jsn3314d79606f2',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    });

    if (!response.ok) {
        const error = new Error('An error occured!');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const dataToCopy = await response.json();
    const copyValue = JSON.parse(JSON.stringify(dataToCopy.results));
    return dataToCopy;
    //updateData(copyValue);
    //console.log(copyValue);
    //console.log(copyValue.id === data.id);
    //setTimeout(3000);
    
  }

export async function fetchForHomePage(){
    console.log('poziv');
    const numberOfPages = 3;
    let moviesCollection = [];
    for (let pageNum = 1; pageNum < numberOfPages+1; pageNum++) {
        const url = `https://moviesdatabase.p.rapidapi.com/titles?list=top_rated_english_250&page=${pageNum}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '9b7924a126msh32d1539dac2ed65p158020jsn3314d79606f2',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };

        
        const response = await fetch(url, options);
        const result = await response.json();
        const results = result.results;
        //console.log({...moviesCollection});
        //moviesCollection = [...moviesCollection, result];
        results.forEach(movie => {
            moviesCollection.push(movie);
        })
        
    }
    //console.log(moviesCollection);
    return moviesCollection;
}