import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState()

    useEffect(() => {
        axios.get(url)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }, [url])

    return [data]
}

export default useFetch;

// "http://localhost:5000/getmsg"