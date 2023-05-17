import "@/styles/globals.css";
import styled from "styled-components";
import Head from "next/head";
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { theme } from "../globalStyles";
import Header from "../components/header";
import AppContext from "@/components/AppContext";
import { useState } from "react";

export const Wrapper = styled.div`
	max-width: 1600px;
	margin: 0 auto;
	position: relative;
	min-height: 100vh;
`;

export const Container = styled.div`
	padding: 0px 0px;
`;

function MyApp({ Component, pageProps }) {
	const [session, setSession] = useState()

	return (
		<>
		<AppContext.Provider value={{ session, setSession }}>
			<ThemeProvider theme={theme}>
				<Head>
					<title>Fraime</title>
					<meta name="description" content="Generated by create next app" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Header	/>
				<Wrapper>
					<Container>				
						<Component {...pageProps} />
						<GlobalStyle />
					</Container>
				</Wrapper>
			</ThemeProvider>
		</AppContext.Provider>
		</>
	);
}

export default MyApp;
