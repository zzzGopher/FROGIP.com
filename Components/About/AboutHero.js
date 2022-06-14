/** @format */

import {
	HeroContainer,
	ImageBorderContainer,
	TextContainer,
	ImageContainer,
	HeroMainContainer,
} from "../../styled-components/About/Styled-Hero";
import Image from "next/image";

function AboutHero() {
	return (
		<HeroMainContainer>
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
		</HeroMainContainer>
	);
}

export default AboutHero;
