/** @format */
import {
	BodyContainer,
	FrameworkSquare,
	FrameworkText,
	PicContainer,
	BodyText,
} from "/styled-components/Home/Styled-body";
import Image from "next/image";
import Chemistry from "./Chemistry";

function Body(props) {
	return (
		<>
			<BodyContainer>
				<FrameworkSquare>
					<FrameworkText>{props.text.id1.title}</FrameworkText>
				</FrameworkSquare>
				<PicContainer>
					<Image
						src={
							props.text.id1.title === "React"
								? "/react_js.png"
								: props.text.id2.title === "Strapi"
								? "/strapi.png"
								: props.text.id3.title === "Shopify"
								? "/best-shopify-apps.jpg"
								: ""
						}
						layout="fixed"
						width={"280%"}
						height={"130%"}
					></Image>
				</PicContainer>

				<BodyText>
					{props.text.id1.title === "React"
						? props.text.id1.body
						: props.text.id2.title === "Strapi"
						? props.text.id2.body
						: props.text.id3.title === "Shopify"
						? props.text.id3.body
						: ""}
				</BodyText>
				<Chemistry />
			</BodyContainer>
		</>
	);
}

export default Body;
