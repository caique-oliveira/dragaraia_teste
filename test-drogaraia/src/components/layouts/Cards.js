import React, { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Desktop from '~/imagens/desktop.png';
import Tablet from '~/imagens/tablet.png';
import CardThemed from '~/components/CardThemed';
import { Container, AlturaCard  } from './style';
import Popup from './Popup';


function Cards({ toggleTheme }) {
  
  const [showPopup, setShowPopup] = useState('false');

  function handlePopup() {
    setShowPopup('true');
  }
  function hidePopup() {
    setShowPopup('false');
  }
  function handleClick(e) {
    const { id } = e.target;

    if (id === 'btn1') {
      document.getElementById('showmore-card1').classList.toggle('hide');
    }

    if (id === 'btn2') {
      document.getElementById('showmore-card2').classList.toggle('hide');
    }
  }

  return (
    <>
      <Container>
        <div className="container">
          <AlturaCard>
            <div className="card" style={{ width: '20em', height: '23em' }}>
              <img alt="card1" className="card-img-top icon-desk" src={Desktop} />
              <div className="card-body">
                <h5 className="card-title">Site Responsivo Desktop</h5>
                <PerfectScrollbar>
                  <p id="text-card" className="card-text">
                    Quando pressionado o botão <strong>Leia mais...</strong>{' '}
                    &nbsp;o restante da informação deverá aparecer e, scroll down.
                    <span id="showmore-card1" className="hide">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus iusto nesciunt quo veritatis incidunt labore,
                      praesentium nisi voluptate in perspiciatis reiciendis
                      sapiente voluptas aut odit aspernatur nostrum deleniti sint
                      veniam!
                    </span>
                  </p>
                </PerfectScrollbar>
                <a
                  href="#"
                  id="btn1"
                  className="btn btn-primary"
                  onClick={handleClick}
                >
                  Leia mais
                </a>
              </div>
            </div>
          <div className="card" style={{ width: '20em' , height: '24em'  }}>
            <img
              className="card-img-top icon-tablet"
              src={Tablet}
              alt="card-icon"
            />
            <div className="card-body">
              <h5 className="card-title">Site Responsivo TABLET</h5>
              <PerfectScrollbar>
                <p id="text-card" className="card-text">
                  Quando pressionado o botão <strong>Leia mais...</strong>{' '}
                  &nbsp;o restante da informação deverá aparecer complata em um popup de tela.
                  <span id="showmore-card2" className="hide">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus iusto nesciunt quo veritatis incidunt labore,
                    praesentium nisi voluptate in perspiciatis reiciendis
                    sapiente voluptas aut odit aspernatur nostrum deleniti sint
                    veniam!
                  </span>
                </p>
              </PerfectScrollbar>
              <a
                href="#"
                id="btn2"
                className="btn btn-primary btn2"
                onClick={handlePopup}
              >
                Leia mais
              </a>
            </div>
          </div>
          <CardThemed toggleTheme={toggleTheme} />
     
        </AlturaCard>
        </div>
        <Popup
          show={showPopup}
          onChange={hidePopup} 
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        />
      </Container>
    </>
  );
}

export default Cards;
