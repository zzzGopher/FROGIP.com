/** @format */

import styled from "styled-components";

export const ContentContainer = styled.div`
	background-color: white;
	height: auto;
	width: 100%;
	display: flex;
	gap: 20px;
	padding: 18px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const ContentHeader = styled.h1`
	position: relative;
	color: black;
	font-size: 5ch;
	height: 80px;
`;

export const ScribbleContainer = styled.div`
	width: 80px;
	height: 80px;
	top: 25px;
	left: 10px;
	position: absolute;
	transform: rotate(50deg);
`;

export const ListTitles = styled.li`
	display: flex;
	position: relative;
	font-size: 4ch;
	font-weight: 900;
	color: black;
	list-style: none;
	align-items: center;
`;

export const ListFlex = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;
