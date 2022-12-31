import Link from "next/link";
import React from "react";
import { Layout } from "../src/components/layout";

const podarowac = (): JSX.Element => {
	return (
		<>
			<Layout>
				<section className='help-who section'>
					<h2 className='help-who__title section__title'>Dlaczego pomagamy</h2>
					<div className='container'>
						<div className='help-who__body'>
							<div className='help-who__text'>
								<b className='help-who__txt'>
									Pomoc nie jest ani groszem. Golovnya - matka bazhannya zmienia
									ten świat na lepsze życie. Praca funduszu była więcej niż
									możliwa dla startu wspaniałego zespołu o tym samym umyśle.
								</b>
								<p className='help-who__txt'>
									Dziś dzieciom pomaga ponad 100 stałych wolontariuszy: aktorzy,
									fotografowie, projektanci, prawnicy, tłumacze, tłumacze, a
									także wiele innych dziwnych ludzi różnych zawodów. Czy
									potrzebuję wolontariuszy, aby przyszli i prosili o przyjście
									do zespołu!
								</p>
							</div>
							<div className='help-who__img'>
								<picture>
									<source srcSet='/img/pomagamy.webp' type='image/webp' />
									<img src='/img/pomagamy.jpg' alt='' />
								</picture>
							</div>
						</div>
					</div>
				</section>
				<section className='what-help section'>
					<div className='container'>
						<h2 className='what-help__title section__title'>
							Kto potrzebuje twojej pomocy
						</h2>
						<div className='what-help__body'>
							<div className='help-card'>
								<h3 className='help-card__title'>
									Remont stoiska bagatokvartirny w Gostomel
								</h3>
								<p className='help-card__desc'>
									Povnistyu znischeny 5 pod groźbą zniszczenia całego domu.
									Jeśli nie przykryjesz domów dahomem, musisz użyć wszystkich
									worków bagatovki.
								</p>
								<div className='help-card__body'>
									<div className='help-card__user'>
										<div className='help-card__avatar'>
											<picture>
												<source srcSet='./img/ava.webp' type='image/webp' />
												<img src='./img/ava.jpg' alt='' />
											</picture>
										</div>
										<p className='help-card__name'>Flash Slothmore</p>
										<p className='help-card__type help-card__type--wolont'>
											organizacja
										</p>
									</div>
									<button className='help-card__btn'>
										<svg
											width='19'
											height='17'
											viewBox='0 0 19 17'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M2.03435 8.66656C0.195507 6.22207 0.808454 2.55535 3.87319 1.33311C6.93792 0.110872 8.77676 2.55535 9.38971 3.77759C10.0027 2.55535 12.4544 0.110872 15.5192 1.33311C18.5839 2.55535 18.5839 6.22207 16.7451 8.66656C14.9062 11.111 9.38971 16 9.38971 16C9.38971 16 3.87319 11.111 2.03435 8.66656Z'
												fill='white'
												stroke='white'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
										<span>Podarować</span>
									</button>
								</div>
								<div className='help-card__footer'>
									<div className='help-card__range range-help-card'>
										<div className='range-help-card__txt'>postęp</div>
										<div className='range-help-card__range'>
											<div className='range-help-card__progress'></div>
										</div>
									</div>
									<button className='help-card__more'>
										<span>Zobacz więcej</span>
										<svg
											width='15'
											height='8'
											viewBox='0 0 15 8'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464467C10.9763 0.269205 10.6597 0.269205 10.4645 0.464467C10.2692 0.659729 10.2692 0.976312 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM-4.37114e-08 4.5L14 4.5L14 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z'
												fill='#285CC4'
											/>
										</svg>
									</button>
								</div>
							</div>
							<div className='help-card'>
								<h3 className='help-card__title'>
									Remont stoiska bagatokvartirny w Gostomel
								</h3>
								<p className='help-card__desc'>
									Povnistyu znischeny 5 pod groźbą zniszczenia całego domu.
									Jeśli nie przykryjesz domów dahomem, musisz użyć wszystkich
									worków bagatovki.
								</p>
								<div className='help-card__body'>
									<div className='help-card__user'>
										<div className='help-card__avatar'>
											<picture>
												<source srcSet='./img/ava.webp' type='image/webp' />
												<img src='./img/ava.jpg' alt='' />
											</picture>
										</div>
										<p className='help-card__name'>Flash Slothmore</p>
										<p className='help-card__type help-card__type--wolont'>
											organizacja
										</p>
									</div>
									<button className='help-card__btn'>
										<svg
											width='19'
											height='17'
											viewBox='0 0 19 17'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M2.03435 8.66656C0.195507 6.22207 0.808454 2.55535 3.87319 1.33311C6.93792 0.110872 8.77676 2.55535 9.38971 3.77759C10.0027 2.55535 12.4544 0.110872 15.5192 1.33311C18.5839 2.55535 18.5839 6.22207 16.7451 8.66656C14.9062 11.111 9.38971 16 9.38971 16C9.38971 16 3.87319 11.111 2.03435 8.66656Z'
												fill='white'
												stroke='white'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
										<span>Podarować</span>
									</button>
								</div>
								<div className='help-card__footer'>
									<div className='help-card__range range-help-card'>
										<div className='range-help-card__txt'>postęp</div>
										<div className='range-help-card__range'>
											<div className='range-help-card__progress'></div>
										</div>
									</div>
									<button className='help-card__more'>
										<span>Zobacz więcej</span>
										<svg
											width='15'
											height='8'
											viewBox='0 0 15 8'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464467C10.9763 0.269205 10.6597 0.269205 10.4645 0.464467C10.2692 0.659729 10.2692 0.976312 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM-4.37114e-08 4.5L14 4.5L14 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z'
												fill='#285CC4'
											/>
										</svg>
									</button>
								</div>
							</div>
							<div className='help-card'>
								<h3 className='help-card__title'>
									Remont stoiska bagatokvartirny w Gostomel
								</h3>
								<p className='help-card__desc'>
									Povnistyu znischeny 5 pod groźbą zniszczenia całego domu.
									Jeśli nie przykryjesz domów dahomem, musisz użyć wszystkich
									worków bagatovki.
								</p>
								<div className='help-card__body'>
									<div className='help-card__user'>
										<div className='help-card__avatar'>
											<picture>
												<source srcSet='./img/ava.webp' type='image/webp' />
												<img src='./img/ava.jpg' alt='' />
											</picture>
										</div>
										<p className='help-card__name'>Flash Slothmore</p>
										<p className='help-card__type help-card__type--wolont'>
											organizacja
										</p>
									</div>
									<button className='help-card__btn'>
										<svg
											width='19'
											height='17'
											viewBox='0 0 19 17'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M2.03435 8.66656C0.195507 6.22207 0.808454 2.55535 3.87319 1.33311C6.93792 0.110872 8.77676 2.55535 9.38971 3.77759C10.0027 2.55535 12.4544 0.110872 15.5192 1.33311C18.5839 2.55535 18.5839 6.22207 16.7451 8.66656C14.9062 11.111 9.38971 16 9.38971 16C9.38971 16 3.87319 11.111 2.03435 8.66656Z'
												fill='white'
												stroke='white'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
										<span>Podarować</span>
									</button>
								</div>
								<div className='help-card__footer'>
									<div className='help-card__range range-help-card'>
										<div className='range-help-card__txt'>postęp</div>
										<div className='range-help-card__range'>
											<div className='range-help-card__progress'></div>
										</div>
									</div>
									<button className='help-card__more'>
										<span>Zobacz więcej</span>
										<svg
											width='15'
											height='8'
											viewBox='0 0 15 8'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464467C10.9763 0.269205 10.6597 0.269205 10.4645 0.464467C10.2692 0.659729 10.2692 0.976312 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM-4.37114e-08 4.5L14 4.5L14 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z'
												fill='#285CC4'
											/>
										</svg>
									</button>
								</div>
							</div>
							<div className='help-card'>
								<h3 className='help-card__title'>
									Remont stoiska bagatokvartirny w Gostomel
								</h3>
								<p className='help-card__desc'>
									Povnistyu znischeny 5 pod groźbą zniszczenia całego domu.
									Jeśli nie przykryjesz domów dahomem, musisz użyć wszystkich
									worków bagatovki.
								</p>
								<div className='help-card__body'>
									<div className='help-card__user'>
										<div className='help-card__avatar'>
											<picture>
												<source srcSet='./img/ava.webp' type='image/webp' />
												<img src='./img/ava.jpg' alt='' />
											</picture>
										</div>
										<p className='help-card__name'>Flash Slothmore</p>
										<p className='help-card__type help-card__type--wolont'>
											organizacja
										</p>
									</div>
									<button className='help-card__btn'>
										<svg
											width='19'
											height='17'
											viewBox='0 0 19 17'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M2.03435 8.66656C0.195507 6.22207 0.808454 2.55535 3.87319 1.33311C6.93792 0.110872 8.77676 2.55535 9.38971 3.77759C10.0027 2.55535 12.4544 0.110872 15.5192 1.33311C18.5839 2.55535 18.5839 6.22207 16.7451 8.66656C14.9062 11.111 9.38971 16 9.38971 16C9.38971 16 3.87319 11.111 2.03435 8.66656Z'
												fill='white'
												stroke='white'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
										<span>Podarować</span>
									</button>
								</div>
								<div className='help-card__footer'>
									<div className='help-card__range range-help-card'>
										<div className='range-help-card__txt'>postęp</div>
										<div className='range-help-card__range'>
											<div className='range-help-card__progress'></div>
										</div>
									</div>
									<button className='help-card__more'>
										<span>Zobacz więcej</span>
										<svg
											width='15'
											height='8'
											viewBox='0 0 15 8'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464467C10.9763 0.269205 10.6597 0.269205 10.4645 0.464467C10.2692 0.659729 10.2692 0.976312 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM-4.37114e-08 4.5L14 4.5L14 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z'
												fill='#285CC4'
											/>
										</svg>
									</button>
								</div>
							</div>
							<div className='help-card'>
								<h3 className='help-card__title'>
									Remont stoiska bagatokvartirny w Gostomel
								</h3>
								<p className='help-card__desc'>
									Povnistyu znischeny 5 pod groźbą zniszczenia całego domu.
									Jeśli nie przykryjesz domów dahomem, musisz użyć wszystkich
									worków bagatovki.
								</p>
								<div className='help-card__body'>
									<div className='help-card__user'>
										<div className='help-card__avatar'>
											<picture>
												<source srcSet='./img/ava.webp' type='image/webp' />
												<img src='./img/ava.jpg' alt='' />
											</picture>
										</div>
										<p className='help-card__name'>Flash Slothmore</p>
										<p className='help-card__type help-card__type--wolont'>
											organizacja
										</p>
									</div>
									<button className='help-card__btn'>
										<svg
											width='19'
											height='17'
											viewBox='0 0 19 17'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M2.03435 8.66656C0.195507 6.22207 0.808454 2.55535 3.87319 1.33311C6.93792 0.110872 8.77676 2.55535 9.38971 3.77759C10.0027 2.55535 12.4544 0.110872 15.5192 1.33311C18.5839 2.55535 18.5839 6.22207 16.7451 8.66656C14.9062 11.111 9.38971 16 9.38971 16C9.38971 16 3.87319 11.111 2.03435 8.66656Z'
												fill='white'
												stroke='white'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
										<span>Podarować</span>
									</button>
								</div>
								<div className='help-card__footer'>
									<div className='help-card__range range-help-card'>
										<div className='range-help-card__txt'>postęp</div>
										<div className='range-help-card__range'>
											<div className='range-help-card__progress'></div>
										</div>
									</div>
									<button className='help-card__more'>
										<span>Zobacz więcej</span>
										<svg
											width='15'
											height='8'
											viewBox='0 0 15 8'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464467C10.9763 0.269205 10.6597 0.269205 10.4645 0.464467C10.2692 0.659729 10.2692 0.976312 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM-4.37114e-08 4.5L14 4.5L14 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z'
												fill='#285CC4'
											/>
										</svg>
									</button>
								</div>
							</div>
							<div className='help-card'>
								<h3 className='help-card__title'>
									Remont stoiska bagatokvartirny w Gostomel
								</h3>
								<p className='help-card__desc'>
									Povnistyu znischeny 5 pod groźbą zniszczenia całego domu.
									Jeśli nie przykryjesz domów dahomem, musisz użyć wszystkich
									worków bagatovki.
								</p>
								<div className='help-card__body'>
									<div className='help-card__user'>
										<div className='help-card__avatar'>
											<picture>
												<source srcSet='./img/ava.webp' type='image/webp' />
												<img src='./img/ava.jpg' alt='' />
											</picture>
										</div>
										<p className='help-card__name'>Flash Slothmore</p>
										<p className='help-card__type help-card__type--wolont'>
											organizacja
										</p>
									</div>
									<button className='help-card__btn'>
										<svg
											width='19'
											height='17'
											viewBox='0 0 19 17'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M2.03435 8.66656C0.195507 6.22207 0.808454 2.55535 3.87319 1.33311C6.93792 0.110872 8.77676 2.55535 9.38971 3.77759C10.0027 2.55535 12.4544 0.110872 15.5192 1.33311C18.5839 2.55535 18.5839 6.22207 16.7451 8.66656C14.9062 11.111 9.38971 16 9.38971 16C9.38971 16 3.87319 11.111 2.03435 8.66656Z'
												fill='white'
												stroke='white'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
										<span>Podarować</span>
									</button>
								</div>
								<div className='help-card__footer'>
									<div className='help-card__range range-help-card'>
										<div className='range-help-card__txt'>postęp</div>
										<div className='range-help-card__range'>
											<div className='range-help-card__progress'></div>
										</div>
									</div>
									<button className='help-card__more'>
										<span>Zobacz więcej</span>
										<svg
											width='15'
											height='8'
											viewBox='0 0 15 8'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464467C10.9763 0.269205 10.6597 0.269205 10.4645 0.464467C10.2692 0.659729 10.2692 0.976312 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM-4.37114e-08 4.5L14 4.5L14 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z'
												fill='#285CC4'
											/>
										</svg>
									</button>
								</div>
							</div>
							<div className='help-card'>
								<h3 className='help-card__title'>
									Remont stoiska bagatokvartirny w Gostomel
								</h3>
								<p className='help-card__desc'>
									Povnistyu znischeny 5 pod groźbą zniszczenia całego domu.
									Jeśli nie przykryjesz domów dahomem, musisz użyć wszystkich
									worków bagatovki.
								</p>
								<div className='help-card__body'>
									<div className='help-card__user'>
										<div className='help-card__avatar'>
											<picture>
												<source srcSet='./img/ava.webp' type='image/webp' />
												<img src='./img/ava.jpg' alt='' />
											</picture>
										</div>
										<p className='help-card__name'>Flash Slothmore</p>
										<p className='help-card__type help-card__type--wolont'>
											organizacja
										</p>
									</div>
									<button className='help-card__btn'>
										<svg
											width='19'
											height='17'
											viewBox='0 0 19 17'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M2.03435 8.66656C0.195507 6.22207 0.808454 2.55535 3.87319 1.33311C6.93792 0.110872 8.77676 2.55535 9.38971 3.77759C10.0027 2.55535 12.4544 0.110872 15.5192 1.33311C18.5839 2.55535 18.5839 6.22207 16.7451 8.66656C14.9062 11.111 9.38971 16 9.38971 16C9.38971 16 3.87319 11.111 2.03435 8.66656Z'
												fill='white'
												stroke='white'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
										<span>Podarować</span>
									</button>
								</div>
								<div className='help-card__footer'>
									<div className='help-card__range range-help-card'>
										<div className='range-help-card__txt'>postęp</div>
										<div className='range-help-card__range'>
											<div className='range-help-card__progress'></div>
										</div>
									</div>
									<button className='help-card__more'>
										<span>Zobacz więcej</span>
										<svg
											width='15'
											height='8'
											viewBox='0 0 15 8'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464467C10.9763 0.269205 10.6597 0.269205 10.4645 0.464467C10.2692 0.659729 10.2692 0.976312 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM-4.37114e-08 4.5L14 4.5L14 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z'
												fill='#285CC4'
											/>
										</svg>
									</button>
								</div>
							</div>
							<div className='help-card'>
								<h3 className='help-card__title'>
									Remont stoiska bagatokvartirny w Gostomel
								</h3>
								<p className='help-card__desc'>
									Povnistyu znischeny 5 pod groźbą zniszczenia całego domu.
									Jeśli nie przykryjesz domów dahomem, musisz użyć wszystkich
									worków bagatovki.
								</p>
								<div className='help-card__body'>
									<div className='help-card__user'>
										<div className='help-card__avatar'>
											<picture>
												<source srcSet='./img/ava.webp' type='image/webp' />
												<img src='./img/ava.jpg' alt='' />
											</picture>
										</div>
										<p className='help-card__name'>Flash Slothmore</p>
										<p className='help-card__type help-card__type--wolont'>
											organizacja
										</p>
									</div>
									<button className='help-card__btn'>
										<svg
											width='19'
											height='17'
											viewBox='0 0 19 17'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M2.03435 8.66656C0.195507 6.22207 0.808454 2.55535 3.87319 1.33311C6.93792 0.110872 8.77676 2.55535 9.38971 3.77759C10.0027 2.55535 12.4544 0.110872 15.5192 1.33311C18.5839 2.55535 18.5839 6.22207 16.7451 8.66656C14.9062 11.111 9.38971 16 9.38971 16C9.38971 16 3.87319 11.111 2.03435 8.66656Z'
												fill='white'
												stroke='white'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
										<span>Podarować</span>
									</button>
								</div>
								<div className='help-card__footer'>
									<div className='help-card__range range-help-card'>
										<div className='range-help-card__txt'>postęp</div>
										<div className='range-help-card__range'>
											<div className='range-help-card__progress'></div>
										</div>
									</div>
									<button className='help-card__more'>
										<span>Zobacz więcej</span>
										<svg
											width='15'
											height='8'
											viewBox='0 0 15 8'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464467C10.9763 0.269205 10.6597 0.269205 10.4645 0.464467C10.2692 0.659729 10.2692 0.976312 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM-4.37114e-08 4.5L14 4.5L14 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z'
												fill='#285CC4'
											/>
										</svg>
									</button>
								</div>
							</div>
							<div className='help-card'>
								<h3 className='help-card__title'>
									Remont stoiska bagatokvartirny w Gostomel
								</h3>
								<p className='help-card__desc'>
									Povnistyu znischeny 5 pod groźbą zniszczenia całego domu.
									Jeśli nie przykryjesz domów dahomem, musisz użyć wszystkich
									worków bagatovki.
								</p>
								<div className='help-card__body'>
									<div className='help-card__user'>
										<div className='help-card__avatar'>
											<picture>
												<source srcSet='./img/ava.webp' type='image/webp' />
												<img src='./img/ava.jpg' alt='' />
											</picture>
										</div>
										<p className='help-card__name'>Flash Slothmore</p>
										<p className='help-card__type help-card__type--wolont'>
											organizacja
										</p>
									</div>
									<button className='help-card__btn'>
										<svg
											width='19'
											height='17'
											viewBox='0 0 19 17'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M2.03435 8.66656C0.195507 6.22207 0.808454 2.55535 3.87319 1.33311C6.93792 0.110872 8.77676 2.55535 9.38971 3.77759C10.0027 2.55535 12.4544 0.110872 15.5192 1.33311C18.5839 2.55535 18.5839 6.22207 16.7451 8.66656C14.9062 11.111 9.38971 16 9.38971 16C9.38971 16 3.87319 11.111 2.03435 8.66656Z'
												fill='white'
												stroke='white'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
										<span>Podarować</span>
									</button>
								</div>
								<div className='help-card__footer'>
									<div className='help-card__range range-help-card'>
										<div className='range-help-card__txt'>postęp</div>
										<div className='range-help-card__range'>
											<div className='range-help-card__progress'></div>
										</div>
									</div>
									<button className='help-card__more'>
										<span>Zobacz więcej</span>
										<svg
											width='15'
											height='8'
											viewBox='0 0 15 8'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464467C10.9763 0.269205 10.6597 0.269205 10.4645 0.464467C10.2692 0.659729 10.2692 0.976312 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM-4.37114e-08 4.5L14 4.5L14 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z'
												fill='#285CC4'
											/>
										</svg>
									</button>
								</div>
							</div>
							<div className='help-card'>
								<h3 className='help-card__title'>
									Remont stoiska bagatokvartirny w Gostomel
								</h3>
								<p className='help-card__desc'>
									Povnistyu znischeny 5 pod groźbą zniszczenia całego domu.
									Jeśli nie przykryjesz domów dahomem, musisz użyć wszystkich
									worków bagatovki.
								</p>
								<div className='help-card__body'>
									<div className='help-card__user'>
										<div className='help-card__avatar'>
											<picture>
												<source srcSet='./img/ava.webp' type='image/webp' />
												<img src='./img/ava.jpg' alt='' />
											</picture>
										</div>
										<p className='help-card__name'>Flash Slothmore</p>
										<p className='help-card__type help-card__type--wolont'>
											organizacja
										</p>
									</div>
									<button className='help-card__btn'>
										<svg
											width='19'
											height='17'
											viewBox='0 0 19 17'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M2.03435 8.66656C0.195507 6.22207 0.808454 2.55535 3.87319 1.33311C6.93792 0.110872 8.77676 2.55535 9.38971 3.77759C10.0027 2.55535 12.4544 0.110872 15.5192 1.33311C18.5839 2.55535 18.5839 6.22207 16.7451 8.66656C14.9062 11.111 9.38971 16 9.38971 16C9.38971 16 3.87319 11.111 2.03435 8.66656Z'
												fill='white'
												stroke='white'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
										<span>Podarować</span>
									</button>
								</div>
								<div className='help-card__footer'>
									<div className='help-card__range range-help-card'>
										<div className='range-help-card__txt'>postęp</div>
										<div className='range-help-card__range'>
											<div className='range-help-card__progress'></div>
										</div>
									</div>
									<button className='help-card__more'>
										<span>Zobacz więcej</span>
										<svg
											width='15'
											height='8'
											viewBox='0 0 15 8'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464467C10.9763 0.269205 10.6597 0.269205 10.4645 0.464467C10.2692 0.659729 10.2692 0.976312 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM-4.37114e-08 4.5L14 4.5L14 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z'
												fill='#285CC4'
											/>
										</svg>
									</button>
								</div>
							</div>
							<div className='help-card'>
								<h3 className='help-card__title'>
									Remont stoiska bagatokvartirny w Gostomel
								</h3>
								<p className='help-card__desc'>
									Povnistyu znischeny 5 pod groźbą zniszczenia całego domu.
									Jeśli nie przykryjesz domów dahomem, musisz użyć wszystkich
									worków bagatovki.
								</p>
								<div className='help-card__body'>
									<div className='help-card__user'>
										<div className='help-card__avatar'>
											<picture>
												<source srcSet='./img/ava.webp' type='image/webp' />
												<img src='./img/ava.jpg' alt='' />
											</picture>
										</div>
										<p className='help-card__name'>Flash Slothmore</p>
										<p className='help-card__type help-card__type--wolont'>
											organizacja
										</p>
									</div>
									<button className='help-card__btn'>
										<svg
											width='19'
											height='17'
											viewBox='0 0 19 17'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M2.03435 8.66656C0.195507 6.22207 0.808454 2.55535 3.87319 1.33311C6.93792 0.110872 8.77676 2.55535 9.38971 3.77759C10.0027 2.55535 12.4544 0.110872 15.5192 1.33311C18.5839 2.55535 18.5839 6.22207 16.7451 8.66656C14.9062 11.111 9.38971 16 9.38971 16C9.38971 16 3.87319 11.111 2.03435 8.66656Z'
												fill='white'
												stroke='white'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
										<span>Podarować</span>
									</button>
								</div>
								<div className='help-card__footer'>
									<div className='help-card__range range-help-card'>
										<div className='range-help-card__txt'>postęp</div>
										<div className='range-help-card__range'>
											<div className='range-help-card__progress'></div>
										</div>
									</div>
									<button className='help-card__more'>
										<span>Zobacz więcej</span>
										<svg
											width='15'
											height='8'
											viewBox='0 0 15 8'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464467C10.9763 0.269205 10.6597 0.269205 10.4645 0.464467C10.2692 0.659729 10.2692 0.976312 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM-4.37114e-08 4.5L14 4.5L14 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z'
												fill='#285CC4'
											/>
										</svg>
									</button>
								</div>
							</div>
							<div className='help-card'>
								<h3 className='help-card__title'>
									Remont stoiska bagatokvartirny w Gostomel
								</h3>
								<p className='help-card__desc'>
									Povnistyu znischeny 5 pod groźbą zniszczenia całego domu.
									Jeśli nie przykryjesz domów dahomem, musisz użyć wszystkich
									worków bagatovki.
								</p>
								<div className='help-card__body'>
									<div className='help-card__user'>
										<div className='help-card__avatar'>
											<picture>
												<source srcSet='./img/ava.webp' type='image/webp' />
												<img src='./img/ava.jpg' alt='' />
											</picture>
										</div>
										<p className='help-card__name'>Flash Slothmore</p>
										<p className='help-card__type help-card__type--wolont'>
											organizacja
										</p>
									</div>
									<button className='help-card__btn'>
										<svg
											width='19'
											height='17'
											viewBox='0 0 19 17'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M2.03435 8.66656C0.195507 6.22207 0.808454 2.55535 3.87319 1.33311C6.93792 0.110872 8.77676 2.55535 9.38971 3.77759C10.0027 2.55535 12.4544 0.110872 15.5192 1.33311C18.5839 2.55535 18.5839 6.22207 16.7451 8.66656C14.9062 11.111 9.38971 16 9.38971 16C9.38971 16 3.87319 11.111 2.03435 8.66656Z'
												fill='white'
												stroke='white'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
										<span>Podarować</span>
									</button>
								</div>
								<div className='help-card__footer'>
									<div className='help-card__range range-help-card'>
										<div className='range-help-card__txt'>postęp</div>
										<div className='range-help-card__range'>
											<div className='range-help-card__progress'></div>
										</div>
									</div>
									<button className='help-card__more'>
										<span>Zobacz więcej</span>
										<svg
											width='15'
											height='8'
											viewBox='0 0 15 8'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464467C10.9763 0.269205 10.6597 0.269205 10.4645 0.464467C10.2692 0.659729 10.2692 0.976312 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM-4.37114e-08 4.5L14 4.5L14 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z'
												fill='#285CC4'
											/>
										</svg>
									</button>
								</div>
							</div>
							<div className='help-card'>
								<h3 className='help-card__title'>
									Remont stoiska bagatokvartirny w Gostomel
								</h3>
								<p className='help-card__desc'>
									Povnistyu znischeny 5 pod groźbą zniszczenia całego domu.
									Jeśli nie przykryjesz domów dahomem, musisz użyć wszystkich
									worków bagatovki.
								</p>
								<div className='help-card__body'>
									<div className='help-card__user'>
										<div className='help-card__avatar'>
											<picture>
												<source srcSet='./img/ava.webp' type='image/webp' />
												<img src='./img/ava.jpg' alt='' />
											</picture>
										</div>
										<p className='help-card__name'>Flash Slothmore</p>
										<p className='help-card__type help-card__type--wolont'>
											organizacja
										</p>
									</div>
									<button className='help-card__btn'>
										<svg
											width='19'
											height='17'
											viewBox='0 0 19 17'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M2.03435 8.66656C0.195507 6.22207 0.808454 2.55535 3.87319 1.33311C6.93792 0.110872 8.77676 2.55535 9.38971 3.77759C10.0027 2.55535 12.4544 0.110872 15.5192 1.33311C18.5839 2.55535 18.5839 6.22207 16.7451 8.66656C14.9062 11.111 9.38971 16 9.38971 16C9.38971 16 3.87319 11.111 2.03435 8.66656Z'
												fill='white'
												stroke='white'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
										<span>Podarować</span>
									</button>
								</div>
								<div className='help-card__footer'>
									<div className='help-card__range range-help-card'>
										<div className='range-help-card__txt'>postęp</div>
										<div className='range-help-card__range'>
											<div className='range-help-card__progress'></div>
										</div>
									</div>
									<button className='help-card__more'>
										<span>Zobacz więcej</span>
										<svg
											width='15'
											height='8'
											viewBox='0 0 15 8'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464467C10.9763 0.269205 10.6597 0.269205 10.4645 0.464467C10.2692 0.659729 10.2692 0.976312 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM-4.37114e-08 4.5L14 4.5L14 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z'
												fill='#285CC4'
											/>
										</svg>
									</button>
								</div>
							</div>
							<div className='help-card'>
								<h3 className='help-card__title'>
									Remont stoiska bagatokvartirny w Gostomel
								</h3>
								<p className='help-card__desc'>
									Povnistyu znischeny 5 pod groźbą zniszczenia całego domu.
									Jeśli nie przykryjesz domów dahomem, musisz użyć wszystkich
									worków bagatovki.
								</p>
								<div className='help-card__body'>
									<div className='help-card__user'>
										<div className='help-card__avatar'>
											<picture>
												<source srcSet='./img/ava.webp' type='image/webp' />
												<img src='./img/ava.jpg' alt='' />
											</picture>
										</div>
										<p className='help-card__name'>Flash Slothmore</p>
										<p className='help-card__type help-card__type--wolont'>
											organizacja
										</p>
									</div>
									<button className='help-card__btn'>
										<svg
											width='19'
											height='17'
											viewBox='0 0 19 17'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M2.03435 8.66656C0.195507 6.22207 0.808454 2.55535 3.87319 1.33311C6.93792 0.110872 8.77676 2.55535 9.38971 3.77759C10.0027 2.55535 12.4544 0.110872 15.5192 1.33311C18.5839 2.55535 18.5839 6.22207 16.7451 8.66656C14.9062 11.111 9.38971 16 9.38971 16C9.38971 16 3.87319 11.111 2.03435 8.66656Z'
												fill='white'
												stroke='white'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
										<span>Podarować</span>
									</button>
								</div>
								<div className='help-card__footer'>
									<div className='help-card__range range-help-card'>
										<div className='range-help-card__txt'>postęp</div>
										<div className='range-help-card__range'>
											<div className='range-help-card__progress'></div>
										</div>
									</div>
									<button className='help-card__more'>
										<span>Zobacz więcej</span>
										<svg
											width='15'
											height='8'
											viewBox='0 0 15 8'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464467C10.9763 0.269205 10.6597 0.269205 10.4645 0.464467C10.2692 0.659729 10.2692 0.976312 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM-4.37114e-08 4.5L14 4.5L14 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z'
												fill='#285CC4'
											/>
										</svg>
									</button>
								</div>
							</div>
							<div className='help-card'>
								<h3 className='help-card__title'>
									Remont stoiska bagatokvartirny w Gostomel
								</h3>
								<p className='help-card__desc'>
									Povnistyu znischeny 5 pod groźbą zniszczenia całego domu.
									Jeśli nie przykryjesz domów dahomem, musisz użyć wszystkich
									worków bagatovki.
								</p>
								<div className='help-card__body'>
									<div className='help-card__user'>
										<div className='help-card__avatar'>
											<picture>
												<source srcSet='./img/ava.webp' type='image/webp' />
												<img src='./img/ava.jpg' alt='' />
											</picture>
										</div>
										<p className='help-card__name'>Flash Slothmore</p>
										<p className='help-card__type help-card__type--wolont'>
											organizacja
										</p>
									</div>
									<button className='help-card__btn'>
										<svg
											width='19'
											height='17'
											viewBox='0 0 19 17'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M2.03435 8.66656C0.195507 6.22207 0.808454 2.55535 3.87319 1.33311C6.93792 0.110872 8.77676 2.55535 9.38971 3.77759C10.0027 2.55535 12.4544 0.110872 15.5192 1.33311C18.5839 2.55535 18.5839 6.22207 16.7451 8.66656C14.9062 11.111 9.38971 16 9.38971 16C9.38971 16 3.87319 11.111 2.03435 8.66656Z'
												fill='white'
												stroke='white'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
										<span>Podarować</span>
									</button>
								</div>
								<div className='help-card__footer'>
									<div className='help-card__range range-help-card'>
										<div className='range-help-card__txt'>postęp</div>
										<div className='range-help-card__range'>
											<div className='range-help-card__progress'></div>
										</div>
									</div>
									<button className='help-card__more'>
										<span>Zobacz więcej</span>
										<svg
											width='15'
											height='8'
											viewBox='0 0 15 8'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464467C10.9763 0.269205 10.6597 0.269205 10.4645 0.464467C10.2692 0.659729 10.2692 0.976312 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM-4.37114e-08 4.5L14 4.5L14 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z'
												fill='#285CC4'
											/>
										</svg>
									</button>
								</div>
							</div>
							<div className='help-card'>
								<h3 className='help-card__title'>
									Remont stoiska bagatokvartirny w Gostomel
								</h3>
								<p className='help-card__desc'>
									Povnistyu znischeny 5 pod groźbą zniszczenia całego domu.
									Jeśli nie przykryjesz domów dahomem, musisz użyć wszystkich
									worków bagatovki.
								</p>
								<div className='help-card__body'>
									<div className='help-card__user'>
										<div className='help-card__avatar'>
											<picture>
												<source srcSet='./img/ava.webp' type='image/webp' />
												<img src='./img/ava.jpg' alt='' />
											</picture>
										</div>
										<p className='help-card__name'>Flash Slothmore</p>
										<p className='help-card__type help-card__type--wolont'>
											organizacja
										</p>
									</div>
									<button className='help-card__btn'>
										<svg
											width='19'
											height='17'
											viewBox='0 0 19 17'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M2.03435 8.66656C0.195507 6.22207 0.808454 2.55535 3.87319 1.33311C6.93792 0.110872 8.77676 2.55535 9.38971 3.77759C10.0027 2.55535 12.4544 0.110872 15.5192 1.33311C18.5839 2.55535 18.5839 6.22207 16.7451 8.66656C14.9062 11.111 9.38971 16 9.38971 16C9.38971 16 3.87319 11.111 2.03435 8.66656Z'
												fill='white'
												stroke='white'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
										<span>Podarować</span>
									</button>
								</div>
								<div className='help-card__footer'>
									<div className='help-card__range range-help-card'>
										<div className='range-help-card__txt'>postęp</div>
										<div className='range-help-card__range'>
											<div className='range-help-card__progress'></div>
										</div>
									</div>
									<button className='help-card__more'>
										<span>Zobacz więcej</span>
										<svg
											width='15'
											height='8'
											viewBox='0 0 15 8'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464467C10.9763 0.269205 10.6597 0.269205 10.4645 0.464467C10.2692 0.659729 10.2692 0.976312 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM-4.37114e-08 4.5L14 4.5L14 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z'
												fill='#285CC4'
											/>
										</svg>
									</button>
								</div>
							</div>
							<div className='help-card'>
								<h3 className='help-card__title'>
									Remont stoiska bagatokvartirny w Gostomel
								</h3>
								<p className='help-card__desc'>
									Povnistyu znischeny 5 pod groźbą zniszczenia całego domu.
									Jeśli nie przykryjesz domów dahomem, musisz użyć wszystkich
									worków bagatovki.
								</p>
								<div className='help-card__body'>
									<div className='help-card__user'>
										<div className='help-card__avatar'>
											<picture>
												<source srcSet='./img/ava.webp' type='image/webp' />
												<img src='./img/ava.jpg' alt='' />
											</picture>
										</div>
										<p className='help-card__name'>Flash Slothmore</p>
										<p className='help-card__type help-card__type--wolont'>
											organizacja
										</p>
									</div>
									<button className='help-card__btn'>
										<svg
											width='19'
											height='17'
											viewBox='0 0 19 17'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M2.03435 8.66656C0.195507 6.22207 0.808454 2.55535 3.87319 1.33311C6.93792 0.110872 8.77676 2.55535 9.38971 3.77759C10.0027 2.55535 12.4544 0.110872 15.5192 1.33311C18.5839 2.55535 18.5839 6.22207 16.7451 8.66656C14.9062 11.111 9.38971 16 9.38971 16C9.38971 16 3.87319 11.111 2.03435 8.66656Z'
												fill='white'
												stroke='white'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
										<span>Podarować</span>
									</button>
								</div>
								<div className='help-card__footer'>
									<div className='help-card__range range-help-card'>
										<div className='range-help-card__txt'>postęp</div>
										<div className='range-help-card__range'>
											<div className='range-help-card__progress'></div>
										</div>
									</div>
									<button className='help-card__more'>
										<span>Zobacz więcej</span>
										<svg
											width='15'
											height='8'
											viewBox='0 0 15 8'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464467C10.9763 0.269205 10.6597 0.269205 10.4645 0.464467C10.2692 0.659729 10.2692 0.976312 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM-4.37114e-08 4.5L14 4.5L14 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z'
												fill='#285CC4'
											/>
										</svg>
									</button>
								</div>
							</div>
							<div className='help-card'>
								<h3 className='help-card__title'>
									Remont stoiska bagatokvartirny w Gostomel
								</h3>
								<p className='help-card__desc'>
									Povnistyu znischeny 5 pod groźbą zniszczenia całego domu.
									Jeśli nie przykryjesz domów dahomem, musisz użyć wszystkich
									worków bagatovki.
								</p>
								<div className='help-card__body'>
									<div className='help-card__user'>
										<div className='help-card__avatar'>
											<picture>
												<source srcSet='./img/ava.webp' type='image/webp' />
												<img src='./img/ava.jpg' alt='' />
											</picture>
										</div>
										<p className='help-card__name'>Flash Slothmore</p>
										<p className='help-card__type help-card__type--wolont'>
											organizacja
										</p>
									</div>
									<button className='help-card__btn'>
										<svg
											width='19'
											height='17'
											viewBox='0 0 19 17'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M2.03435 8.66656C0.195507 6.22207 0.808454 2.55535 3.87319 1.33311C6.93792 0.110872 8.77676 2.55535 9.38971 3.77759C10.0027 2.55535 12.4544 0.110872 15.5192 1.33311C18.5839 2.55535 18.5839 6.22207 16.7451 8.66656C14.9062 11.111 9.38971 16 9.38971 16C9.38971 16 3.87319 11.111 2.03435 8.66656Z'
												fill='white'
												stroke='white'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
										<span>Podarować</span>
									</button>
								</div>
								<div className='help-card__footer'>
									<div className='help-card__range range-help-card'>
										<div className='range-help-card__txt'>postęp</div>
										<div className='range-help-card__range'>
											<div className='range-help-card__progress'></div>
										</div>
									</div>
									<button className='help-card__more'>
										<span>Zobacz więcej</span>
										<svg
											width='15'
											height='8'
											viewBox='0 0 15 8'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464467C10.9763 0.269205 10.6597 0.269205 10.4645 0.464467C10.2692 0.659729 10.2692 0.976312 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM-4.37114e-08 4.5L14 4.5L14 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z'
												fill='#285CC4'
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
};

export default podarowac;
