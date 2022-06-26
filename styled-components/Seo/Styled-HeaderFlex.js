/** @format */

import styled from "styled-components";

export const HeaderFlex = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	justify-content: center;
	align-items: center;
	height: auto;
	padding: 10px;
	margin-top: ${({theme}) => theme.margin.base};
	@media (min-width: ${({theme}) => theme.screen.medium}) {
		display: grid;
		justify-content: center;
		align-items: start;
		grid-template-columns: 450px auto;
		grid-template-rows: auto auto;

		grid-template-areas:
			"seo seo"
			"h2 pragraph1 "
			"maps paragraph2";

		h1 {
			font-size: 22px;
			margin: 0;
		}
		h2 {
			font-size: 52px;
			text-align: left;
			margin: 0;
		}

		span {
			gap: 50px;
		}
	}
`;

export const SpanFlex = styled(HeaderFlex)`
	gap: 30px;
	height: auto;
	margin: 0;
	display: flex;
	flex-direction: row;
	grid-area: maps;
	@media (min-width: ${({theme}) => theme.screen.medium}) {
		justify-self: start;
		padding: 0;
		gap: 25px;
		margin-top: 25px;
	}
`;

export const H1 = styled.h1`
	color: white;
	font-size: ${({theme}) => theme.font.lg};
	grid-area: seo;
`;

export const H2 = styled.h2`
	color: white;
	font-size: ${({theme}) => theme.font.md};
	text-align: center;
	grid-area: h2;
`;

export const Paragraph = styled.p`
	color: white;
	font-size: 20px;
	text-align: center;
	max-width: 50ch;
	height: auto;
	@media (min-width: ${({theme}) => theme.screen.medium}) {
		text-align: left;
		margin: 0;
		font-size: ${({theme}) => theme.font.sm};
	}
`;

export const Span = styled.span`
	color: ${({theme}) => theme.color.primary};

	text-align: center;
	font-weight: 900;
	grid-area: maps;
	@media (min-width: ${({theme}) => theme.screen.medium}) {
		font-size: ${({theme}) => theme.font.sm};
	}
`;
