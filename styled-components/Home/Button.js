/** @format */

import styled from "styled-components";

export const StyledButton = styled.button`
	background-color: ${(props) => props.theme.color.primary};
	width: 150px;
	height: 40px;
	border: none;
	border-radius: 2px;
	font-weight: bold;
	font-size: 17px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	gap: 8px;
`;
