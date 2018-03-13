import React from 'react';

import './banner.css';

function Banner() {

  return (
    <div className="banner-wrapper-outer">
     <div className="banner-wrapper-inner">
        <p>
            EcoGifts vill inspirera dig som ska köpa presenter att välja
            produkter som kommer till användning och samtidigt gör gott för
            andra och vår miljö!
        </p>
        <p>
            Genom de 6 kategorierna nedan går det att filtrera presenter utifrån intresse.
        </p>
        <p>
            Det finns även en presenttipsgenerator där det går att filtrerar
            presenttips utifrån olika intressen, personligheter, material, och
            typ av mottagare. 
        </p>              
        <p>
            Välkommen till EcoGifts! 
        </p>
     </div>
    </div>
  );
}

export default Banner;