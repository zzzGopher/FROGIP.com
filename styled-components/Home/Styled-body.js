/** @format */

import styled from "styled-components";

export const BodyMainContainer = styled.div`
	max-width: 100vw;
	height: 400px;
	background: white;
	margin-inline: auto;
`;

export const BodyContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	margin: auto;
	gap: 18px;
	z-index: 99;
	justify-content: start;
	align-items: center;
	width: 90%;
	height: auto;
	background-color: white;
	@media (min-width: ${(props) => {
			return props.theme.screen.medium;
		}}) {
		display: grid;
		height: 100%;
		align-content: center;
		justify-items: center;
		grid-template-areas: "label picture" "text picture";
		grid-template-rows: auto auto;
		grid-template-columns: 1fr 1fr;
	}
`;

export const FrameworkSquare = styled.div`
	background-color: black;
	width: 150px;
	height: 50px;
	display: flex;
	margin-top: 50px;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	padding: 8px;
	margin-bottom: 4px;
	grid-area: label;
	@media (min-width: ${(props) => props.theme.screen.medium}) {
		width: 220px;
		height: 80px;
		margin: 0;
	}
`;

export const FrameworkText = styled.span`
	color: ${(props) => props.theme.color.primary};
	font-size: 25px;
	font-weight: 900;
	grid-area: text;
	@media (min-width: ${(props) => props.theme.screen.medium}) {
		font-size: 5ch;
	}
`;

export const PicContainer = styled.div`
	position: relative;
	display: flex;
	background-color: rgba(0, 0, 0, 0.14);
	max-width: 225px;
	width: 75%;
	height: 140px;
	border-radius: 7px;
	z-index: 999;
	align-items: center;
	justify-content: space-evenly;
	padding: 10px;
	grid-area: picture;

	@media (min-width: ${(props) => props.theme.screen.medium}) {
		height: 100%;
		min-width: 350px;
	}
`;

export const BodyText = styled.div`
	font-size: 18px;
	font-weight: 500;
	display: flex;
	align-items: top;
	justify-content: center;
	text-align: center;
	padding: 10px;
	max-width: 400px;
	min-height: 90px;
`;
