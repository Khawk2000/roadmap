const Profiles = ({ profile }) => {
  return (
    <div className="profiles-container">
      <h1>Profile</h1>
      <p>{profile.login}</p>
    </div>
  );
};

export default Profiles;
