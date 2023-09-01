/** @format */

import styled, { css } from "styled-components";

import { StyledSeoContainer } from "../styled-components/Seo/Styled-SeoContainer";
import { ContainerHeader } from "../styled-components/Home/Nav-styled";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useRef } from "react";

const QuoteFlex = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`;

const SmallParagraph = styled.p`
  color: white;
  display: flex;
  justify-content: center;
  font-weight: 400;
  text-align: center;
`;

const PricingButtonsContainer = styled.div`
  margin-top: 3em;
  display: flex;
  margin-inline: auto;
  height: 3rem;
  width: 70%;
  max-width: 300px;
  color: white;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
  background-color: ${({ theme }) => theme.color.primary};
  gap: 5%;
  padding: 4px;
`;

const PricingButtons = styled.div`
  user-select: none;
  font-weight: bold;
  color: ${(props) => (props.selected ? "white" : "black")};
  height: 100%;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5em;
  transition: all ease-in-out 0.3s;
  background-color: ${(props) =>
    props.selected ? "black" : props.theme.color.primary};
  &:hover {
    cursor: pointer;
  }
`;
const PricingCardContainer = styled.div`
  margin-top: 3em;
  display: flex;
  height: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 2rem;
  @media (min-width: ${({ theme }) => theme.screen.medium}) {
    flex-direction: row;
    gap: 40px;
  }
`;

const PricingCard = styled.div`
  background-color: white;
  height: 300px;
  color: black;
  width: 100%;
  max-width: 320px;
  border-radius: 1mm;
  display: flex;
  flex-direction: column;
  padding: 8px;
  align-items: center;
  justify-content: space-around;
  :hover {
    background-color: lightslategrey;
  }
`;

const PricingCardPlan = styled.h1`
  margin: 0;
  font-size: 3ch;
`;

const PricingCardPrice = styled.div`
  font-weight: 900;
  font-size: 7ch;
`;

const PricingCardQuarter = styled.div`
  font-weight: 600;
`;

const PricingCardButton = styled.button`
  height: 4em;
  width: 10em;
  border: none;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 2rem;
  font-weight: 800;
  &:hover {
    cursor: pointer;
  }
`;

const FrequentQuestions = styled.h1`
  text-align: center;
  padding-top: 5rem;
`;

const FaqFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: solid 1px lightgrey;
  width: 80%;
  height: auto;
  flex-direction: column;
  margin-inline: auto;
  margin-bottom: 3rem;
  border-radius: 0.5rem;
`;

const WhyPay = styled.h3`
  color: darkslategrey;
  :after {
    content: " ";
    padding-top: 5px;
    display: block;
    border-bottom: solid grey 1px;
  }
`;

const WhyPayFlex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const IconFlex = styled.div`
  position: absolute;
  width: 230px;
  display: flex;
  justify-content: end;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

const DropDownParagraph = styled.p`
  display: ${(props) => (props.DropDown ? "visible" : "hidden")};
  height: ${({ DropDown }) => (DropDown ? "50px" : "0px")};
  transition: max-height 0.5s ease-in-out;
  color: black;
  opacity: ${({ DropDown }) => (DropDown ? "100%" : "0")};
`;

function Contact() {
  const selectedOptions = { current: "active", secondary: "inactive" };

  const dropDownOptions = { first: "first", second: "second", third: "third" };

  const [selected, setSelected] = useState(selectedOptions.current);

  const [dropDown, setDropDown] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setSelected(!selected);
  };

  return (
    <>
      <StyledSeoContainer color="black">
        <ContainerHeader color="black">
          <QuoteFlex>
            <h1>Pricing to suit multiple needs</h1>
          </QuoteFlex>
          <SmallParagraph style={{ color: "white" }}>
            24/7 support with monthly subscriptions!
          </SmallParagraph>
          <PricingButtonsContainer>
            <PricingButtons
              selected={selected === selectedOptions.current}
              onClick={() => setSelected(selectedOptions.current)}
            >
              Monthly
            </PricingButtons>
            <PricingButtons
              selected={selected === selectedOptions.secondary}
              onClick={() => setSelected(selectedOptions.secondary)}
            >
              One Time
            </PricingButtons>
          </PricingButtonsContainer>
          <PricingCardContainer>
            <PricingCard>
              <PricingCardPlan>Plan</PricingCardPlan>
              <PricingCardPrice>$10</PricingCardPrice>
              <PricingCardQuarter>Quarter</PricingCardQuarter>
              <PricingCardButton>Get Started</PricingCardButton>
            </PricingCard>
            <PricingCard>
              <PricingCardPlan>Plan</PricingCardPlan>
              <PricingCardPrice>$10</PricingCardPrice>
              <PricingCardQuarter>Quarter</PricingCardQuarter>
              <PricingCardButton>Get Started</PricingCardButton>
            </PricingCard>
            <PricingCard>
              <PricingCardPlan>Plan</PricingCardPlan>
              <PricingCardPrice>$10</PricingCardPrice>
              <PricingCardQuarter>Quarter</PricingCardQuarter>
              <PricingCardButton>Get Started</PricingCardButton>
            </PricingCard>
          </PricingCardContainer>
        </ContainerHeader>
      </StyledSeoContainer>
      <StyledSeoContainer color={"white"}>
        <ContainerHeader color={"white"}>
          <FrequentQuestions>Frequently Asked Questions</FrequentQuestions>
          <FaqFlex>
            <WhyPayFlex>
              <WhyPay>Why Pay Monthly?</WhyPay>
              {/*TODO fix dropdowns*/}
              <IconFlex
                onClick={() => {
                  dropDownOptions.first
                    ? setDropDown(false)
                    : setDropDown(dropDownOptions.first);
                }}
              >
                <Icon icon="eva:arrow-circle-down-fill" height={28} />
              </IconFlex>
            </WhyPayFlex>

            <DropDownParagraph DropDown={dropDown === dropDownOptions.first}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
              eveniet aspernatur, voluptates qui praesentium alias nihil ipsa
            </DropDownParagraph>
            <WhyPayFlex>
              <WhyPay>Why Pay Monthly?</WhyPay>
              <IconFlex onClick={() => setDropDown(dropDownOptions.second)}>
                <Icon icon="eva:arrow-circle-down-fill" height={28} />
              </IconFlex>
            </WhyPayFlex>

            <DropDownParagraph DropDown={dropDown === dropDownOptions.second}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
              eveniet aspernatur, voluptates qui praesentium alias nihil ipsa
            </DropDownParagraph>
            <WhyPayFlex>
              <WhyPay>Why Pay Monthly?</WhyPay>
              <IconFlex onClick={() => setDropDown(dropDownOptions.third)}>
                <Icon icon="eva:arrow-circle-down-fill" height={28} />
              </IconFlex>
            </WhyPayFlex>

            <DropDownParagraph DropDown={dropDown === dropDownOptions.third}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
              eveniet aspernatur, voluptates qui praesentium alias nihil ipsa
            </DropDownParagraph>
          </FaqFlex>
          <br />
        </ContainerHeader>
      </StyledSeoContainer>
    </>
  );
}

export default Contact;
