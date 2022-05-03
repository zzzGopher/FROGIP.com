/** @format */

import {
	StyledNav,
	ListContainer,
	IconContainer,
	ListContainer_2,
	ContainerHeader,
} from "/styled-components/Home/Nav-styled";
import {Icon} from "@iconify/react";
import Image from "next/image";

export default function Nav(props) {
	return (
		<ContainerHeader>
			<StyledNav>
				<ListContainer>
					<li>Frogip</li>
				</ListContainer>
				<ListContainer style={{"margin-top": "95px"}}>
					<Image
						src={"/froggy.jpg"}
						layout="intrinsic"
						width={190}
						height={130}
					></Image>
				</ListContainer>
				<ListContainer_2>
					<li style={{color: "black"}}>About</li>
					<li>Seo</li>
					<li>Contact</li>
				</ListContainer_2>
				<IconContainer>
					<Icon icon="gg:menu-grid-o" color="#FF8A00" height="40" />
				</IconContainer>
			</StyledNav>
		</ContainerHeader>
	);
}
