import React from "react";
import { Layout } from "../src/components/layout";

const NextSignup: React.FC = (): JSX.Element => {
  return (
    <Layout>
      <section className="register-finish">
        <div className="container">
          <h1 className="register-finish__title section__title">
            Poznajmy się lepiej!
          </h1>
          <div className="register-finish__body">
            <form
              action="../../vendor/registerFinish.php"
              method="post"
              className="form"
            >
              <div className="form__row">
                <div>
                  <input
                    className="form__input"
                    type="radio"
                    name="type"
                    id="type-people"
                    required
                  />
                  <label htmlFor="type-people">Wolontariusz</label>
                </div>
                <div>
                  <input
                    className="form__input"
                    type="radio"
                    name="type"
                    id="type-company"
                    value="0"
                    required
                  />
                  <label htmlFor="type-company">Organizacja</label>
                </div>
              </div>
              <div className="form__row">
                <input
                  className="form__input"
                  type="text"
                  value=""
                  name="job"
                  placeholder="Twoja profesja"
                  required
                />
              </div>
              <div className="form__row">
                <input
                  className="form__input"
                  type="text"
                  name="city"
                  placeholder="Obecne miasto"
                  required
                />
              </div>
              <div className="form__row">
                <input
                  className="form__input"
                  type="date"
                  name="date"
                  placeholder="Data urodzenia"
                  required
                />
              </div>
              <div className="form__row lock-form">
                <div className="form__checkbox">
                  <div className="switch">
                    <input type="checkbox" id="lock" name="lock" value="1" />
                    <label htmlFor="lock">Profil zamknięty</label>
                  </div>
                  <label className="lock-form__label" htmlFor="lock">
                    Profil zamknięty
                  </label>
                </div>
                <p className="lock-form__desc">
                  *informacje o Tobie nie będą dostępne dla innych uczestników
                </p>
              </div>
              <button className="form__btn">Rejestracja</button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default NextSignup;
