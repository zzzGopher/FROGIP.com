/** @format */

import styled from "styled-components";

export const MobileContainer = styled.div`
	display: flex;
	width: full;
	height: 100px;
	background: black;
	color: white;
	justify-content: center;
	align-items: center;
`;

export const MobileLeft = styled.div`
	background-color: black;
	display: flex;
	align-items: center;
	justify-content: end;
	padding: 10px;
	height: 100%;
	width: 50%;
	font-size: 40px;
`;

export const MobileRight = styled.div`
	display: flex;
	background-color: ${(props) => props.theme.color.primary};
	align-items: center;
	height: 100%;
	width: 50%;
	justify-content: baseline;
	padding: 10px;
	font-size: 40px;
`;
