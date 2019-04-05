import React from 'react';

const Address = () => {
  return (
    <address className="vcard">
      <div className="fn">Bernd Böhme</div>
      <div className="adr">
        <div className="street-address">Zum Waldblick 42a</div>
        <div>
          <span className="postal-code">
            09633
          </span>
          &nbsp;
          <span className="locality">
            Halsbrücke
          </span>
        </div>
        <div className="country-name">
          Deutschland
        </div>
        <a href="mailto: kontakt@ferien-hetzdorf.de" className="email">
          kontakt@ferien-hetzdorf.de
        </a>
      </div>
    </address>
  );
};

export default Address;