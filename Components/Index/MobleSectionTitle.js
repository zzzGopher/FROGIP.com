/** @format */

import {
	MobileContainer,
	MobileLeft,
	MobileRight,
} from "/styled-components/Home/StyledMobileBanner";
import Chemistry from "./Chemistry";

function MobileBanner() {
	return (
		<MobileContainer>
			<MobileLeft>Mobile</MobileLeft>
			<MobileRight>Design
			<Chemistry/>
			</MobileRight>
		</MobileContainer>
	);
}

export default MobileBanner;
