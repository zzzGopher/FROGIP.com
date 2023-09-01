/** @format */
import {
  Container,
  MobileFlexColumns,
  HeroText,
  MobileBottomText,
} from "../../styled-components/Home/StyledMobileSection";
import Image from "next/image";
import { ContainerHeader } from "../../styled-components/Home/Nav-styled";
import { StyledSeoContainer } from "../../styled-components/Seo/Styled-SeoContainer";

function MobileHero() {
  return (
    <StyledSeoContainer color="#f6f6f6">
      <ContainerHeader>
        <Container>
          <MobileFlexColumns>
            <HeroText>Hahah</HeroText>
            <Image
              src={"/character 20.svg"}
              width={250}
              height={400}
              alt={"animated character at computer"}
            />
            <MobileBottomText>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
              minima modi ipsa nam perspiciatis ipsum hic quae doloremque animi
              laudantium rem fugiat pariatur, amet optio, minus porro, placeat
              sint recusandae!
            </MobileBottomText>
          </MobileFlexColumns>
        </Container>
      </ContainerHeader>
    </StyledSeoContainer>
  );
}

export default MobileHero;
