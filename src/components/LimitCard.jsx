const LimitCard = ({ limit, icon }) => {
  const { title, description, alt } = limit;

  return (
    <div className="limit-card">
      <div className="limit-card-header">
        {icon ? <img src={icon} alt={alt} className="limit-icon" /> : null}
        <h3 className="limit-card-title">{title}</h3>
      </div>

      <p className="limit-card-description">{description}</p>
    </div>
  );
};

export default LimitCard;
