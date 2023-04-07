import { useEffect, useState } from 'react'
import axios from 'axios'
// import { RAPID_API_KEY } from '@env'

// const rapidApikey = RAPID_API_KEY

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': 'd0792f78e8msh96b5022a6cb7ab9p1a4490jsn70dcec68c3ce',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
    }

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const resp = await axios.request(options)
            setData(resp.data.data);
            // setIsLoading(false)
        } catch (error) {
            setError(error)
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

    return {
        data, isLoading, error, refetch
    }
}

export default useFetch