/* eslint max-len: 0 */
import React from 'react';
import Slider from 'react-slick';

import Image from './Image';
import expeditions from '../assets/expeditions.jpg';
import robbert from '../assets/robbert.jpg';
import jelmer from '../assets/jelmer.jpg';
import sjaak from '../assets/sjaak.jpg';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Expeditions = () => (
  <main className="page expeditions">
    <Image
      imageUrl={expeditions}
      title="Leef met een glimlach"
      subTitle="Ik ga met jou op zoek naar jouw focus, wat voor jou werkt en naar jouw glimlach."
    />
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
      <Image
        imageUrl={robbert}
        title="Het verhaal van Robbert"
        subTitle="Dankzij Bart zijn kwaliteiten kon ik van Benelux topper naar top 25 kandidaat voor wereldbekers. Bovenal ben ik door de inzichten van Bart een beter en uitgebalanceerde mens geworden."
      />
      <Image
        imageUrl={jelmer}
        title="Het verhaal van Jelmer"
        subTitle="Dankzij Bart zijn kwaliteiten kon ik van Benelux topper naar top 25 kandidaat voor wereldbekers. Bovenal ben ik door de inzichten van Bart een beter en uitgebalanceerde mens geworden."
      />
      <Image
        imageUrl={sjaak}
        backgroundPosition="top"
        title="Het verhaal van Sjaak"
        subTitle="Na een RSI klacht ben ik bij Bart terecht gekomen. Nu kan ik weer muziek maken en gun ik mezelf momenten om te genieten."
      />
    </Slider>
  </main>
);

export default Expeditions;
