/** @format */

import {
	StyledHeader,
	StyledHeaderContainer,
	HeaderImageContainer,
} from "/styled-components/Home/Styled-Index";
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
import Image from "next/image";
import {ContainerHeader} from "../../styled-components/Home/Nav-styled";

function Header(props) {
	return (
		<>
			<StyledHeaderContainer>
				<ContainerHeader>
					<StyledHeader>
						<div className="text">We Build Websites!</div>
						<HeaderImageContainer>
							<div
								style={{
									width: "100%",
									height: "100%",
									position: "relative",
								}}
							>
								<Image
									className="jazmine"
									src={"/jazmine.jpg"}
									layout="fill"
								/>
							</div>
						</HeaderImageContainer>
						<StyledButton>
							<Icon
								icon="carbon:phone-voice-filled"
								height={30}
							/>
							Call Now
						</StyledButton>
					</StyledHeader>
				</ContainerHeader>
			</StyledHeaderContainer>
			<SelectorContainer>
				<MiddleSelector>
					<FlexRow>
						<SelectionBoxBorder>
							<SelectionBox
								onClick={() => props.setTitle("Speed")}
							>
								<Icon
									icon="fluent:top-speed-24-regular"
									color="black"
									height="38"
								/>
							</SelectionBox>
						</SelectionBoxBorder>
						<SelectionBoxBorderMiddle>
							<SelectionBox
								onClick={() => props.setTitle("Ranking")}
							>
								<Icon
									icon="ri:medal-2-fill"
									color="black"
									height="38"
								/>
							</SelectionBox>
						</SelectionBoxBorderMiddle>
						<SelectionBoxBorder>
							<SelectionBox
								onClick={() => props.setTitle("Backlinks")}
							>
								<Icon
									icon="bx:link"
									color="black"
									height="38"
								/>
							</SelectionBox>
						</SelectionBoxBorder>
					</FlexRow>
				</MiddleSelector>
			</SelectorContainer>
		</>
	);
}

export default Header;
