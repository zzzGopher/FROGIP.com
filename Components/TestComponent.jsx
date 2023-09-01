import styled from "styled-components";

export const CardContainer = styled.div`
  height: 720px;
  width: 450px;
  background-color: #232323;
  border-radius: 40px;
  padding: 60px 40px 60px;
`;

export const UpperFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: auto;
  gap: 30px;
`;

export const UpperLeftText = styled.span`
  color: ${({ theme }) => theme.color.primary};
  font-size: 30px;
  font-weight: bold;
`;

export const BreadCrumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #35e818;
  color: black;
  height: 24px;
  width: 90px;
  padding: 4px;
  border-radius: 15px;
  font-size: 13px;
  text-align: center;
  font-weight: bold;
`;

export const TopRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const SecondRow = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  gap: 10px;
`;

export const Price = styled.div`
  color: white;
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.xl};
`;

export const PriceText = styled.p`
  color: #35e818;
  font-weight: 600;
`;

export const ThirdRow = styled.p`
  color: white;
  font-weight: 500;
  font-size: 20px;
`;

//TODO look at figma documentation to make individual button components for price card

export default function TestComponent() {
  return (
    <CardContainer>
      <UpperFlex>
        <TopRow>
          <UpperLeftText>Business Plan</UpperLeftText>
          <BreadCrumb>Popular</BreadCrumb>
        </TopRow>
        <SecondRow>
          <Price>$10</Price>
          <PriceText>
            per user <br />
            per month
          </PriceText>
        </SecondRow>
        <ThirdRow>Up to two website revisions depending on plan</ThirdRow>
      </UpperFlex>
    </CardContainer>
  );
}
