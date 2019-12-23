import React from 'react';

function CatalogCarousel() {
  return (
    <div id="carousel-captions" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carousel-captions" data-slide-to="0" className="active"></li>
        <li data-target="#carousel-captions" data-slide-to="1"></li>
        <li data-target="#carousel-captions" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner position-relative">
        <div className="carousel-item active" data-interval="5000">
          <div className="h-100 w-100 carousel-slide slide-1" />
          <div className="carousel-caption d-md-block center-caption">
            <h3>Top Quality Coffee Supplies</h3>
            <p>We take pride in the fact that we provide modern coffee gear for any coffee enthusiast.</p>
          </div>
        </div>
        <div className="carousel-item" data-interval="5000">
          <div className="h-100 w-100 carousel-slide slide-2" />
          <img src="./images/carousel-3.jpg" className="d-block w-100 carousel-image" />
          <div className="carousel-caption d-md-block center-caption">
            <h3>Beans from Local Roasters</h3>
            <p>By sourcing beans from smaller roasters, we are able to offer higher quality beans with more interesting flavor characteristics.</p>
          </div>
        </div>
        <div className="carousel-item" data-interval="5000">
          <div className="h-100 w-100 carousel-slide slide-3" />
          <div className="carousel-caption d-md-block center-caption">
            <h3>Modern Serving Vessels</h3>
            <p>We like to keep things interesting with more mordern ceramics and glassware to drink coffee.</p>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev carousel-controls" href="#carousel-captions" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next carousel-controls" href="#carousel-captions" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default CatalogCarousel;
