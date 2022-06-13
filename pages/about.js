/** @format */
import {StyledAboutContainer} from "../styled-components/About/Styled-AboutContainer";
import AboutHeader from "../Components/About/AboutHeader";
import AboutHero from "../Components/About/AboutHero";
import Content from "../Components/About/AboutContent";

export default function about() {
	return (
		<StyledAboutContainer>
			<AboutHeader />
			<AboutHero />
			<Content></Content>
		</StyledAboutContainer>
	);
}
