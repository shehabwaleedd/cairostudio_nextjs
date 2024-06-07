'use client'
import React, { useState, useEffect } from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebase.config';
import { useRouter } from 'next/navigation';
import useFetchProjects from "@/hooks/useFetchProjects";
import Image from 'next/image';
import './Dashboard.scss';
import { useUserAuth } from '@/components/authContext/AuthContext';
const Dashboard = () => {
    const router = useRouter();
    const user = useUserAuth();
    const { projects, error, loading } = useFetchProjects();
    const navigateToAddProject = () => {
        router.push('/admin/newItem'); // Assuming '/add-project' is your route for adding a new project
    };
    const navigateToEditProject = (projectId) => {
        router.push(`/admin/${projectId}`); // Assuming '/edit-project/:id' is your route for editing a project
    };
    const deleteProject = async (projectId) => {
        if (window.confirm("Are you sure you want to delete this project?")) {
            try {
                await deleteDoc(doc(db, "projects", projectId));

            } catch (err) {
                console.error("Error deleting project: ", err);
            }
        }
    };
    useEffect(() => {
        if (user) {
            return
        } else {
            router.push('/login');
        }
    }, [user, router]);

    if (loading) return <div>LOADING</div>;
    if (error) return <p>Error: {error}</p>;

    return (
        <main className='dashboard'>
            <div className="dashboard__container">
                <div className="dashboard__header">
                    <h1>Dashboard</h1>
                    <button onClick={navigateToAddProject}>Add New Project</button>
                </div>
                <div className="dashboard__content">
                    {projects.map(project => (
                        <div className="dashboard__project" key={project.id}>
                            <div className="dashboard__project__img">
                                <Image
                                    src={project.homePage}
                                    alt={project.title}
                                    width={600}
                                    height={200}
                                    
                                />
                            </div>
                            <div className="dashboard__project__info">
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                            </div>
                            <div className="dashboard__project__actions">
                                <button onClick={() => navigateToEditProject(project.title)}>edit</button>
                                <button onClick={() => deleteProject(project.id)}>-</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Dashboard;