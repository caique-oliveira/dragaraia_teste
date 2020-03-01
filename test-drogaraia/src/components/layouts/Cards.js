import React, { Fragment } from 'react';
import styled from 'styled-components';
import Desktop from '../../imagens/desktop.png'
import  Tablet from '../../imagens/tablet.png'
import Mobile from '../../imagens/mobile.png'
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'


function Cards(){
  function handleClick(e) {
    if (e.target.id == "btn1") {
      document.getElementById("showmore-card1").classList.toggle("hide");
    }
    if (e.target.id == "btn2") {
      document.getElementById("showmore-card2").classList.toggle("hide");
    }
  }
  
  return(
    <Fragment>
      <div className="container">
        <div className="card" style = {{width: "20em"}}>
          <img className="card-img-top icon-desk" src={Desktop}/>
          <div className="card-body">
            <h5 className="card-title">SITE RESPONSIVO Desktop</h5>
            <PerfectScrollbar>
            <p id="text-card" className="card-text">Quando pressionado o botão <strong>Leia mais...</strong> &nbsp;o
restante da informação deverá aparecer e, scroll down. 
                <span id="showmore-card1" className="hide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus iusto nesciunt quo veritatis incidunt labore,
                praesentium nisi voluptate in perspiciatis reiciendis sapiente
                voluptas aut odit aspernatur nostrum deleniti sint veniam!
              </span>
              </p>
              </PerfectScrollbar>
            <a href="#" id="btn1" className="btn btn-primary" onClick={handleClick}>Leia mais</a>
          </div>
        </div>
        <div className="card" style = {{width: "20em"}}>
          <img className="card-img-top icon-tablet" src={Tablet}/>
          <div className="card-body">
            <h5 className="card-title">SITE RESPONSIVO TABLET</h5>
            <PerfectScrollbar>
            <p id="text-card" className="card-text">Quando pressionado o botão <strong>Leia mais...</strong> &nbsp;o
restante da informação deverá aparecer e, scroll down. 
<span id="showmore-card2" className="hide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus iusto nesciunt quo veritatis incidunt labore,
                praesentium nisi voluptate in perspiciatis reiciendis sapiente
                voluptas aut odit aspernatur nostrum deleniti sint veniam!
              </span>
              </p>
              </PerfectScrollbar>
            <a href="#" id="btn2" className="btn btn-primary btn2" onClick={handleClick}>Leia mais</a>
          </div>
        </div>
        
        <div className="card" style = {{width: "20em"}}>
          <img className="card-img-top icon-mobile" src={Mobile}/>
          <div className="card-body">
            <h5 className="card-title">Site Responsivo Desktop</h5>
            <p className="card-text">Quando pressionado o botão <strong>alterar tema</strong>&nbsp; 
              modifique o tema do site para blackfriday a seu
              gosto.</p>
            <a href="#" id="btn3" className="btn btn-primary btn3">alterar tema</a>
          </div>
        </div>
        </div>
     </Fragment>
  )
}

export default Cards;