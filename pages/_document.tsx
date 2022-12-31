import { Html, Head, Main, NextScript } from "next/document";
import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";

export default function Document() {
	return (
		<Html lang='pl' className='page'>
			<Head />
			<body className='page__body'>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
