const Profiles = ({ profile }) => {
  console.log(profile);

  return (
    <div className="profiles-container">
      <div className="profile-card">
        <div className="card-header">
          <h1>{profile.login}</h1>
          <img className="pfp" src={profile.avatar_url} alt="Profile avatar" />
        </div>
        <div className="card-body">
          <div className="card-bio">
            <h3>{profile.name}</h3>
            <p>{profile.bio}</p>
          </div>
          <div className="card-stats">
            <p className="stat">Followers: {profile.followers}</p>
            <p className="stat">Repos: {profile.public_repos}</p>
            <p className="stat">Gists: {profile.public_gists}</p>
          </div>
        </div>
        <div className="card-footer">
          <h2>Links</h2>
          <ul className="links">
            <li className="link">
              <a href={profile.url}>Profile Page</a>
            </li>
            <li className="link">
              <a href={profile.repos_url}>Repos</a>
            </li>
            <li className="link">
              <a href={profile.subscriptions_url}>Subscriptions</a>
            </li>
            <li className="link">
              <a href={profile.organizations_url}>Organizations</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
