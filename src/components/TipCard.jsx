const TipCard = ({ icon, tip }) => {
  const { title, content, alt } = tip;
  return (
    <li className="tip-card">
      {icon ? <img src={icon} alt={alt} className="tip-icon" /> : null}
      <div>
        <h3 className="tip-card-title">{title}</h3>
        <p className="tip-card-content">{content}</p>
      </div>
    </li>
  );
};

export default TipCard;
