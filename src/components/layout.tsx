import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutPropsType {
	children: React.ReactNode;
}

export const Layout = ({ children }: LayoutPropsType) => {
	return (
		<div className='wrapper'>
			<Header />
			<main className='page__content'>{children}</main>
			<Footer />
		</div>
	);
};
