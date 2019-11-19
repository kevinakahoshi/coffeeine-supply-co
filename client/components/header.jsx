import React from 'react';

function Header(props) {
  const name = props.name;
  return (
    <div className="bg-dark mb-5 p-3">
      <div className="container">
        <h5 className="text-light m-0"><i className="fas fa-dollar-sign"></i> {name}</h5>
      </div>
    </div>
  );
}

export default Header;
