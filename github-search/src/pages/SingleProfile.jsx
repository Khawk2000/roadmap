import { useParams } from "react-router-dom";

const SingleProfile = () => {
  const { id } = useParams();
  return (
    <div className="single-profile-container">
      <h1>Single Profile with {id}</h1>
    </div>
  );
};

export default SingleProfile;
