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
`;

export const SpanFlex = styled(HeaderFlex)`
	gap: 13px;
	height: auto;
	flex-direction: row;
`;

export const H1 = styled.h1`
	color: white;
	font-size: ${({theme}) => theme.font.lg};
`;

export const H2 = styled.h2`
	color: white;
	font-size: ${({theme}) => theme.font.md};
	text-align: center;
`;

export const Paragraph = styled.p`
	color: white;
	font-size: ${({theme}) => theme.font.sm};
	text-align: center;
`;

export const Span = styled.span`
	color: ${({theme}) => theme.color.primary};
	font-size: ${({theme}) => theme.font.sm};
	text-align: center;
	font-weight: 900;
`;
