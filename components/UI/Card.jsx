import React from "react";

const Card = ({title, description, icon}) => {
  return (
    <div className="card w-96 bg-neutral shadow-xl">
      <div className="card-body">
        <img className='w-24 mx-auto mb-3' src={icon} alt={title} />
        <h2 className="text-3xl text-center text-accent font-bold">{title}</h2>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
};

export default Card;
