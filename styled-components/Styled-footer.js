/** @format */

import styled from "styled-components";

export const FooterContainer = styled.div`
	width: 100vw;
	height: 150px;
	background-color: ${(props) => props.theme.color.primary};
	position: relative;
	bottom: 0;
`;

export const SocialRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: end;
	height: 50%;
`;

export const SocialColumn = styled.div`
	color: ${(props) => {
		return props.theme.color.secondary;
	}};
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5px;
	color: black;
`;
export const SvgRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 50%;
	overflow: hidden;
`;
