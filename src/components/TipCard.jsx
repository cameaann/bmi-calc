const TipCard = ({icon, alt, tip}) => {
  const { title, content } = tip;
  return (
    <li className="tip-card">
      {icon ? <img src={icon} alt={alt} className="tip-icon" /> : null}
      <h3 className="tip-card-title">{title}</h3>
      <p className="tip-card-content">
        {content}
      </p>
    </li>
  );
};

export default TipCard;
