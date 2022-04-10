/** @format */

import styled from "styled-components";

export const TriangleWhite = styled.div`
	position: absolute;
	width: 185.78px;
	height: 188.67px;
	z-index: 999;
	top: 132.89px;
	right: 0px;
	clip-path: polygon(100% 2%, 0 46%, 100% 100%);

	background: #ffffff;

	@media (max-width: 680px) {
		width: 51.78px;
		height: 108.67px;
	}
`;

export const TriangleWhite2 = styled.div`
	position: absolute;
	width: 121.78px;
	height: 88.67px;
	clip-path: polygon(0 0, 0% 100%, 100% 49%);
	z-index: 999;
	top: 282.89px;
	left: -80px;

	background: #ffffff;
	transform: rotate(109.93deg);
	@media (max-width: 680px) {
		width: 124.78px;
		height: 94.67px;
	}
`;

export const TriangleBlue = styled.div`
	position: absolute;
	width: 20px;
	height: 20px;
	clip-path: polygon(0 0, 0% 100%, 100% 49%);
	left: 102.31px;
	top: 455px;
	background: #ff8a00;
	transform: rotate(50.54deg);
	z-index: 22;
	@media (max-width: 670px) {
		left: 50px;
		top: 130px;
	}
`;
