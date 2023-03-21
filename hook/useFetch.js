import { useState, useEffect } from "react";
import axios from "axios";
const RAPID_API_KEY = process.env.RAPID_API_KEY;
console.log(RAPID_API_KEY)

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
            'X-RapidAPI-Key': '222b794391msh4e31abe3ef7c654p17f0bfjsn58e34d73ee70',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false)
        } catch (error) {
            setError(error)
            alert('There is an error')
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    const refetch = () => {
        setIsLoading(true)
        fetchData();
    }
    return { data, isLoading, error, refetch };
}

export default useFetch;