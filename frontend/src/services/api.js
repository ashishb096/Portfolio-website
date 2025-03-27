import axios from "axios";

// Base API URL
const API_URL = "http://localhost:5000/api/projects";

//Function to fetch projects from backend
export const fetchProjects = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data; //Return the list of projects
    }
    catch (error) {
        console.error("❌ Error fetching projects:", error);
        return [];
    }
};

// Function to add a new project
export const addProject = async (projectData) => {
    try {
        const response = await axios.post(API_URL, projectData);
        return response.data;
    }
    catch (error) {
        console.error("❌ Error adding project:", error);
        return { error: "Failed to add project"};
    }
};