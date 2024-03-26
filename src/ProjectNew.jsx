/* eslint-disable react/prop-types */
export function ProjectsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateProject(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Project</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="Title" type="text" />
        </div>
        <div>
          Description: <input name="Description" type="text" />
        </div>
        <div>
          Width: <input name="width" type="text" />
        </div>
        <div>
          Goal Amount: <input name="Goal Amount" type="float" />
        </div>
        <button type="submit">Create photo</button>
      </form>
    </div>
  );
}
