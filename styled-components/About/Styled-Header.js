/** @format */

import styled from "styled-components";

export const Header = styled.div`
	position: relative;

	height: 220px;
	width: 100%;
	padding: 10px;
	background-color: black;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: ${({theme}) => theme.font.xl};
	text-align: center;
	font-weight: 500;
	@media (min-width: ${({theme}) => {
			return theme.screen.medium;
		}}) {
		justify-content: start;
		height: 350px;
	}
`;

export const HeaderBlur = styled.div`
	position: absolute;
	height: auto;
	width: auto;
	bottom: 10px;
	font-size: 4ch;
	background-color: transparent;
	filter: blur(10px);
	color: white;
	opacity: 0.3;
	font-weight: 300;
	@media (min-width: ${({theme}) => {
			return theme.screen.medium;
		}}) {
		font-size: 5.5ch;
		opacity: 0.2;
		font-weight: 500;
	}
`;

export const HeaderContainer = styled.div`
	margin-inline: auto;
	width: 100vw;
	height: auto;

	@media (min-width: ${(props) => {
			return props.theme.screen.medium;
		}}) {
		width: ${(props) => {
			return props.theme.screen.medium;
		}};
		@media (min-width: ${(props) => {
				return props.theme.screen.large;
			}}) {
			width: ${(props) => {
				return props.theme.screen.large;
			}};
		}
		@media (min-width: ${({theme}) => {
				return theme.screen.xl;
			}}) {
			width: ${({theme}) => {
				return theme.screen.xl;
			}};
		}
		@media (min-width: ${({theme}) => {
				return theme.screen.xxl;
			}}) {
			width: ${({theme}) => {
				return theme.screen.xxl;
			}};
		}
	}
`;
