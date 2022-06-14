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

export const H1 = styled.h1`
	font-size: ${({theme}) => theme.font.sm};
`;

export const H2 = styled.h2`
	font-size: ${({theme}) => theme.font.md};
	font-weight: 900;
`;

export const CardContainer = styled.div`
	max-width: 80%;
	height: 250px;
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
`;
