import React from 'react';

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
              <li><img src="../imagens/drogaraia.png"/></li>
              <li><img src="../drogasil.png"/></li>
              <li><img src="../farmasil.png"/></li>
              <li><img src="../univers.png"/></li>
              <li><img src="../4bio.png"/></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-2 col-sm-6">
            <ul className="list-unstyled">
            <li><img src="../rd-small.png"/></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;