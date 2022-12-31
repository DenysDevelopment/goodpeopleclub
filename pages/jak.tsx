import React from "react";
import { Layout } from "../src/components/layout";

const jak = (): JSX.Element => {
	return (
		<Layout>
			<section className='how-working section'>
				<div className='container'>
					<h1 className='section__title'>Jak to działa</h1>
					<p className='how-working__desc'>
						Musisz sam wybrać status: wolontariusz, organizacja społeczna lub
						działacz społeczny. informacje te będą wyświetlane w Twoim profilu
						oraz w ogłoszeniu pomocy.
					</p>
					<div className='how-working__body'>
						<div className='how-working__row'>
							<h2 className='how-working__sub-title'>
								Czy jesteś wolontariuszem?
							</h2>
							<p className='how-working__text'>
								Chcesz pomóc innym? Czy możesz mieć godzinę, aby dodać trochę
								pracy wolontariackiej? Zarejestruj się na stronie jako
								„wolontariusz” i po cichu żartuj komu będziesz uprzejmy.
							</p>
							<p className='how-working__text'>
								Możesz zbierać projekty według tematu. Abo spójrz na swoje uszy,
								jakbyś od razu je otworzył. Oberit te Organization chi tih
								aktywiści, którym ufasz, subskrybuj te aktualizacje i zawsze
								bądź na bieżąco, jeśli potrzebują Twojej pomocy. Jeśli znasz
								projekt, poszukaj wsparcia, naciśnij „przyjdź” i skontaktuj się
								z organizatorem na czacie. Uwierz mi, czasami twoje 15 minut
								wolnego czasu może pomóc w realizacji nachalnych przemówień.
							</p>
							<p className='how-working__text'>
								Jeśli organizator potwierdzi, że brałeś udział w projekcie i
								pomogłeś dzikimi prezentami, Twój status na stronie będzie
								świetny. Bądź pewny siebie realizując nowe projekty.
							</p>
						</div>
						<div className='how-working__row'>
							<h2 className='how-working__sub-title'>
								Jesteś działaczem, przedstawicielem organizacji społecznej?
							</h2>
							<p className='how-working__text'>
								Chcesz pomóc innym? Czy możesz mieć godzinę, aby dodać trochę
								pracy wolontariackiej? Zarejestruj się na stronie jako
								„wolontariusz” i po cichu żartuj komu będziesz uprzejmy.
							</p>
							<p className='how-working__text'>
								Możesz zbierać projekty według tematu. Abo spójrz na swoje uszy,
								jakbyś od razu je otworzył. Oberit te Organization chi tih
								aktywiści, którym ufasz, subskrybuj te aktualizacje i zawsze
								bądź na bieżąco, jeśli potrzebują Twojej pomocy. Jeśli znasz
								projekt, poszukaj wsparcia, naciśnij „przyjdź” i skontaktuj się
								z organizatorem na czacie. Uwierz mi, czasami twoje 15 minut
								wolnego czasu może pomóc w realizacji nachalnych przemówień.
							</p>
							<p className='how-working__text'>
								Jeśli organizator potwierdzi, że brałeś udział w projekcie i
								pomogłeś dzikimi prezentami, Twój status na stronie będzie
								świetny. Bądź pewny siebie realizując nowe projekty.
							</p>
						</div>
						<div className='how-working__row'>
							<h2 className='how-working__sub-title'>
								Odżywianie, jak często pytamy:
							</h2>
							<p className='how-working__text'>
								<b>
									Zarejestrowałem się jako wolontariusz, ale sam chcę
									zorganizować wyjazd. Czy muszę się ponownie zarejestrować i
									uzyskać status „działacza społecznego”?
								</b>
								Nie, nie jest konieczna ponowna rejestracja. Twój status
								wolontariusza daje Ci możliwość samodzielnego tworzenia
								wolontariuszy. Aby zalogować się na swoje konto rządowe, wybierz
								zakładkę „moje projekty” i kliknij „utwórz nowy projekt”. Od
								wszystkich! Więc możesz poznać wskazówkę na świetny projekt!
								Przy okazji działacze społeczni i organizacje społeczne mogą
								również dotrzeć do innych projektów ze statusem wolontariusza!
							</p>
							<p className='how-working__text'>
								<b>
									Chcę się zarejestrować, ale nie mogę się zarejestrować: jestem
									wolontariuszem lub działaczem społecznym? Co powinienem
									zrobić?
								</b>
								Nie zależy od tego, jak się zarejestrujesz, będziesz mógł
								przejść do projektów i stworzyć autorytatywny projekt. Zastanów
								się, jak chcesz się zarejestrować na stronie? Chcesz pomóc komuś
								w realizacji projektu? Następnie śmiało wybierz opcję
								„ochotnik”. Jeśli chcesz stworzyć potężny projekt, możesz
								zmienić swój status.
							</p>
							<p className='how-working__text'>
								<b>
									Mam pomysł, ale wszystko co jest jej potrzebne - weź grosz.
									Czy mogę odebrać pieniądze z Twojej strony?
								</b>
								Szkoda, o ile nie publikujemy projektów, głównym zadaniem jest
								oszczędzanie pieniędzy. Aby poznać finansowanie projektu, na
								Ukrainie istnieje wiele innych wyspecjalizowanych witryn.
								Możliwe jest, że od czasu do czasu możemy uruchomić tę funkcję,
								ale jednocześnie nie wolno nam gromadzić groszy na naszych
								kontach na stronę pomocy.
							</p>
							<p className='how-working__text'>
								<b>
									Udało nam się zrealizować taki fajny projekt! Czy możesz o tym
									napisać w wiadomościach? Gdzie mogę wymusić nasz dźwięk? Chcę,
									aby wszyscy, którzy brali udział w naszym projekcie walczyli,
									abyśmy mogli zostać obrabowani.
								</b>
								Chętnie podzielimy się Twoją wiadomością o projekcie w
								aktualnościach. Dla kogo pospiesz się z działem „kontakty”,
								napisz do nas kartkę lub zadzwoń. Daj im znać o udanych
								projektach i innych.
							</p>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};
export default jak;
