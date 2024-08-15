import { useState } from "react";
import axios from "axios";

const SearchBar = ({ setProfile, setLoading, setNotFound, setClicked }) => {
  const [term, setTerm] = useState("");

  const fetchProfile = async () => {
    setClicked(true);
    axios.get(`https://api.github.com/users/${term}`).then((res) => {
      if (res.status === 404) {
        setNotFound(true);
        setLoading(false);
      } else if (res.status === 200) {
        setProfile(res.data);
        setLoading(false);
      }
    });
  };

  return (
    <div className="search-container">
      <input
        type="search"
        className="search-box"
        placeholder="Enter Profile Name..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button
        onClick={() => {
          fetchProfile();
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
