/** @format */
import {
	Header,
	HeaderContainer,
	HeaderBlur,
} from "../../styled-components/About/Styled-Header";
import {ContainerHeader} from "../../styled-components/Home/Nav-styled";

function AboutHeader() {
	return (
		<ContainerHeader>
			<Header>
				About Frogip <HeaderBlur>About</HeaderBlur>
			</Header>
		</ContainerHeader>
	);
}

export default AboutHeader;
