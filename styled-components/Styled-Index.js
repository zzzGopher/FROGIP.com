/** @format */

import styled from "styled-components";

export const StyledHeader = styled.header`
	position: relative;
	color: white;
	top: 0.5em;
	z-index: 2;
	height: auto;
	padding: 0 8px;
	justify-content: flex-start;
	align-items: center;
	display: flex;
	flex-direction: column;
	width: 100vw;
	font-size: 25ch;
	font-weight: lighter;
	padding: 8px;
	gap: 30px;
	margin-bottom: 50px;
	@media (max-width: 576px) {
		font-size: 6ch;
		top: 0.5em;
		height: auto;
	}
	@media (min-width: 768px) {
		height: 5em;
	}
	@media (min-width: 992px) {
		height: auto;
	}
	@media (min-width: 1200px) {
		height: 90vh;
	}
`;
