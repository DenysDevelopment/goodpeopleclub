import Head from "next/head";
import React from "react";
import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";
import { Layout } from "../src/components/layout";

const login = () => {
	return (
		<>
			<Head>
				<title>dwf</title>
			</Head>
			<Layout>login</Layout>
		</>
	);
};
export default login;
