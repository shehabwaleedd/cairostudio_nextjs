'use client'
import { useState, useEffect, useCallback } from 'react';
import { Project } from '@/common/types';
import fetchData from './fetchData';

const CACHE_KEY = "projects";
const CACHE_EXPIRY = 3600000; // 1 hour in milliseconds

const useFetchProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const isCacheValid = (): boolean => {
        const cache = sessionStorage.getItem(CACHE_KEY);
        if (!cache) return false;
        const cachedData = JSON.parse(cache);
        const timestamp = cachedData.timestamp;
        return (new Date().getTime() - timestamp) < CACHE_EXPIRY;
    };

    const refetch = useCallback(async () => {
        await fetchData({ setLoading, setError, setProjects });
    }, []);

    useEffect(() => {
        if (isCacheValid()) {
            const cachedData = JSON.parse(sessionStorage.getItem(CACHE_KEY) || '[]');
            if (Array.isArray(cachedData)) {
                setProjects(cachedData);
            } else {
                refetch(); // Refetch if the cached data is not in the expected format
            }
        } else {
            refetch();
        }
    }, [refetch]);

    return { projects, error, loading, refetch };
};

export default useFetchProjects;
