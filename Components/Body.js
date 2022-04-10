/** @format */
import {
	BodyContainer,
	FrameworkSquare,
	FrameworkText,
	PicContainer,
	BodyText,
} from "../styled-components/Styled-body";
import Image from "next/image";
import {StyledH1, BlueText, TextBox} from "../styled-components/Text-styled";

let SectionImages = {id: 1, image1: "/code.jpg"};

function Body(props) {
	console.log(props);
	return (
		<>
			<BodyContainer>
				<FrameworkSquare>
					<FrameworkText>{props.text.id1.title}</FrameworkText>
				</FrameworkSquare>
				<PicContainer>
					<Image
						src={SectionImages.image1}
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
			</BodyContainer>
		</>
	);
}

export default Body;
