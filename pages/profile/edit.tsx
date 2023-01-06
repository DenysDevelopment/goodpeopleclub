import Link from "next/link";
import { Router, useRouter } from "next/router";
import React from "react";
import { Layout } from "../../src/components/layout";

const Edit = () => {
  const router = useRouter();

  const pageBack = () => {
    router.back();
  };
  return (
    <Layout>
      <section className="profile">
        <div className="profile__header">
          <div className="container">
            <button className="btn" onClick={pageBack}>
              ⬅︎Back
            </button>
          </div>
        </div>
        <div className="container">
          <div className="profile__info-user user-profile">
            <div className="user-profile__user">
              <div className="user-profile__ava">
                <svg
                  width="144"
                  height="144"
                  viewBox="0 0 166 166"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_49_506)">
                    <path
                      d="M77.1992 0.973389C76.5869 1.03784 74.6855 1.26343 73.0098 1.42456C62.375 2.58472 50.6123 6.58081 41.1055 12.2527C29.0205 19.4714 19.1914 29.3005 11.9727 41.3855C6.33301 50.7957 2.59473 61.7527 1.08008 73.2898C0.564453 77.2537 0.564453 89.3064 1.08008 93.2703C3.72266 113.347 12.5527 130.331 27.5059 144.22C35.7559 151.923 46.0361 157.917 57.2187 161.591C66.0488 164.523 73.042 165.587 83 165.587C90.3476 165.587 93.6025 165.297 100.08 163.975C122.284 159.431 142.104 145.187 154.027 125.175C159.667 115.764 163.405 104.807 164.92 93.2703C165.436 89.3064 165.436 77.2537 164.92 73.2898C163.405 61.7527 159.667 50.7957 154.027 41.3855C146.809 29.3005 136.979 19.4714 124.895 12.2527C115.581 6.67749 104.463 2.87476 93.3125 1.42456C90.4766 1.03784 79.1973 0.747803 77.1992 0.973389ZM89.6064 10.7703C108.395 12.5105 126.538 21.9529 138.494 36.2292C157.572 58.9812 161.149 90.3699 147.711 116.57C146.067 119.76 141.04 127.592 140.814 127.334C140.718 127.269 140.105 126.045 139.429 124.659C132.887 111.092 120.705 99.7478 106.719 94.1082C104.914 93.3669 103.432 92.6257 103.432 92.4646C103.464 92.2712 104.302 91.4656 105.301 90.5955C110.393 86.3738 114.55 79.2517 116.032 72.2263C120.479 51.408 104.27 31.3953 83 31.3953C61.7305 31.3953 45.5205 51.408 49.9678 72.2263C51.4502 79.2517 55.6074 86.3738 60.6992 90.5955C61.6982 91.4656 62.6006 92.2712 62.6973 92.4001C62.7939 92.5613 61.3115 93.3025 59.4424 94.0437C45.2949 99.7478 33.1455 111.027 26.5713 124.659C25.8945 126.045 25.2822 127.269 25.1855 127.334C24.96 127.592 19.9326 119.76 18.2891 116.57C4.85059 90.3699 8.42773 58.9812 27.5059 36.2292C42.4912 18.3435 66.1777 8.61108 89.6064 10.7703ZM88.9619 41.8044C97.6309 44.2214 104.366 51.0857 106.558 59.7546C106.815 60.7537 107.009 63.1384 107.009 65.2332C107.009 69.197 106.622 71.2917 105.301 74.4177C102.304 81.4753 95.9551 86.8894 88.4785 88.7908C86.1904 89.3708 79.8096 89.3708 77.5215 88.7908C70.0449 86.8894 63.6963 81.4753 60.6992 74.4177C59.3779 71.2917 58.9912 69.197 58.9912 65.2332C58.9912 61.2693 59.3779 59.1746 60.6992 56.0486C63.6963 48.9587 70.5283 43.158 77.5215 41.74C78.4883 41.5466 79.584 41.321 79.9385 41.2566C81.1309 40.9666 87.3184 41.3533 88.9619 41.8044ZM89.7998 99.5867C100.757 101.101 110.264 105.452 118.449 112.703C124.637 118.181 130.083 126.206 132.887 133.908L133.563 135.713L130.76 138.13C123.09 144.704 115.098 149.28 105.881 152.342C91.0244 157.304 74.9756 157.304 60.1191 152.342C50.9023 149.28 42.9102 144.704 35.2402 138.13L32.4365 135.713L33.1133 133.908C33.4678 132.909 34.4668 130.653 35.3369 128.881C45.166 108.61 67.6601 96.4929 89.7998 99.5867Z"
                      fill="var(--color-accent)"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_49_506">
                      <rect
                        width="165"
                        height="165"
                        fill="white"
                        transform="translate(0.5 0.780029)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <img src="img" alt="" />
              </div>
              <p className="user-profile__name">esfsfe</p>
              <p className="user-profile__type user-profile__type--company user-profile__type--people">
                organizacja wolontariusz
              </p>
            </div>
          </div>
          <div className="profile__edit">
            <form action="/vendor/editImg.php" method="post">
              <div className="profile__btn-img">
                <input
                  className="profile__input-file"
                  type="file"
                  accept="image/jpg, image/jpeg, image/webp, image/png"
                  name="ava"
                  id=""
                />
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.4375 12.3047C5.91458 12.3047 4.45403 11.6997 3.37716 10.6228C2.30029 9.54597 1.69531 8.08542 1.69531 6.5625C1.69531 5.03958 2.30029 3.57903 3.37716 2.50216C4.45403 1.42529 5.91458 0.820312 7.4375 0.820312C8.96042 0.820312 10.421 1.42529 11.4978 2.50216C12.5747 3.57903 13.1797 5.03958 13.1797 6.5625C13.1797 8.08542 12.5747 9.54597 11.4978 10.6228C10.421 11.6997 8.96042 12.3047 7.4375 12.3047ZM7.4375 13.125C9.17798 13.125 10.8472 12.4336 12.0779 11.2029C13.3086 9.97218 14 8.30298 14 6.5625C14 4.82202 13.3086 3.15282 12.0779 1.92211C10.8472 0.691404 9.17798 0 7.4375 0C5.69702 0 4.02782 0.691404 2.79711 1.92211C1.5664 3.15282 0.875 4.82202 0.875 6.5625C0.875 8.30298 1.5664 9.97218 2.79711 11.2029C4.02782 12.4336 5.69702 13.125 7.4375 13.125Z"
                    fill="#8D8D8D"
                  />
                  <path
                    d="M7.4375 3.28125C7.54628 3.28125 7.65061 3.32446 7.72752 3.40138C7.80444 3.4783 7.84766 3.58263 7.84766 3.69141V6.15234H10.3086C10.4174 6.15234 10.5217 6.19556 10.5986 6.27248C10.6755 6.3494 10.7188 6.45372 10.7188 6.5625C10.7188 6.67128 10.6755 6.77561 10.5986 6.85252C10.5217 6.92944 10.4174 6.97266 10.3086 6.97266H7.84766V9.43359C7.84766 9.54237 7.80444 9.6467 7.72752 9.72362C7.65061 9.80054 7.54628 9.84375 7.4375 9.84375C7.32872 9.84375 7.2244 9.80054 7.14748 9.72362C7.07056 9.6467 7.02734 9.54237 7.02734 9.43359V6.97266H4.56641C4.45763 6.97266 4.3533 6.92944 4.27638 6.85252C4.19946 6.77561 4.15625 6.67128 4.15625 6.5625C4.15625 6.45372 4.19946 6.3494 4.27638 6.27248C4.3533 6.19556 4.45763 6.15234 4.56641 6.15234H7.02734V3.69141C7.02734 3.58263 7.07056 3.4783 7.14748 3.40138C7.2244 3.32446 7.32872 3.28125 7.4375 3.28125Z"
                    fill="#8D8D8D"
                  />
                </svg>

                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.7593 4.27245C2.55723 2.89532 3.82845 1.85511 5.33625 1.34549C6.84406 0.83588 8.48568 0.891602 9.95546 1.50228C11.4252 2.11296 12.623 3.23698 13.3257 4.66505C14.0284 6.09311 14.1882 7.72789 13.7753 9.265C13.3624 10.8021 12.4049 12.1368 11.0812 13.0205C9.7575 13.9042 8.15773 14.2767 6.57978 14.0687C5.00184 13.8607 3.55327 13.0863 2.50379 11.8897C1.45431 10.6931 0.875452 9.15596 0.875 7.56436"
                    stroke="#8D8D8D"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.97656 4.28338H1.69531V1.00214"
                    stroke="#8D8D8D"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p className="profile__label-img">
                  Dodaj zdjęcie Zmień zdjęcie
                </p>
              </div>
              <button
                className="profile__change-img"
                style={{ opacity: 0, pointerEvents: "none" }}
              >
                Change picture
              </button>
            </form>
            <form
              action="/vendor/editProfile.php"
              method="post"
              className="profile__form form"
            >
              <div className="form__row">
                <div>
                  <input
                    className="form__input"
                    type="radio"
                    name="type"
                    id="type-people"
                    value="1"
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
                  />
                  <label htmlFor="type-company">Organizacja</label>
                </div>
              </div>
              <div className="form__row">
                <input
                  className="form__input"
                  type="text"
                  name="job"
                  placeholder="Twoja profesja"
                  value="de"
                />
              </div>
              <div className="form__row">
                <input
                  className="form__input"
                  type="text"
                  name="city"
                  placeholder="Obecne miasto"
                  value="sef"
                />
              </div>
              <div className="form__row">
                <input
                  className="form__input"
                  type="text"
                  name="date"
                  placeholder="Data urodzenia"
                  value="lkmk"
                />
              </div>
              <div className="form__row lock-form">
                <div className="form__checkbox">
                  <div className="switch">
                    <input type="checkbox" name="lock" id="lock" value="1" />
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
              <input
                type="hidden"
                value="<?= $_SESSION['user']['id'] ?>"
                name="id"
              />
              <button className="form__btn">Zapisz ustawienia</button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Edit;
