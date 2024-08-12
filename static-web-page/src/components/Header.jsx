import logo from "../assets/writing.png";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <img src={logo} alt="writing logo" className="logo" />
        <h2 className="title">Writings for Developers</h2>
        <p className="desc">
          Curated collection of articles for busy developers
        </p>
      </div>
    </>
  );
};

export default Header;
