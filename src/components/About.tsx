/* eslint max-len: 0 */
import React from 'react';

import Image from './Image';
import bart from '../assets/bart.jpg';
import bike from '../assets/bike.jpg';

const About = () => (
  <main className="page about">
    <Image
      imageUrl={bart}
      title="Wie is Bart?"
      subTitle="Bart is een nuchtere en aimabele levenskunstenaar met empathie."
    />
    <article>
      <h1>Bart Boogaard</h1>
      <section>
        <section>
          <p>
            Ik ben opgegroeid aan de Noord-Hollandse kust en was altijd veel buiten. Ik hield en houd van buitenspelen. Dit gebruik ik ook actief in mijn coaching. Buiten geeft beweging en ruimte.
          </p>
          <p>
            Tijdens mijn diensttijd ontpopte ik mij als marinier tot de natuurlijke leider van mijn opleidingsgroep. Meer grenzen verlegde ik op het ijs, in de bergen en golven en op of langs het voetbal- en rugbyveld. Sporten en bewegen hebben mij gevormd als mens en coach.
          </p>
          <p>
            Ervaringen die ik verbind met mijn jarenlange training in tai chi, waarmee actie en souplesse samenkomen.
          </p>
          <p>
            Ik werk als financieel professional en begeleidde al jaren ambitieuze sporters. Inmiddels heb ik al heel wat mensen begeleid die verder wilden komen op sportief gebied en in het leven. Zo heb ik een professioneel mountainbiketeam mentaal begeleid en vele (top)sporters individueel en (top)sportteams.
          </p>
        </section>
        <section>
          <p>
            Met deze kennis en vaardigheden help ik ook ondernemende jongvolwassenen weer op weg in studie, werk of hun passie.
          </p>
          <p>
            Ik ben altijd bezig om mijzelf te verrijken met nieuwe wijsheid. Ik lees, zoek ervaringen op, volg opleidingen en ga de werkelijke ontmoeting nooit uit de weg. Daarmee blijf ik mijzelf ontwikkelen als mens en coach. Nog altijd zit ik met plezier op de racefiets of mountainbike, loop ik lekker hard of rij ik naar de kust voor een duik in het zoute zeewater. Meestal begin ik dag met een wandeling, die ik afsluit met wat meditatie en tai chi. Daarna kan de dag echt beginnen.
          </p>
          <p>
            Dit alles maakt mij een gedreven en levenslustig mens, met rust en aandacht voor wie behoefte heeft aan inzicht, mentale veerkracht of het terugvinden van een glimlach.
          </p>
        </section>
      </section>
    </article>
    <Image
      imageUrl={bike}
      title="Je best doen is mooi maar je kunt beter het beste doen"
    />
  </main>
);

export default About;
