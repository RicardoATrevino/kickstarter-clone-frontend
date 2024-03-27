import axios from "axios";
import { useState, useEffect } from "react";
import { ProjectIndex } from "./ProjectIndex";
// import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Login";

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
      <h1 className="text-3xl font-bold underline">Welcome to Definitely Real Super Authentic KICKSTARTER!</h1>
      <Routes>
        {/* <Route path="#" element={<ProjectIndex projects={projects} />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ProjectIndex projects={projects} />

      {/* <Modal show={true}>
        <h1>WOW</h1>
      </Modal> */}
    </main>
  );
}
