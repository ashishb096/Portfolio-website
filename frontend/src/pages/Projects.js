import React, { useState, useEffect } from "react";
import { fetchProjects } from "../services/api";

//Projects Page
const Projects = () => {
    const [projects, setProjects] = useState([]);

    //Fetch projects from backend when the components  loads
    useEffect(() =>  {
        const loadProjects = async () => {
            const data = await fetchProjects();
            setProjects(data);
        };
        loadProjects();
    }, []);

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold">Projects</h1>

            {/* Display Projects*/}

            <div className="mt-6">
                {projects.length === 0 ? (
                    <p>No projects added yet.</p>
                ) : (
                    <ul className="space-y-4">
                        {projects.map((project, index) =>(
                            <li key={project._id || project.id || index} className="border p-4 rounded shadow">
                                <h2 className="text-xl font-semibold">{project.title}</h2>
                                <p>{project.description}</p>
                                <a href={project.link} className="text-blue-600" target="_blank" rel="noopener noreferrer">View Project</a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
    };

export default Projects;