import React from 'react';
import IconDroagaRaia from '../../imagens/drogaraia.png';
import IconDragasil from '../../imagens/drogasil.png';
import IconFarmasil from '../../imagens/farmasil.png';
import IconUnivers from '../../imagens/univers.png';
import Iconbio from '../../imagens/4bio.png';
import IconLogoFooter from '../../imagens/rd-small.png';
import { Container } from './styles.js';

function Footer() {
  return (
    <div className="Footer">
      <Container>
        <div className="row">
          {/* Column 1 */}
          <div className="colum1">
            <p>
              RD2017.Todos os direitos reservados
            </p>
          </div>

          {/* Column 2 */}
          <div className="colum2">
            <ul>
              <li>
                <img
                  className="img1-footer"
                  src={IconDroagaRaia}
                  alt="img1-footer"
                />
              </li>
              <li className="li-footer2">
                <img
                  className="img2-footer"
                  src={IconDragasil}
                  alt="img2-footer"
                />
              </li>
              <li>
                <img
                  className="img3-footer"
                  src={IconFarmasil}
                  alt="img3-footer"
                />
              </li>
              <li className="li-footer2">
                <img
                  className="img3-footer"
                  src={IconUnivers}
                  alt="img4-footer"
                />
              </li>
              <li>
                <img className="img5-footer" src={Iconbio} alt="img5-footer" />
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="colum3">
            <ul>
              <li>
                <img
                  className="img5-footer"
                  src={IconLogoFooter}
                  alt="img5.1-footer"
                />
              </li>
            </ul>
          </div>
        </div>
        </Container>
    </div>
  );
}

export default Footer;
