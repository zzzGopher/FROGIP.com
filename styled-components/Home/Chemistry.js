/** @format */

import styled from "styled-components";

export const ChemBox = styled.div`
	display: flex;
	flex-direction: column;
	width: auto;
	height: auto;
	background-color: transparent;
	position: absolute;
	align-items: center;
	justify-content: end;
	top: 355px;
	right: 30px;
	z-index: 999;
	visibility: hidden;
	@media (min-width: 600px) {
		visibility: visible;
	}
	@media (min-width: ${(props) => props.theme.screen.medium}) {
		top: 645px;
	}
`;

export const Icontainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	align-items: center;
	width: 70%;
	.vial {
		z-index: 999;
		margin-bottom: -32px;
		align-self: flex-end;
	}
`;
