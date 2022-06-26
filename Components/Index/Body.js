/** @format */
import {
	BodyContainer,
	FrameworkSquare,
	FrameworkText,
	PicContainer,
	BodyText,
	BodyMainContainer,
} from "/styled-components/Home/Styled-body";
import Image from "next/image";
import Chemistry from "./Chemistry";
import {ContainerHeader} from "../../styled-components/Home/Nav-styled";
import {StyledSeoContainer} from "../../styled-components/Seo/Styled-SeoContainer";

function Body(props) {
	return (
		<>
			<StyledSeoContainer color="white">
				<ContainerHeader>
					<BodyMainContainer>
						<BodyContainer>
							<FrameworkSquare>
								<FrameworkText>
									{props.text.id1.title}
								</FrameworkText>
							</FrameworkSquare>
							<PicContainer>
								<div
									style={{
										width: "100%",
										height: "100%",
										position: "relative",
									}}
								>
									<Image
										src={
											props.text.id1.title === "Speed"
												? "/react_js.png"
												: props.text.id2.title ===
												  "Ranking"
												? "/strapi.png"
												: props.text.id3.title ===
												  "Backlinks"
												? "/best-shopify-apps.jpg"
												: ""
										}
										layout="fill"
									></Image>
								</div>
							</PicContainer>

							<BodyText>
								{props.text.id1.title === "Speed"
									? props.text.id1.body
									: props.text.id2.title === "Ranking"
									? props.text.id2.body
									: props.text.id3.title === "Backlinks"
									? props.text.id3.body
									: ""}
							</BodyText>
							<Chemistry />
						</BodyContainer>
					</BodyMainContainer>
				</ContainerHeader>
			</StyledSeoContainer>
		</>
	);
}

export default Body;
