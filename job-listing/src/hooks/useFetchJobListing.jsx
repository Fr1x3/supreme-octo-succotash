//  declare variables isloading, error and data
// create a function that initializes the states above 
// fetch data from json file and give the appropriate response
// return the response above in the function

import { useEffect, useState } from "react";

const url = '../data/data.json'

function useFetchJobListing(){
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData(){
        setIsLoading(true);

        fetch(url)
        .then( response => {
            setData(response);
        })
        .catch( error => {
            setError(" Failed to load the job listing");
            console.log(error);
        })
        .finally(
            setIsLoading(false)
        )
    }

    return { isloading, error, data}    
}

export default useFetchJobListing;