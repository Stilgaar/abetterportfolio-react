import axios from 'axios';
import { useState } from 'react';

const useSubmit = (url) => {

    const [data, setData] = useState({})
    const [resMsg, setResMsg] = useState()

    const handleSubmit = e => {

        e.preventDefault();
        e.target.reset();

        axios.post(url, data)
            .then(res => setResMsg(res.data))
            .then(() => setData({}))
            .catch((err) => console.log(err))
    }

    const handleChange = e => {
        e.persist()
        setData(data => ({ ...data, [e.target.name]: e.target.value }))
    }

    return [data, handleChange, handleSubmit, resMsg, setResMsg]
}

export default useSubmit;