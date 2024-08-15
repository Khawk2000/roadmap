import Header from "../components/Header";
import Profiles from "../components/Profiles";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

const Home = () => {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <Header />
      <SearchBar
        setProfile={setProfile}
        setLoading={setLoading}
        setNotFound={setNotFound}
        setClicked={setClicked}
      />
      {!clicked && <h2>Click the search button to find a profile...</h2>}
      {loading && clicked && notFound && <h1>Loading...</h1>}
      {notFound && !loading && (
        <h2>Profile with that username was not found...</h2>
      )}
      {!loading && !notFound && <Profiles profile={profile} />}
    </>
  );
};

export default Home;
