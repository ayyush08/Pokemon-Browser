import { useState, useEffect } from 'react';



export const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const getProducts = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setData(data)
    setLoading(false)
    }

    useEffect(() => {
    getProducts()
    }, [url])
    return {loading,data}
};
// import { useState, useEffect } from 'react';

// export const useFetch = (url) => {
//     const [data, setData] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//     const fetchData = async () => {
//         try {
//         const response = await fetch(url);
//         const json = await response.json();
//         setData(json);
//         } catch (err) {
//         setError(err);
//         } finally {
//         setIsLoading(false);
//         }
//     };

//     fetchData();
//     }, [url]);

//     return { data, isLoading, error };
// };

// export default useFetch;
