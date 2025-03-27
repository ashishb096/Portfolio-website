const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//Connect to MongoDB

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,

})
.then(() => console.log("✅ MongoDB Connected"))
.catch((error) => console.log("❌ MongoDB Connection Error:", error));

//Define Schema & Mode for Projects
const ProjectSchema = new mongoose.Schema({
    title: String,
    description: String,
    link: String
});
const Project =  mongoose.model("Project", ProjectSchema);

//Routes
app.get("/api/projects",async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
        }
    catch (err) {
        res.status(500).json({ error: "Error fetching projects"});
    }
});

// Add new Project (POST request)
app.post("/api/projects", async (req, res) => {
    try {
        console.log("📩 New Project Data:", req.body); //Debugging
        const newProject = new Project(req.body);
        await newProject.save();
        res.status(201).json({ message: "Project added successfully"});
    }
    catch (err) {
    console.error("❌ Error adding project:", error.message);
    res.status(500).json({ error: "Error adding project" });
    }
});

//Contact form Submission
app.post("/api/contact", async (req, res) => {
    console.log("📩 Contact Form Data Received:", req.body);
    res.json({ message: " Message received successfully"});
});

//Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
