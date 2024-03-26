/* eslint-disable react/prop-types */
export function ProjectIndex(props) {
  return (
    <div>
      <h1>All Projects</h1>
      {props.projects.map((project) => (
        <div key={project.id}>
          <img src={project.url} />
          <p>Width: {project.width}</p>
          <p>Height: {project.height}</p>
        </div>
      ))}
    </div>
  );
}
