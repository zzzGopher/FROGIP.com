/** @format */

import {StyledHeader} from "/styled-components/Home/Styled-Index";
import {Icon} from "@iconify/react";
import {StyledButton} from "/styled-components/Home/Button";
import {
	MiddleSelector,
	FlexRow,
	SelectorContainer,
	SelectionBox,
	SelectionBoxBorder,
	SelectionBoxBorderMiddle,
} from "/styled-components/Home/Styled-MiddleSelector";

function Header(props) {
	return (
		<>
			<StyledHeader>
				<div>Web Experts</div>
				<StyledButton>
					<Icon icon="carbon:phone-voice-filled" height={30} />
					Call Now
				</StyledButton>
			</StyledHeader>
			<SelectorContainer>
				<MiddleSelector>
					<FlexRow>
						<SelectionBoxBorder>
							<SelectionBox
								onClick={() => props.setTitle("React")}
							>
								<Icon icon="la:react" width={38} />
							</SelectionBox>
						</SelectionBoxBorder>
						<SelectionBoxBorderMiddle>
							<SelectionBox
								onClick={() => props.setTitle("Strapi")}
							>
								<Icon
									icon="simple-icons:strapi"
									width={28}
									height={30}
								/>
							</SelectionBox>
						</SelectionBoxBorderMiddle>
						<SelectionBoxBorder>
							<SelectionBox
								onClick={() => props.setTitle("Shopify")}
							>
								<Icon icon="jam:shopify" width={38} />
							</SelectionBox>
						</SelectionBoxBorder>
					</FlexRow>
				</MiddleSelector>
			</SelectorContainer>
		</>
	);
}

export default Header;
