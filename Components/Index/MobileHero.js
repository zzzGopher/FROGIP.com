/** @format */
import {
	Container,
	MobileFlexColumns,
	HeroText,
	MobileBottomText,
} from "../../styled-components/Home/StyledMobileSection";
import Image from "next/image";

function MobileHero() {
	return (
		<Container>
			<MobileFlexColumns>
				<HeroText>Hahah</HeroText>
				<Image src={"/character 20.svg"} width={250} height={400} />
				<MobileBottomText>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
					minima modi ipsa nam perspiciatis ipsum hic quae doloremque
					animi laudantium rem fugiat pariatur, amet optio, minus
					porro, placeat sint recusandae!
				</MobileBottomText>
			</MobileFlexColumns>
		</Container>
	);
}

export default MobileHero;
