import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Layout } from "../src/components/layout";
import { ProjectBlock } from "../src/components/ProjectBlock";

import pomagamyImg from "/src/img/pomagamy.jpg";

const podarowac = (): JSX.Element => {
  return (
    <>
      <Layout>
        <section className="help-who section">
          <h2 className="help-who__title section__title">Dlaczego pomagamy</h2>
          <div className="container">
            <div className="help-who__body">
              <div className="help-who__text">
                <b className="help-who__txt">
                  Pomoc nie jest ani groszem. Golovnya - matka bazhannya zmienia
                  ten świat na lepsze życie. Praca funduszu była więcej niż
                  możliwa dla startu wspaniałego zespołu o tym samym umyśle.
                </b>
                <p className="help-who__txt">
                  Dziś dzieciom pomaga ponad 100 stałych wolontariuszy: aktorzy,
                  fotografowie, projektanci, prawnicy, tłumacze, tłumacze, a
                  także wiele innych dziwnych ludzi różnych zawodów. Czy
                  potrzebuję wolontariuszy, aby przyszli i prosili o przyjście
                  do zespołu!
                </p>
              </div>
              <div className="help-who__img">
                <Image src={pomagamyImg} alt="" fill />
              </div>
            </div>
          </div>
        </section>
        <section className="what-help section">
          <div className="container">
            <h2 className="what-help__title section__title">
              Kto potrzebuje twojej pomocy
            </h2>
            <div className="what-help__body">
              <ProjectBlock title="dawdw" description="dad" userName="adwa" />
              <ProjectBlock title="dawdw" description="dad" userName="adwa" />
              <ProjectBlock title="dawdw" description="dad" userName="adwa" />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default podarowac;
