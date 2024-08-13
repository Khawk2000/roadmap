const Card = ({ pic, title, description, date, tag }) => {
  return (
    <div className="card-container">
      <div className="card-info-container">
        <div className="img-container">
          <img src={pic} alt="Card Picture" />
        </div>
        <div className="title-container">
          <h3>{title}</h3>
        </div>
        <div className="desc-container">
          <p>{description}</p>
        </div>
        <div className="tags-container">
          <p className="date">{date}</p>
          <span className="spacer">
            <i className="fa-solid fa-circle"></i>
          </span>
          <p className="tag">{tag}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
