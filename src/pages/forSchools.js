import React from 'react';
import { SchoolForm } from '../components';

const ForSchools = () => {

  const textBody = "Lärarcentralen grundades som en hjärtefråga av verksamma pedagoger och vikarier eftersom vi såg behovet av kompetenta inhoppare när ordinarie personal inte fanns på plats. Vi vet därför även hur viktig undervisningen, pedagogerna och skolan är - grunden för framtida generationers utveckling. Därför är vår personal kompetenta både vad gäller deras sociala förhållningssätt och deras kunskap. De är antingen färdigutbildade pedagoger, lärarstudenter eller med erfarenhet inom skolvärlden. De kan hoppa in, de kan ta över en klass eller en lektion, de är kunniga och de kan vara flexibla och hitta lösningar när situationen kräver det. ";
  const textBodyTwo = "Vi fokuserar ständigt på våra nyckelord: stöttning och kompetens. Stöd för er som skola, stöd för personalgruppen och stöttning för eleverna i klassrummet. Kompetens i form av vikarieförmedling, kvalité på undervisningen och social kompetens.";
  const textBodyThree = "Vi finns där för att hjälpa till när ni behöver oss!";

  return (
    <div>
      <div className="textContainer">
        <p>{textBody}</p>
        <p>{textBodyTwo}</p>
        <p>{textBodyThree}</p>
      </div>
      <SchoolForm/>
    </div>
  );
}

export {ForSchools};
