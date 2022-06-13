/** @format */

import styled from "styled-components";

export const HeroContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
	width: 100%;
	height: 100%;
	padding: 18px;
	background-color: ${(props) => {
		return props.theme.color.primary;
	}};
	justify-content: space-around;
	align-items: center;
`;

export const ImageBorderContainer = styled.div`
	position: relative;
	background-color: white;
	padding: 8px;
	border-radius: 7px;
	width: 200px;
	height: 200px;
`;

export const ImageContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	padding: 8px;
`;

export const TextContainer = styled.div`
	font-size: 18px;
	font-weight: 500;
	color: black;
	width: 300px;
	height: auto;
	text-align: center;
`;
