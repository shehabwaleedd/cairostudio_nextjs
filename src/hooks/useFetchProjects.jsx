import { useState, useEffect } from 'react';
import fetchData from './fetchData';

const CACHE_KEY = "projects";
const CACHE_EXPIRY = 3600000; // 1 hour in milliseconds

const useFetchProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const isCacheValid = () => {
        const cache = sessionStorage.getItem(CACHE_KEY);
        if (!cache) return false;
        const { timestamp } = JSON.parse(cache);
        return (new Date().getTime() - timestamp) < CACHE_EXPIRY;
    };

    const refetch = async () => {
        await fetchData({ setLoading, setError, setProjects });
    };

    useEffect(() => {
        if (isCacheValid()) {
            const cachedData = JSON.parse(sessionStorage.getItem(CACHE_KEY));
            if (cachedData && Array.isArray(cachedData.projects)) {
                setProjects(cachedData.projects);
            } else {
                refetch();
            }
        } else {
            refetch();
        }
    }, []);

    return { projects, error, loading, refetch };
};

export default useFetchProjects;
