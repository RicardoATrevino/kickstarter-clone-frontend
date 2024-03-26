import { ProjectIndex } from "./ProjectIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { ProjectsNew } from "./ProjectNew";
import { Modal } from "./Modal";

export function Content() {
  const [projects, setProjects] = useState([]);

  const handleIndexProjects = () => {
    console.log("handleIndexProjects");
    axios.get("http://localhost:3000/projects.json").then((response) => {
      console.log(response.data);
      setProjects(response.data);
    });
  };
  const handleCreateProject = (params, successCallback) => {
    console.log("handleCreateProject", params);
    axios.post("http://localhost:3000/projects.json", params).then((response) => {
      setProjects([...projects, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexProjects, []);

  return (
    <main>
      <h1 className="text-3xl font-bold underline">Welcome to React!</h1>
      <ProjectsNew onCreateProject={handleCreateProject} />
      <ProjectIndex projects={projects} />
      {/* <Modal show={true}>
        <h1>WOW</h1>
      </Modal> */}
    </main>
  );
}
