/** @format */

import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
	display: flex;
	height: 320px;
`;

export const StyledHeader = styled.header`
	position: relative;
	color: white;
	top: 0.5em;

	z-index: 2;
	max-height: 300px;
	padding: 0 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	flex-direction: column;
	width: 100vw;
	font-size: 6ch;
	font-weight: regular;
	padding: 8px;
	gap: 30px;

	@media (min-width: 768px) {
		height: 5em;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		grid-template-areas: "hero-text head-img" "call head-img";
		justify-items: center;
		> .text {
			grid-area: hero-text;
		}
		> button {
			grid-area: call;
		}
	}
	@media (min-width: 992px) {
		height: auto;
	}
	@media (min-width: 1200px) {
		height: 90vh;
	}
`;

export const HeaderImageContainer = styled.div`
	visibility: hidden;
	@media (min-width: 768px) {
		border-radius: 7px;
		visibility: visible;
		position: relative;
		padding: 8px;
		width: 75%;
		height: 100%;
		background-color: ${(props) => {
			return props.theme.color.primary;
		}};
		grid-area: head-img;
	}
`;
