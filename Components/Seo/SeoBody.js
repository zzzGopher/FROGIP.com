/** @format */

import {StyledSeoContainer} from "../../styled-components/Seo/Styled-SeoContainer";
import {
	SeoBodyFlex,
	H1,
	H2,
	CardFlex,
	Grid,
} from "../../styled-components/Seo/Styled-SeoBody";
import {ContainerHeader} from "../../styled-components/Home/Nav-styled";
import Card from "../Card";
import Image from "next/image";

function SeoBody() {
	return (
		<StyledSeoContainer color="white">
			<ContainerHeader>
				<SeoBodyFlex>
					<H1>Key Points</H1>
					<H2>Most Important Benefits</H2>
				</SeoBodyFlex>
				<CardFlex>
					<Card />
					<Card />
					<Card />
				</CardFlex>
				<ContainerHeader style={{"padding-bottom": "5rem"}}>
					<Grid>
						<Image src={"/rocket.svg"} width={300} height={300} />
						<div>
							<h2>Ranking</h2>
							<h3>Aim For the Top!</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Arcu velit aliquam auctor
								laoreet pretium quis. Molestie euismod tempor
								aliquet auctor pellentesque. Aliquam fusce
								vestibulum, vitae egestas justo, in tristique
								morbi congue. Euismod semper vel fermentum,
								blandit amet sed posuere elementum tristique.
								Arcu purus ridiculus pharetra magna.
							</p>
						</div>

						<Image
							src={"/runningman.svg"}
							width={300}
							height={300}
						/>
						<div>
							<h2>Load Speed</h2>
							<h3>Aim For the Top!</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Arcu velit aliquam auctor
								laoreet pretium quis. Molestie euismod tempor
								aliquet auctor pellentesque. Aliquam fusce
								vestibulum, vitae egestas justo, in tristique
								morbi congue. Euismod semper vel fermentum,
								blandit amet sed posuere elementum tristique.
								Arcu purus ridiculus pharetra magna.
							</p>
						</div>

						<Image src={"/Fingers.svg"} width={300} height={300} />
						<div>
							<h2>Backlinks</h2>
							<h3>Aim For the Top!</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Arcu velit aliquam auctor
								laoreet pretium quis. Molestie euismod tempor
								aliquet auctor pellentesque. Aliquam fusce
								vestibulum, vitae egestas justo, in tristique
								morbi congue. Euismod semper vel fermentum,
								blandit amet sed posuere elementum tristique.
								Arcu purus ridiculus pharetra magna.
							</p>
						</div>
					</Grid>
				</ContainerHeader>
			</ContainerHeader>
		</StyledSeoContainer>
	);
}

export default SeoBody;
