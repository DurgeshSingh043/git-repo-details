const RepoDetails = (props) => {
  const repos = props.location.state;

  return (
    <div>
      <h1>Repo details</h1>
      <hr />
      {repos &&
        repos.map((name) => <h5 className="p-1 mb-3 border">{name}</h5>)}
    </div>
  );
};

export default RepoDetails;
