import { ProjectIndex } from "./ProjectIndex";
import axios from "axios";
import { useState, useEffect } from "react";
export function Content() {
  const [projects, setProjects] = useState([]);

  const handleIndexProjects = () => {
    console.log("handleIndexProjects");
    axios.get("http://localhost:3000/projects.json").then((response) => {
      console.log(response.data);
      setProjects(response.data);
    });
  };

  useEffect(handleIndexProjects, []);

  return (
    <main>
      <h1>Welcome to React!</h1>
      <ProjectIndex projects={projects} />
    </main>
  );
}
