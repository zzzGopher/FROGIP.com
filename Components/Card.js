/** @format */

import {
	CardContainer,
	CardContainerMain,
	CardHeadingFont,
	CardParagraph,
} from "../styled-components/Seo/Styled-SeoBody";
import {Icon} from "@iconify/react";
import Image from "next/image";

function Card({ cardBody }) {
 const {title,body} = cardBody;
	return (
		<CardContainer>
			<CardContainerMain>
				<Image src={"/seoCardfitted.svg"} layout="fill" />
				<Icon
					icon="fluent:top-speed-24-regular"
					height="32"
					style={{
						zIndex: "90",
						alignSelf: "start",
						marginLeft: "18px",
					}}
				/>
				<CardHeadingFont>{title}</CardHeadingFont>
				<CardParagraph>
					{body}
				</CardParagraph>
			</CardContainerMain>
		</CardContainer>
	);
}

export default Card;
