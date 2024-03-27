/* eslint-disable react/prop-types */
export function ProjectIndex(props) {
  return (
    <div>
      <h1>All Projects</h1>
      {props.projects.map((project) => (
        <div key={project.id}>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <p>{project.goal_amount}</p>
        </div>
      ))}
    </div>
  );
}
