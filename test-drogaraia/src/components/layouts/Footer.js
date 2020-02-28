import React from 'react';
import IconDroagaRaia from '../../imagens/drogaraia.png'
import IconDragasil from '../../imagens/drogasil.png'
import IconFarmasil from '../../imagens/farmasil.png'
import IconUnivers from '../../imagens/univers.png'
import Iconbio from '../../imagens/4bio.png'
import IconLogoFooter from '../../imagens/rd-small.png'

function Footer(){
  return(
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-4 col-sm-6">
            <p className="text-xs-center">
            RD2017.Todos os direitos reservados
            </p>
          </div>

          {/* Column 2 */}
          <div className="col-md-6 col-sm-6">
            <ul className="list-unstyled">
              <li><img className="img1-footer" src={IconDroagaRaia}/></li>
              <li><img className="img2-footer" src={IconDragasil}/></li>
              <li><img className="img3-footer" src={IconFarmasil}/></li>
              <li><img className="img3-footer" src={IconUnivers}/></li>
              <li><img className="img5-footer" src={Iconbio}/></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-2 col-sm-6">
            <ul className="list-unstyled">
            <li><img className="img5-footer" src={IconLogoFooter}/></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;