import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then((val) => val.json())
            .then((data) => setData(data))
            setLoading(false)
    }, [])
    return { data, loading };
}

export default useFetch