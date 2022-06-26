/** @format */

import styled from "styled-components";

export const ContentMainContainer = styled.div`
	width: 100%;
	height: auto;
	background-color: white;
`;

export const ContentContainer = styled.div`
	background-color: white;
	height: 100%;
	width: 100%;
	display: flex;
	gap: 40px;
	padding: 18px;
	flex-direction: column;
	justify-content: center;
	align-items: start;
	margin-inline: auto;

	@media (min-width: ${(props) => {
			return props.theme.screen.medium;
		}}) {
		align-items: start;
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

export const ContentHeaderFlex = styled.div`
	display: flex;
	align-self: center;
	flex-direction: column;
	width: auto;
	height: auto;
	padding-left: 30px;
	@media (min-width: ${({theme}) => theme.screen.small}) {
		align-self: start;
	}
`;

export const ContentHeader = styled.h1`
	position: relative;

	color: black;
	font-size: ${({theme}) => theme.font.lg};
	height: auto;
	width: auto;
`;

export const ScribbleContainer = styled.div`
	width: 80px;
	height: 80px;
	top: 65%;
	left: 12%;
	position: absolute;
	transform: rotate(50deg);
	@media (min-width: ${({theme}) => theme.screen.medium}) {
		width: 100px;
		height: 100px;
	}
	@media (min-width: ${({theme}) => theme.screen.large}) {
		width: 120px;
		height: 120px;
	}
`;

export const ListTitles = styled.li`
	display: flex;
	position: relative;
	font-size: ${({theme}) => theme.font.md};
	font-weight: 900;
	color: black;
	list-style: none;
	align-items: center;
`;

export const ListFlex = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Paragraph = styled.p`
	padding-left: 40px;
	max-width: 800px;
	font-size: ${({theme}) => theme.font.paragraph};
`;
