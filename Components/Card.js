/** @format */

import {
	CardContainer,
	CardContainerMain,
	CardHeadingFont,
	CardParagraph,
} from "../styled-components/Seo/Styled-SeoBody";
import {Icon} from "@iconify/react";
import Image from "next/image";

function Card() {
	return (
		<CardContainer>
			<CardContainerMain>
				<Image src={"/seoCardfitted.svg"} layout="fill" />
				<Icon
					icon="fluent:top-speed-24-regular"
					color="black"
					height="32"
					style={{"z-index": "90", alignSelf: "start"}}
				/>
				<CardHeadingFont>Load Speed</CardHeadingFont>
				<CardParagraph>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Obcaecati, optio fugit quaerat voluptatibus do
				</CardParagraph>
			</CardContainerMain>
		</CardContainer>
	);
}

export default Card;
