import React, { Fragment } from 'react';
import styled from 'styled-components';
import Desktop from '../../imagens/desktop.png'
import  Tablet from '../../imagens/tablet.png'
import Mobile from '../../imagens/mobile.png'


function Cards(){
  function handleClick(){

      var txt = document.getElementById('text-card').innerHTML;
      var txt2 = txt.substr(0,100)+'...';
      document.getElementById('text-card').innerHTML = txt2;
   
     if(txt<txt2 ){
       document.getElementById('text-card').innerHTML = txt;
       document.getElementById('btn1').innerHTML = 'Mostrar Menos'; 
     }else{
        document.getElementById('text-card').innerHTML = txt2;
        document.getElementById('btn1').innerHTML = 'Mostrar Mais'; 
     }
   
       
   function Mostrar(){
   
      if(document.getElementById('btn1').innerHTML == 'Mostrar Mais'){
        document.getElementById('text-card').innerHTML = txt;
        document.getElementById('btn1').innerHTML = 'Mostrar Menos'; 
      }else{
        document.getElementById('text-card').innerHTML = txt2;
        document.getElementById('btn1').innerHTML = 'Mostrar Mais'; 
      }
   
   }
  }
  
  return(
    <Fragment>
      <div className="container">
        <div className="card" style = {{width: "20em"}}>
          <img className="card-img-top icon-desk" src={Desktop}/>
          <div className="card-body">
            <h5 className="card-title">Site Responsivo Desktop</h5>
            <p id="text-card" className="card-text">Quando pressionado o botão <strong>Leia mais...</strong> &nbsp;o
restante da informação deverá aparecer e, scroll down.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <a href="#" id="btn1" className="btn btn-primary" onClick={handleClick}>Leia mais</a>
          </div>
        </div>
        <div className="card" style = {{width: "20em"}}>
          <img className="card-img-top icon-tablet" src={Tablet}/>
          <div className="card-body">
            <h5 className="card-title">Site Responsivo Desktop</h5>
            <p id="text-card" className="card-text">Quando pressionado o botão <strong>Leia mais...</strong> &nbsp;o
restante da informação deverá aparecer e, scroll down.</p>
            <a href="#" id="btn2" className="btn btn-primary btn2">Leia mais</a>
          </div>
        </div>
        
        <div className="card" style = {{width: "20em"}}>
          <img className="card-img-top icon-mobile" src={Mobile}/>
          <div className="card-body">
            <h5 className="card-title">Site Responsivo Desktop</h5>
            <p className="card-text">Quando pressioonado o botão <strong>alterar tema</strong>&nbsp; 
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