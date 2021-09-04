import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import {apiBaseUrl} from '../config/apiConfig'

function Gallery() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState();

    useEffect(() => {

        Axios.get(apiBaseUrl + '/api/v1/all-images?page=1')
            .then((res) => {
                setLoading(true)
                setError(false)
                console.log('data', res.data.data);
                setData(res.data.data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
                setError(true)


            })

    }, [])
    return (
        <div>
            <h1>Gallery</h1>
        </div>
    )
}

export default Gallery
