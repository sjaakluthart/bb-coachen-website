/* eslint max-len: 0 */
import React from 'react';

import Image from './Image';
import home from '../assets/home.jpg';
import buiten from '../assets/buiten.jpg';
import vuur from '../assets/vuur.jpg';
import getBackgroundStyles from '../utils/getBackgroundStyles';

const style = {
  ...getBackgroundStyles(home),
  backgroundPosition: 'center',
};

const Home = () => (
  <main className="page home">
    <section className="image" style={style}>
      <article>
        <h1>Bart Boogaard, buitencoach</h1>
        <p>Je bent een ondernemende jongvolwassene of (top)sporter.</p>
        <p>Je wilt je doelen bereiken. In je werk, studie of sport én in je leven. Maar hebt niet helder waarom je niet verder komt. Of wat je het allerliefste wilt. Wat nu?</p>
        <p>Ik ga met jou op zoek naar jouw focus, wat voor jou werkt en naar jouw glimlach.</p>
      </article>
    </section>
    <article>
      <h1>Wat wil je?</h1>
      <section>
        <section>
          <p>
            Misschien wil je iets doorbreken.
          </p>
          <p>
            Ervaar je onrust in je lijf en hoofd. Pijntjes, gepieker, twijfel of zwaarmoedigheid. En vind je het lastig om daarvan af te komen. Of zoek je een klankbord of stok achter de deur.
          </p>
          <p>
            Je wilt beweging maken. Weg van het gedoe, het ongemak en de verwijten naar jezelf. Groeien dus, als mens, in je studie, je werk of in je sport.
          </p>
          <p>
            Heb je wel eens stil gestaan en om steun gevraagd?
          </p>
          <p>
            De juiste hulp vinden, is niet makkelijk.
          </p>
        </section>
        <section>
          <p>
            Je wilt geen oude wijsneus of een gekunsteld verhaal. En je zit zeker niet te wachten op geneuzel, zinloze opdrachten of platte oneliners.
          </p>
          <p>
            Wat jij wilt, is een coach met wie het klikt en waar je vertrouwen in hebt. Die luistert, je verder helpt en met wie je het ook gewoon leuk hebt.
          </p>
          <p>
            Iemand die weet wat het vraagt om met rust en aandacht stappen te maken. En onderweg een lolletje met je maakt. Terwijl jij ondertussen helder krijgt wat jij nodig hebt om jouw doelen te bereiken en je glimlach te hervinden.
          </p>
        </section>
      </section>
    </article>
    <Image
      imageUrl={buiten}
      title="Buiten is waar het begint"
    />
    <article>
      <h1>Hoe ik werk</h1>
      <section>
        <section>
          <p>
            Ik begeleid al meer dan tien jaar mensen die het beste uit zichzelf en het leven willen halen. Vooral jongvolwassenen die willen excelleren in hun leven, werk, studie of sport. Of gewoon weer plezier willen hebben in wat ze doen.
          </p>
          <p>
            Met rust luister ik, confronteer ik en laat ik je voelen. We gaan naar buiten, met elkaar in gesprek en doen fysieke oefeningen.
          </p>
          <p>
            Door die ervaringen ga je anders kijken naar jezelf en je omgeving. En ontdek je stappen die je tot dan toe niet zag.
          </p>
          <ul>
            <h1>Voorbeelden van mensen die jou voorgingen:</h1>
            <li>Pijnvrij terug op racefiets en dan nu echt met plezier.</li>
            <li>Werken met een glimlach in plaats van ander werk.</li>
            <li>Kwalificatie voor EK en WK mountainbiken na sporten op nationaal niveau.</li>
            <li>Vriendschappen en relaties verdiepen, privé en op het werk.</li>
            <li>Weer vrij basgitaar spelen, een band starten en genieten van wat weer lukt.</li>
          </ul>
        </section>
        <section>
          <p>
            Waar je ook aandacht aan geeft in jouw Coach Expeditie, je zult ontdekken dat het doorwerkt in de rest van je leven.
          </p>
          <p>
            Om jouw persoonlijke traject vorm te geven, tap ik uit mijn ervaring als mental coach en mijn coachopleiding, aanvullende opleidingen en workshops. En natuurlijk uit mijn eigen sportervaring en mijn persoonlijke ontwikkelingspad.
          </p>
          <p>
            We gaan samen op weg, met aandacht voor wat nodig is. Ik laat je ervaren en nieuwe wegen ontdekken, maar nooit verdwalen.
          </p>
        </section>
      </section>
    </article>
    <Image
      imageUrl={vuur}
      title="Brandt jouw vuur nog?"
    />
    <article>
      <h1>Hoe ziet een Coach Expeditie eruit?</h1>
      <section>
        <section>
          <p>
            Een Coach Expeditie start altijd met een kosteloos oriënterend gesprek. Ik luister en jij vertelt wat je zoekt en welke tijd- en financiële investering je kunt bieden. Op basis daarvan bespreken we de lengte en vorm van de Coach Expeditie die past bij jou.
          </p>
          <ul>
            <h1>Een Coach Expeditie bestaat uit:</h1>
            <li>
              coaching per kwartaal
            </li>
            <li>
              het bijhouden van een digitaal logboek
            </li>
            <li>
              bereikbaarheid voor afstemming met mij als coach, dat helpt jouw proces en ondersteunt het vertrouwen
            </li>
            <li>
              hoge intensiteit in het eerste kwartaal
            </li>
          </ul>
        </section>
        <section>
          <p>
            Gemiddeld duurt een Coach Expeditie twee tot vier kwartalen. Qua kosten voor een expeditie kun je denken aan circa €800 tot €1.400 inclusief btw. (voor bedrijven is dit exclusief btw)
          </p>
          <a href="mailto:bart@bbcoachen.nl?subject=Coach Expeditie" className="sign-up button">Meld je aan</a>
        </section>
      </section>
    </article>
  </main>
);

export default Home;
