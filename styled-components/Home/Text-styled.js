/** @format */

import styled from "styled-components";

export const StyledH1 = styled.h1`
	font-size: 4ch;
	font-weight: bold;
	margin: 0;
	color: white;
`;

export const BlueText = styled.span`
	color: ${(props) => {
		return props.theme.color.primary;
	}};
`;

export const TextBox = styled.div`
	display: flex;
	gap: 10px;
	flex-direction: column;

	align-items: center;
	justify-content: center;
`;
