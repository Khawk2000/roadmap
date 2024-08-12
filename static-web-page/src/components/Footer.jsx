const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left-footer">
        <div className="footer-brand">writings.dev</div>
        <a className="blue-box">by @KeeganHawkins</a>
      </div>
      <div className="right-footer">
        <a className="blue-box">
          <i className="fa-brands fa-twitter" style={{ color: "white" }}></i>{" "}
          Follow @writingsdev
        </a>
      </div>
    </div>
  );
};

export default Footer;
