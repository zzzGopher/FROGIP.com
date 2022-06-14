/** @format */

import {
	SallyContainer,
	SallyFlex,
	FlexBlack,
	FlexWhite,
} from "../../styled-components/Seo/Styled-SallySvg";
import Image from "next/image";

function SallyImage() {
	return (
		<SallyContainer>
			<SallyFlex>
				<FlexBlack />
				<Image src={"/Saly.svg"} layout="fill" /> <FlexWhite />
			</SallyFlex>
		</SallyContainer>
	);
}

export default SallyImage;
