import React from 'react';
import { SubstitutesForm } from '../components';

const ForSubstitutes = () => {

  const textBody = "Vill du jobba som vikarie hos oss? Vill du vara med och göra något som verkligen spelar roll?";
  const textBodyTwo = "Vi söker dig som vill arbeta som vikarie inom skolvärlden där du under en tid blir en viktig del av skolans verksamhet. Skolans värld är en spännande plats full med oförutsägbara händelser vilket kräver att man är positiv och kan hjälpa till att lösa olika problem man kan stöta på. Du får chansen att leda, inspirera och påverka de människor du stöter på inom de ramar som skolan behöver. Våra nyckelord är stöttning och kompetens vilket innebär att vi förväntar oss att du är kompetent i din roll som vikarie, både socialt och kunskapsmässigt med ett pedagogiskt förhållningssätt där viljan att stötta och lära ut är drivande. Vikten av att arbeta i lag kan vara stor i vissa arbetsmoment och därför är det också viktigt att du kan samarbeta och vara flexibel.";
  const textBodyThree = "Vi erbjuder arbete i skolor och förskolor främst i Göteborg men även i närliggande kommuner. Detta innebär ett arbete med rörlighet och flexibilitet samtidigt som vi söker en stabil relation med kontinuitet till dig som arbetstagare.";

  return (
    <div>
      <div className="textContainer">
        <h3>{textBody}</h3>
        <p>{textBodyTwo}</p>
        <p>{textBodyThree}</p>
      </div>
      <SubstitutesForm/>
    </div>
  );
}

export {ForSubstitutes};
