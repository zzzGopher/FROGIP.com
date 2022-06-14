/** @format */

import styled from "styled-components";

export const HeroMainContainer = styled.div`
	width: 100%;
	height: auto;
	background-color: ${(props) => {
		return props.theme.color.primary;
	}};
`;

export const HeroContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
	width: 100%;
	height: 450px;
	padding: 10px;
	background-color: ${(props) => {
		return props.theme.color.primary;
	}};
	justify-content: center;
	align-items: center;
	margin-inline: auto;
	width: 100vw;

	@media (min-width: ${(props) => {
			return props.theme.screen.medium;
		}}) {
		flex-direction: row;
		height: 450px;
		justify-content: flex-start;
		gap: 100px;
		width: ${(props) => {
			return props.theme.screen.medium;
		}};
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
	}
`;

export const ImageBorderContainer = styled.div`
	position: relative;
	background-color: white;
	padding: 8px;
	border-radius: 7px;
	width: 200px;
	height: 200px;
	@media (min-width: ${({theme}) => {
			return theme.screen.medium;
		}}) {
		height: 300px;
		width: 400px;
	}
`;

export const ImageContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	padding: 8px;
`;

export const TextContainer = styled.div`
	font-size: ${({theme}) => theme.font.paragraph};
	font-weight: 600;
	color: black;
	width: auto;

	height: auto;
	text-align: center;
	@media (min-width: ${({theme}) => {
			return theme.screen.medium;
		}}) {
		text-align: left;
		width: 800px;
	}
`;
