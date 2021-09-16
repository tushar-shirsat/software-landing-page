const WorkingProcessCard = ({id,title,description,icon}) => {
  return (
    <div className="WorkingProcessCard">
      
      <div className="workingProcessCard-imgContainer">
        {icon}
        <span className="card-no">{id}</span>
      </div>
      <div className="workingProcess-description">
        <h4>{title}</h4>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};

export default WorkingProcessCard;
