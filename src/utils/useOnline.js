import React, { useEffect, useState } from 'react'

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true)
    useEffect(() => {
        window.addEventListener('online', () => setIsOnline(true));
        window.addEventListener('offline', () => setIsOnline(false));
    }, [isOnline])
    

    return isOnline;
}

export default useOnline