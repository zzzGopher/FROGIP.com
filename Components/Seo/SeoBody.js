/** @format */

import {StyledSeoContainer} from "../../styled-components/Seo/Styled-SeoContainer";
import {SeoBodyFlex, H1, H2} from "../../styled-components/Seo/Styled-SeoBody";

import Card from "../Card";
function SeoBody() {
	return (
		<StyledSeoContainer>
			<SeoBodyFlex>
				<H1>Key Points</H1>
				<H2>Most Important Benefits</H2>

				<Card />
				<Card />
				<Card />
			</SeoBodyFlex>
		</StyledSeoContainer>
	);
}

export default SeoBody;
