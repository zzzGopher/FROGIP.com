/** @format */

import {
	HeroContainer,
	ImageBorderContainer,
	TextContainer,
	ImageContainer,
	HeroMainContainer,
} from "../../styled-components/About/Styled-Hero";
import Image from "next/image";
import {ContainerHeader} from "../../styled-components/Home/Nav-styled";
import {StyledSeoContainer} from "../../styled-components/Seo/Styled-SeoContainer";

function AboutHero() {
	return (
		<StyledSeoContainer color="#FF8A00">
			<ContainerHeader>
				<HeroContainer>
					<ImageBorderContainer>
						<ImageContainer>
							<Image src={"/Hooman.jpg"} layout="fill" />
						</ImageContainer>
					</ImageBorderContainer>
					<TextContainer>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Reprehenderit, cumque, et omnis, saepe nulla iste
						consequuntur molestias cum accusamus quaerat ea itaque
						libero aspernatur aperiam quos! Voluptas officia saepe
						placeat.
					</TextContainer>
				</HeroContainer>
			</ContainerHeader>
		</StyledSeoContainer>
	);
}

export default AboutHero;
