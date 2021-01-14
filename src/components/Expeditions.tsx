/* eslint max-len: 0 */
import React from 'react';
import Slider from 'react-slick';

import '../css/Expeditions.css';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Expeditions = () => (
  <main className="page expeditions">
    <section className="hero">
      <article>
        <h1>Leef met een glimlach</h1>
        <p>
          Ik ga met jou op zoek naar jouw focus, wat voor jou werkt en naar jouw glimlach.
        </p>
      </article>
    </section>
    <article>
      <h1>Hoe ziet een Coach Expeditie eruit?</h1>
      <section>
        <section>
          <p>
            Een Coach Expeditie start altijd met een kosteloos oriënterend gesprek. Ik luister en jij vertelt wat je zoekt en welke tijd- en financiële investering je kunt bieden. Op basis daarvan bespreken we de lengte en vorm van de Coach Expeditie die past bij jou.
          </p>
          <p>
            Als jij beslist om met mij in zee te gaan, starten we het eerste kwartaal intensief en houd je jouw ervaringen bij in een digitaal logboek. Vanaf het tweede kwartaal is de intensiteit lager. Tijdens jouw Coach Expeditie ben ik bereikbaar voor afstemming, dat helpt jouw proces en ondersteunt het vertrouwen.
          </p>
        </section>
        <section>
          <p>
            Gemiddeld duurt een Coach Expeditie twee tot vier kwartalen. Qua kosten voor een expeditie kun je denken aan circa €800 tot €1.400 inclusief btw. (voor bedrijven is dit exclusief btw)
          </p>
          <a href="mailto:bart@bbcoachen.nl?subject=Coach Expeditie" className="sign-up">Meld je aan!</a>
        </section>
      </section>
    </article>
    <Slider
      {...sliderSettings} // eslint-disable-line react/jsx-props-no-spreading
    >
      <section className="slide robbert">
        <article>
          <h1>Het verhaal van Robbert</h1>
          <p>
            Dankzij Bart zijn kwaliteiten kon ik van Benelux topper naar top 25 kandidaat voor wereldbekers. Bovenal ben ik door de inzichten van Bart een beter en uitgebalanceerde mens geworden.
          </p>
        </article>
      </section>
      <section className="slide sjaak">
        <article>
          <h1>Het verhaal van Sjaak</h1>
          <p>
            Na een RSI klacht ben ik bij Bart terecht gekomen, nadat een jaar lang fysio me niet verder hielp. Nu kan ik weer basgitaar spelen, gun ik mezelf momenten om te genieten en wil ik een switch in werk maken.
          </p>
        </article>
      </section>
      <section className="slide jelmer">
        <article>
          <h1>Het verhaal van Jelmer</h1>
          <p>
            Toen ik begon bij Bart was ik op weg om snel &apos;oud&apos; te worden, als 25-jarig mens met een chronische knieblessure. Na een jaar intensief begeleiding van Bart ben ik weer op weg om wedstrijdwielrenner te worden.
          </p>
        </article>
      </section>
    </Slider>
  </main>
);

export default Expeditions;
