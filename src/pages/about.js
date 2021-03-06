import React from 'react';

const About = () => {

  const textBody = "Vikariecentralen är ett bemanningsföretag som inriktar sig på att erbjuda kompetenta vikarier till skolor och förskolor. Vi har personlig erfarenhet från skolans arbetsvärld och vi vet hur stort behovet kan vara under vissa perioder. Vi finns därför där för att hjälpa till när ni behöver oss!";
  const textBodyTwo = "Våra nyckelord är stöttning och kompetens. Stöd för er som skola, stöd för personalgruppen och stöttning för eleverna i klassrummet. Kompetens i form av vikarieförmedling, kvalité på undervisningen och social kompetens.";

  return (
    <div className="text-container">
      <h1 className="subheading">Om Vikariecentralen</h1>
      <p>{textBody}</p>
      <p>{textBodyTwo}</p>
    </div>
  );
}

export {About};
