export async function fetchMovie(){

    const id = 'tt0436992';
     
    const response = await fetch(`https://moviesdatabase.p.rapidapi.com/titles/${id}`,
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

    const movieData = await response.json();
    //return data;
    //const copyValue = JSON.parse(JSON.stringify(dataToCopy.results));
    let getRatingValue = await fetchRating(id);
    const zaFinalReturn = {...movieData.results, ...getRatingValue.results};
    return zaFinalReturn;
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