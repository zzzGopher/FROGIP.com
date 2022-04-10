/** @format */

import styled from "styled-components";

export const BodyContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 18px;
	padding: 10px;
	z-index: 99;
	justify-content: start;
	align-items: center;
	width: 100vw;
	height: auto;

	background-color: white;
	@media (min-width: ${(props) => {
			return props.theme.screen.medium;
		}}) {
		display: grid;
		grid-template-rows: repeat(3, 550px);
		grid-template-columns: 1fr 1fr;
		grid-template-areas: "text read-more grid-image" "text2 read-more2 grid-image2" "text3 read-more3 grid-image3";
	}
`;

export const FrameworkSquare = styled.div`
	background-color: black;
	width: 100px;
	height: 40px;
	display: flex;
	margin-top: 50px;
	align-items: center;
	justify-content: center;
	border-radius: 3px;
	padding: 8px;
	margin-bottom: 4px;
`;

export const FrameworkText = styled.span`
	color: ${(props) => props.theme.color.primary};
	font-size: 25px;
	font-weight: 900;
`;

export const PicContainer = styled.div`
	display: flex;
	background-color: rgba(0, 0, 0, 0.26);
	width: 60%;
	height: 150px;
	border-radius: 10px;
	z-index: 999;
	align-items: center;
	justify-content: space-evenly;
	padding: 8px;
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
