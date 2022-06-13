/** @format */

import Head from "next/head";
import Header from "../Components/Index/Header";
import Body from "../Components/Index/Body";
import Chemistry from "../Components/Index/Chemistry";
import {useState} from "react";
import MobileBanner from "../Components/Index/MobleSectionTitle";
import MobileHero from "../Components/Index/MobileHero";

export default function Home({frameWorkTextContent}) {
	const [title, setTitle] = useState("Speed");

	frameWorkTextContent = {
		text: {
			id1: {
				//state title that needs to be fixed

				title: title,
				body: "A JavaScript library for building user interfaces",
			},
			id2: {
				title: title,
				body: "Strapi is the leading open-source headless CMS. It’s 100% JavaScript, fully customizable and developer-first.",
			},
			id3: {
				title: title,
				body: "Millions of the world's most successful brands trust Shopify to sell, ship and process payments anywhere.",
			},
		},
	};

	return (
		<>
			<Header
				title={title}
				setTitle={setTitle}
				{...frameWorkTextContent}
			/>
			<Body {...frameWorkTextContent} />
			{/* <Chemistry /> */}
			<MobileBanner />
			<MobileHero />
		</>
	);
}
