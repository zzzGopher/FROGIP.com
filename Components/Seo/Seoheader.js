/** @format */
import {StyledSeoContainer} from "../../styled-components/Seo/Styled-SeoContainer";
import {
	HeaderFlex,
	H1,
	H2,
	Paragraph,
	Span,
	SpanFlex,
} from "../../styled-components/Seo/Styled-HeaderFlex";
import SallyImage from "./SallyImage";

function SeoHeader() {
	return (
		<>
			<StyledSeoContainer>
				<HeaderFlex>
					<H1>What is Seo?</H1>
					<H2>Get the most from your website and get noticed!</H2>
					<SpanFlex>
						<Span>Maps</Span>
						<Span>Crawlers</Span>
					</SpanFlex>
					<Paragraph>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Voluptatum, libero! Possimus, maxime eum! Ex, accusamus.
						Illum, ipsam doloremque nisi ducimus veritatis facere
						officiis laborum aliquam autem magni illo, harum eius.
					</Paragraph>
					<Paragraph>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Natus facere eum rem numquam, alias perspiciatis
						provident perferendis voluptatibus sapiente dolore nisi
						quaerat, modi reprehenderit. Assumenda dolores labore
						dicta dignissimos quis?
					</Paragraph>
				</HeaderFlex>
			</StyledSeoContainer>
			<SallyImage />
		</>
	);
}

export default SeoHeader;
