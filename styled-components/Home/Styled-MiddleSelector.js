/** @format */

import styled, {keyframes} from "styled-components";

export const SelectorContainer = styled.section`
	max-width: 900px;
	@media (min-width: ${(props) => {
			return (props) => props.theme.screen.medium;
		}}) {
		max-width: 60%;
	}
`;

export const MiddleSelector = styled.div`
	z-index: 999;
	background-color: white;
	max-width: 350px;
	height: 60px;
	margin-inline: auto;
	border-radius: 50px;
	position: relative;
	top: 30px;
	z-index: 999;
	box-shadow: 0px 0px 5px grey;
`;

export const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	height: 100%;
`;

export const SelectionBox = styled.div`
	min-width: 20%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const SelectionBoxBorder = styled.div`
	width: 50%;

	:hover {
		cursor: pointer;
	}
`;
export const SelectionBoxBorderMiddle = styled(SelectionBoxBorder)`
	border-right: 1px solid grey;
	border-left: 1px solid grey;
`;
