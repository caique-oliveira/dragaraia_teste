import React, { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import desktop from '../../imagens/desktop.png';
import tablet from '../../imagens/tablet.png';
import mobile from '../../imagens/mobile.png';
import { Container, CardContainer, TextContent } from '../../styles/cards-styles';
import Popup from './Popup';

export default function Cards( { toggleTheme } ) {
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
    <Container>
      <CardContainer bgColor="#f69383">
        <section>
          <img src={desktop} alt="" />
          <h2>Site Responsivel Desktop</h2>
        </section>
        <TextContent>
        <PerfectScrollbar>
            <p>
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
          <button id="btn1" style={{ background: '#FE9481' }} onClick={handleClick}>Leia Mais</button>
        </TextContent>
      </CardContainer>

      <CardContainer bgColor="#fcd992">
        <section>
          <img src={tablet} alt="" />
          <h2>Site Responsivel TABLET</h2>
        </section>
        <TextContent>
          <p id="text-card" className="card-text">
          Quando pressionado o botão <strong>Leia mais...</strong>{' '}
          &nbsp;o restante da informação deverá aparecer complata em um popup de tela.
            <span id="showmore-card2" className="hide">
            </span>
          </p>

          <button id="btn2" style={{ background: '#fcd992' }} onClick={handlePopup}>Leia Mais</button>
        </TextContent>
      </CardContainer>

      <CardContainer bgColor="#9C8CB9">
        <section>
          <img src={mobile} alt="" />
          <h2>Site Responsivel MOBILE</h2>
        </section>
        <TextContent>
          <p id="text-card" className="card-text">
            Quando pressionado o botão <strong>Leia mais...</strong>{' '}
            &nbsp;o restante da informação deverá aparecer e, scroll down.
          </p>
          <button id="btn1" style={{ background: '#9C8CB9' }} onClick={handleClick}>Alterar tema</button>
        </TextContent>
      </CardContainer>



      <Popup
          show={showPopup}
          onChange={hidePopup}
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        />
    </Container>
  );
}
