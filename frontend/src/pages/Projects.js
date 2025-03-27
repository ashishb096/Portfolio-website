import React from "react";
import { fetchProjects, addProject } from "../services/api";

//Projects Page
const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [newProject, setNewProject] = useState({ title: "", description: "", link: ""});

    //Fetch projects from backend when the components  loads
    useEffect(() =>  {
        const loadProjects = async () => {
            const data = await fetchProjects();
            setProjects(data);
        };
        loadProjects();
    }, []);

    //Handle form input change
    const handleChange = (e) => {
        setNewProject({ ...newProject, [e.target.name]: e.target.value });
    };

   //Handle form submission
   const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await addProject(newProject);
        if (!response.error) {
            setProjects([...projects, response]); //Update UI with new project
            setNewProject({ title: "", description: "", link: ""}); // Reset form
        }
   };
    return {
        <div className="p-10">
            <h1 className="text-3xl font-bold">Projects</h1>

            {/* Form to add a new project */}
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Project Title"
                    value={newProject.title}
                    onChange={handleChange}
                    className="p-2 border rounded w -full"
                    required
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Project Description"
                    value={newProject.description}
                    onChange={handleChange}
                    className="p-2 border rounded w -full"
                    required
                />
                <input
                    type="url"
                    name="link"
                    placeholder="Project Link"
                    value={newProject.link}
                    onChange={handleChange}
                    className="p-2 border rounded w -full"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Project</button>
            </form>
            {/* Display Projects*/}
            <div className="mt-6">
                {projects.length === 0 ? (
                    <p>No projects added yet.</p>
                ) : (
                    <ul className="space-y-4">
                        {projects.map((project) =>(
                            <li key={project._id} className="border p-4 rounded shadow">
                                <h2 className="text-xl font-semibold">{project.title}<h2>
                                <p>{project.description}</p>
                                <a href={project.link} className="text-blue-600" target="_blank" rel="noopener noreferrer">View Project</a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    };
};

export default Projects;