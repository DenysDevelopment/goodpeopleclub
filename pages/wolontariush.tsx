import Image from "next/image";
import React from "react";
import { Layout } from "../src/components/layout";

import join1Img from "/src/img/join-1.jpg";
import join2Img from "/src/img/join-2.jpg";
import join3Img from "/src/img/join-3.jpg";

const wolontariush = () => {
  return (
    <Layout>
      <section className="join-to-team section">
        <div className="container">
          <h1 className="join-to-team__title section__title">
            Chcesz zostać wolontariuszem?
          </h1>
          <div className="join-to-team__body">
            <div className="card-join">
              <div className="card-join__img">
                <Image src={join1Img} alt={""} fill sizes="100%" />
              </div>
              <p className="card-join__text">
                Nasi wolontariusze pomagają każdemu, kto oddycha z nami tym
                samym powietrzem. Oprócz opłat wykonujemy różne prace, aby pomóc
                tym, którzy naprawdę tego potrzebują. Wypełnij formularz, a my
                znajdziemy dla Ciebie odpowiednią pracę!
              </p>
            </div>
            <div className="card-join card-join--reverse">
              <div className="card-join__img">
                <Image src={join2Img} alt="" fill sizes="100%" />
              </div>
              <p className="card-join__text">
                Nasi wolontariusze pomagają każdemu, kto oddycha z nami tym
                samym powietrzem. Oprócz opłat wykonujemy różne prace, aby pomóc
                tym, którzy naprawdę tego potrzebują. Wypełnij formularz, a my
                znajdziemy dla Ciebie odpowiednią pracę!
              </p>
            </div>
            <div className="card-join">
              <div className="card-join__img">
                <Image src={join3Img} alt="" fill sizes="100%" />
              </div>
              <p className="card-join__text">
                Nasi wolontariusze pomagają każdemu, kto oddycha z nami tym
                samym powietrzem. Oprócz opłat wykonujemy różne prace, aby pomóc
                tym, którzy naprawdę tego potrzebują. Wypełnij formularz, a my
                znajdziemy dla Ciebie odpowiednią pracę!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-us section">
        <div className="container">
          <h2 className="contact-us__title section__title">
            Zostań częścią naszego zespołu
          </h2>
          <div className="contact-us__body">
            <form
              className="contact-us__form form"
              action="tg-join-team.php"
              method="post"
            >
              <div className="form__icon">
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.38609 2.54336C0.837593 1.65798 2.12403 0.473444 2.91171 0.217741C5.03815 -0.472763 7.47977 0.529833 8.48515 2.5063C8.7389 3.00512 8.89658 3.13439 9.16433 3.06328C9.71226 2.91823 11.7988 3.34345 12.7617 3.79652C13.2429 4.02296 14.0897 4.62339 14.6434 5.13071L15.6501 6.05316L16.5333 5.86112C17.6729 5.61357 20.803 5.6141 21.9445 5.86218L22.8319 6.05493L23.8636 5.08709C25.2253 3.80964 26.1279 3.39151 28.0391 3.15318C29.6085 2.95742 29.6153 2.95422 29.9863 2.28553C30.9998 0.458372 33.1999 -0.407507 35.3162 0.187951C36.1662 0.427163 37.6439 1.79771 38.0712 2.74338C38.535 3.76957 38.4995 5.35538 37.9879 6.46845C37.584 7.34728 36.6219 8.36512 35.8645 8.71481C35.5279 8.87015 35.4576 9.07797 35.3647 10.1919C35.2122 12.02 34.7138 13.2185 33.4939 14.6907C32.4511 15.9491 32.4481 15.9561 32.6191 16.7074C32.7136 17.1222 32.7907 18.379 32.7907 19.5006C32.7907 20.6222 32.7136 21.8791 32.6191 22.2938C32.4481 23.0452 32.4511 23.0521 33.4939 24.3106C34.7138 25.7827 35.2122 26.9813 35.3647 28.8093C35.4576 29.9233 35.5279 30.1311 35.8645 30.2864C37.2995 30.9489 38.3948 32.7475 38.3976 34.4459C38.3999 35.7392 38.0551 36.5822 37.1224 37.5642C36.1441 38.5941 35.2458 38.9986 33.9368 38.9986C32.2841 38.9986 30.6643 38.0515 29.9191 36.6494C29.6041 36.0568 29.5595 36.0378 28.0304 35.847C26.1305 35.6099 25.2233 35.1898 23.8699 33.92L22.8444 32.958L21.7406 33.1674C20.3233 33.4364 17.9421 33.4345 16.654 33.1635L15.6462 32.9516L14.6415 33.8595C13.224 35.1402 12.0951 35.6533 10.2143 35.8722C8.91443 36.0234 8.6353 36.111 8.54588 36.397C8.34795 37.0289 7.17072 38.1712 6.28661 38.5891C5.31063 39.0507 4.10207 39.1279 3.01531 38.7979C2.13785 38.5315 0.866644 37.4 0.38609 36.4579C-0.0545634 35.5939 -0.131564 33.7983 0.226839 32.7477C0.491791 31.971 1.9926 30.3703 2.60091 30.2157C2.98608 30.1176 3.01881 30.0116 3.07901 28.6623C3.16021 26.8475 3.70551 25.5756 4.99405 24.1949L5.90808 23.2158L5.70351 22.0913C5.44205 20.6529 5.44205 18.3484 5.70351 16.9099L5.90808 15.7855L4.99405 14.8063C3.71112 13.4317 3.16021 12.1519 3.07989 10.3599C3.01723 8.95704 3.00673 8.92866 2.47106 8.68839C1.70175 8.34331 0.490566 7.02543 0.223164 6.24236C-0.131914 5.20218 -0.0528134 3.40392 0.38609 2.54336ZM6.54911 4.63757C6.54911 3.62097 6.11213 2.90617 5.28578 2.5712C4.44805 2.23162 4.3448 2.23499 3.48309 2.63167C2.67213 3.00494 2.34908 3.58355 2.34908 4.66293C2.34908 5.86856 3.22601 6.7332 4.4491 6.7332C5.68251 6.7332 6.54911 5.86839 6.54911 4.63757ZM36.0536 5.04382C36.2206 4.36981 35.8027 3.21294 35.2493 2.81733C33.8441 1.81296 31.9849 2.61075 31.7971 4.29888C31.6347 5.75809 32.5303 6.7332 34.0331 6.7332C34.6232 6.7332 34.8691 6.62202 35.344 6.14076C35.6657 5.81483 35.9849 5.32134 36.0536 5.04382ZM12.5979 6.46384C12.2552 6.1991 11.6795 5.87548 11.3182 5.74497C10.957 5.61428 10.2899 5.50398 9.83546 5.49973L9.00946 5.49192L8.55795 6.45906C8.0557 7.53436 7.44022 8.13513 6.17408 8.78521C5.41423 9.1755 5.3241 9.2842 5.3241 9.81121C5.3241 10.6553 5.75006 11.9725 6.29064 12.8004L6.75631 13.5132L7.47312 12.2955C8.36213 10.7847 10.6681 8.45361 12.1248 7.59287L13.2207 6.94528L12.5979 6.46384ZM32.2243 8.79638C31.2728 8.42825 29.9624 7.07402 29.6605 6.14696C29.4543 5.51427 29.4193 5.4921 28.6294 5.49973C28.1798 5.50398 27.5269 5.61073 27.1786 5.73681C26.4427 6.00333 25.2743 6.70678 25.2743 6.88357C25.2743 6.95042 25.7221 7.27635 26.2693 7.60812C27.6767 8.46106 29.7755 10.5556 30.7002 12.0301C31.1328 12.7199 31.5656 13.2604 31.6618 13.2308C31.7581 13.2013 32.0638 12.8061 32.3412 12.3525C32.727 11.7215 32.8656 11.2428 32.9311 10.3153L33.0168 9.10297L32.2243 8.79638ZM30.4774 20.1943C30.795 14.4926 26.9782 9.41719 21.4862 8.23816C20.2116 7.96455 18.7548 7.9344 17.2945 8.15127C13.2333 8.75471 9.56351 12.0489 8.30578 16.2201C7.77832 17.9692 7.77832 21.032 8.30578 22.7811C10.3118 29.4335 17.7135 32.8686 23.8116 29.977C27.8191 28.0768 30.2359 24.5301 30.4774 20.1943ZM19.0187 15.9266C17.2718 15.253 17.1869 12.7571 18.8867 12.0448C20.0898 11.5405 21.4242 12.5027 21.4242 13.8744C21.4242 15.3723 20.2277 16.393 19.0187 15.9266ZM20.5492 13.958C20.5492 13.7044 20.4255 13.3715 20.2743 13.2182C19.9488 12.8885 19.1315 12.8511 18.8342 13.1524C18.5346 13.456 18.5745 14.4598 18.8991 14.7889C19.5151 15.4131 20.5492 14.8923 20.5492 13.958ZM16.0095 19.9306C14.169 19.3768 12.6742 17.1828 12.6742 15.0356V14.1303L13.7308 14.2422C16.0891 14.4921 17.6685 15.758 18.5239 18.0843C19.2936 20.1775 19.3081 20.2099 19.4752 20.2099C19.5624 20.2099 19.8445 19.6315 20.1023 18.9243C20.7319 17.1973 21.2471 16.3419 22.1858 15.4652C23.0636 14.6455 24.4803 14.1225 25.5753 14.2142C26.22 14.2681 26.2382 14.2888 26.291 15.0338C26.4154 16.7836 25.0328 18.958 23.2652 19.792C22.2686 20.2622 21.2868 20.3385 21.1425 19.9569C21.0051 19.5944 21.6267 18.2647 22.2921 17.4967C23.1242 16.5364 23.2526 16.6936 22.6403 17.9226C22.3439 18.5177 22.1393 19.0429 22.1857 19.0901C22.3825 19.2896 23.8615 18.4299 24.2816 17.8719C24.8168 17.1608 25.2743 16.1162 25.2743 15.6051C25.2743 15.1161 24.7195 15.1368 23.6117 15.6674C22.1419 16.3715 21.2414 17.6905 20.9942 19.5006L20.8854 20.2986L21.7865 20.8306C23.7691 22.0009 24.9243 23.8735 24.9243 25.9166C24.9243 26.8859 24.8681 26.9114 23.6527 26.4917C22.0548 25.94 20.6875 24.3224 20.1177 22.3094C19.8263 21.2804 19.394 20.8527 19.2087 21.4099C18.8242 22.5655 17.6589 24.6764 17.0579 25.3057C16.2395 26.1629 15.6529 26.5103 14.7262 26.6865C13.8976 26.844 13.7761 26.5725 14.0376 25.1481C14.4121 23.1074 15.5323 21.6079 17.3176 20.7577C18.0392 20.414 18.099 20.3344 18.0975 19.7214C18.0952 18.8243 17.4134 17.4266 16.5889 16.6288C15.8529 15.9167 14.5775 15.2549 13.9291 15.2487C13.5602 15.2452 13.5331 15.2996 13.6442 15.8211C13.8136 16.617 14.3106 17.5635 14.8032 18.0292C15.2392 18.4411 16.5058 19.0465 16.6423 18.908C16.6866 18.8631 16.5193 18.4196 16.2704 17.9222C16.0218 17.425 15.9045 17.0181 16.0097 17.0181C16.6253 17.0181 17.9329 19.2917 17.6885 19.9372C17.5577 20.2826 17.1741 20.281 16.0095 19.9306ZM15.1863 25.3516C15.9638 25.3492 17.2233 23.9605 17.7697 22.5036C17.9592 21.9982 18.0892 21.5594 18.0588 21.5283C17.8895 21.357 16.5412 22.1937 16.1555 22.7093C15.3055 23.8456 14.7525 25.3531 15.1863 25.3516ZM23.9406 25.0332C23.7453 24.19 22.9534 22.8691 22.2658 22.2396C21.6339 21.6611 20.8992 21.4253 20.8992 21.8007C20.8992 21.8956 21.0856 22.4001 21.3133 22.9217C21.7779 23.9862 22.7693 25.059 23.5398 25.3312C24.0352 25.5063 24.048 25.4969 23.9406 25.0332ZM12.1248 31.4084C10.719 30.5778 8.3819 28.2396 7.53384 26.8153C7.17072 26.2058 6.80409 25.707 6.71886 25.707C6.27051 25.707 5.32708 28.0757 5.32515 29.2062C5.32428 29.7142 5.42105 29.8293 6.17408 30.216C7.44022 30.8661 8.0557 31.4669 8.55795 32.5422L9.00946 33.5093L9.83546 33.5015C10.8547 33.4919 11.7811 33.1685 12.5979 32.5374L13.2207 32.0559L12.1248 31.4084ZM32.9743 29.0629C32.9743 28.1138 32.622 26.9829 32.0911 26.2273C31.89 25.9411 31.6706 25.707 31.6034 25.707C31.536 25.707 31.2133 26.1608 30.8858 26.7153C30.0441 28.1413 27.977 30.268 26.5218 31.205C25.8411 31.6433 25.3058 32.0747 25.3322 32.1636C25.4608 32.5939 27.2572 33.3776 28.3116 33.4632L29.4104 33.5527L29.7132 32.7495C30.0712 31.7995 31.3995 30.4685 32.3298 30.1277C32.9474 29.9014 32.9743 29.8568 32.9743 29.0629ZM6.54911 34.3555C6.54911 33.4776 6.22361 32.9137 5.49718 32.533C4.50212 32.0116 3.01513 32.4021 2.53528 33.3109C2.26928 33.8143 2.30533 35.0371 2.60336 35.6211C3.04384 36.4841 4.37105 36.82 5.48826 36.3511C6.17374 36.0633 6.54911 35.3574 6.54911 34.3555ZM35.5867 35.8791C36.3648 34.8768 36.2094 33.557 35.2133 32.7078C34.2207 31.8614 32.4224 32.2911 31.9315 33.4917C31.6273 34.2358 31.7987 35.3902 32.2923 35.9227C33.1371 36.8336 34.8635 36.8109 35.5867 35.8791Z"
                    fill="#285CC4"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="form__input"
                name="name"
                placeholder="Twoje imię"
              />
              <input
                type="email"
                className="form__input"
                name="email"
                placeholder="E-mail"
              />
              <input
                type="tel"
                className="form__input"
                name="tel"
                placeholder="Numer telefonu"
              />
              <textarea
                name="text"
                className="form__input form__input--textarea"
                placeholder="Jak możesz pomóc wysłać"
              ></textarea>
              <button className="form__btn">Wysłać</button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default wolontariush;
