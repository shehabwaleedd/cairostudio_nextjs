'use client';

import { useReducer, useEffect, useCallback } from 'react';
import fetchData from './fetchData';
import { Project } from '@/common/types'; // Adjust the import path as needed

const CACHE_KEY = "projects";
const CACHE_EXPIRY = 3600000; // 1 hour in milliseconds

type State = {
    projects: Project[];
    loading: boolean;
    error: string | null;
};

type Action =
    | { type: 'FETCH_INIT' }
    | { type: 'FETCH_SUCCESS'; payload: Project[] }
    | { type: 'FETCH_FAILURE'; payload: string };

const initialState: State = {
    projects: [],
    loading: false,
    error: null,
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'FETCH_INIT':
            return { ...state, loading: true, error: null };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, projects: action.payload, error: null };
        case 'FETCH_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

const useFetchProjects = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const isCacheValid = useCallback((): boolean => {
        const cache = sessionStorage.getItem(CACHE_KEY);
        if (!cache) return false;
        const { timestamp } = JSON.parse(cache);
        return (new Date().getTime() - timestamp) < CACHE_EXPIRY;
    }, []);

    const refetch = useCallback(async () => {
        dispatch({ type: 'FETCH_INIT' });
        try {
            const projectsData = await fetchData();
            dispatch({ type: 'FETCH_SUCCESS', payload: projectsData });
        } catch (error) {
            dispatch({ type: 'FETCH_FAILURE', payload: (error as Error).message });
        }
    }, []);

    useEffect(() => {
        if (isCacheValid()) {
            const cachedData = JSON.parse(sessionStorage.getItem(CACHE_KEY)!);
            dispatch({ type: 'FETCH_SUCCESS', payload: cachedData.projects });
        } else {
            refetch();
        }
    }, [isCacheValid, refetch]);

    return {
        projects: state.projects,
        loading: state.loading,
        error: state.error,
        refetch,
    };
};

export default useFetchProjects;
