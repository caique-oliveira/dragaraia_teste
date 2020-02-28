import React, { Fragment } from 'react';
import styled from 'styled-components';

function Cards(){
  return(
    <Fragment>
      <div className="container">
        <div className="card" style="width: 18rem;">
          <img className="card-img-top" src="../desktop.png" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Site Responsivo Desktop</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Leia mais</a>
          </div>
        </div>

        
        </div>
     </Fragment>
  )
}

export default Cards;