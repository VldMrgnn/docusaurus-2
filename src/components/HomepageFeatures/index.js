import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  // {
  //   title: 'Pregatim un demo',
  //   Svg: require('@site/static/img/jurnal-gold-logo.svg').default,
  //   description: (
  //     <>
  //     Pregatim infrastructura pentru a un demo suplu si accesibil.
  //     </>
  //   ),
  // },
  {
    title: 'Panoul de Administrare',
    Svg: require('@site/static/img/jurnal-gold-logo.svg').default,
    // require('@site/static/img/softwiz-creation-logo.svg').default,
    description: (
      <>
      <p>
      Explorati liber versiunea demo, cu cele mai recente functionalitati.
      </p>
      <p>
      Obtineti acces personalizat pentru functionalitati de gestionare a utilizatorilor si licentelor.
      </p>
      <a href="https://admin.jurnalgold.ro" target="_blank" rel="noopener noreferrer">Accesati de aici</a>
      </>
    ),
  },
  // {
  //   title: 'Avem o echipa de suport',
  //   Svg: require('@site/static/img/jurnal-gold-logo.svg').default,
  //   description: (
  //     <>
  //      Puteti cere oricand acces la un demo, o versiune de testare sau o prezentare.
  //     </>
  //   ),
  // },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
