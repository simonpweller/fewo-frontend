import React from 'react';
import Head from 'next/head';
import {FormattedMessage, injectIntl} from 'react-intl';

export function Index({intl}) {
  return (
    <>
      <Head>
        <title>
          {intl.formatMessage({id: 'holidaysInHetzdorf'})}
        </title>
      </Head>

      <h1><FormattedMessage id={'holidaysInHetzdorf'}/></h1>
      <p>
        Herzlich willkommen zwischen Dresden und Erzgebirge – mitten in Sachsen!
      </p>
      <p>
        Wir freuen uns über Ihr Interesse an unserem traditionellen Urlaubs- und
        Erholungsgebiet Tharandter Wald. Im "Schönsten Wald Sachsens" und seinen
        umliegenden Ortschaften können Sie noch die Sanftheit der Natur spüren,
        ihre Geheimnisse entdecken, sich aber auch gesund und fit halten.
      </p>
      <p>
        Zahlreiche Sport- und Freizeiteinrichtungen, gemütliche Gaststätten, die
        Klinik am Tharandter Wald, 180 km gut ausgeschilderte Rad- und Wanderwege
        oder viele bequem erreichbare Ausflugsziele, um nur einiges zu nennen,
        bieten Ihnen Urlaubsvergnügen pur.
      </p>
      <p>
        Die zentrale Lage von Hetzdorf bietet den idealen Ausgangspunkt für
        Tagesausflüge
      </p>
      <ul>
        <li>in die Kunststadt Dresden (Semperoper, Zwinger, Frauenkirche)</li>
        <li>nach Meißen (Porzellanmanufaktur mit Schauwerkstatt)</li>
        <li>
          in das Erzgebirge – Heimat der Holzschnitzer und Spielzeughersteller,
        </li>
        <li>
          nach Freiberg (größte originale bergbauliche Untertageanlage, Dom mit
          Silbermannorgel)
        </li>
        <li>
          sowie das Elbsandsteingebirge; Erlebnisfahrten wie z.B. mit der größten
          Raddampferflotte der Welt durch das Elbsandsteingebirge oder eine Fahrt
          mit der dienstältesten dampflockbetriebenen deutschen Schmalspurbahn ins
          Osterzgebirge und vieles mehr werden Ihnen unvergesslich bleiben
        </li>
      </ul>
    </>
  )
}

export default injectIntl(Index);