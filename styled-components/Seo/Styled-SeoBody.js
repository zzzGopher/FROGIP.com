/** @format */

import styled from "styled-components";

export const SeoBodyFlex = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: auto;
	background-color: white;
	justify-content: center;
	align-items: center;
`;

export const CardFlex = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	background-color: white;
	justify-content: center;
	align-items: center;
	gap: 30px;
	margin-top: ${({theme}) => theme.margin.base};
	@media (min-width: ${({theme}) => theme.screen.medium}) {
		flex-direction: row;
		gap: 30px;
		justify-content: space-around;
	}
`;

export const H1 = styled.h1`
	font-size: ${({theme}) => theme.font.md};
`;

export const H2 = styled.h2`
	font-size: ${({theme}) => theme.font.md};
	font-weight: 900;
`;

export const CardContainer = styled.div`
	max-width: 80%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
`;

export const CardContainerMain = styled.div`
	width: 100%;
	height: 200px;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	gap: 8px;
	padding: 18px;
	@media (min-width: ${({theme}) => theme.screen.large}) {
		width: 300px;
		height: 200px;
	}
`;

export const CardHeadingFont = styled.div`
	font-size: 28px;
	font-weight: 500;
	z-index: 90;
`;

export const CardParagraph = styled.div`
	font-size: 16px;
	font-weight: 400;
	max-width: 200px;
	z-index: 90;
	text-align: center;
`;

export const Grid = styled.div`
	display: grid;
	text-align: center;
	margin-top: ${({theme}) => theme.margin.base};
	padding: 18px;
	row-gap: 1rem;
    justify-content: center;

  .rocket, .runningMan,.fingers {
    width: 100%;
  }

	p {
		font-size: 18px;
		font-weight: 500;
		max-width: 40ch;
		margin-inline: auto;
	}
	h2 {
		font-size: 3em;
	}
	h3 {
		font-size: 2em;
		color: ${({theme}) => theme.color.primary};
	}
	@media (min-width: ${({theme}) => theme.screen.medium}) {
		grid-template-columns: 300px 1fr;
		grid-template-rows: repeat(3, 1fr);
		text-align: start;
		column-gap: 5rem;
		row-gap: 5rem;
		p {
			max-width: 50ch;
			margin-inline-start: 0px;
			font-size: 22px;
		}
	}
`;
