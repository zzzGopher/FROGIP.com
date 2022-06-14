/** @format */

import styled from "styled-components";

export const StyledNav = styled.div`
	display: flex;
	width: 100%;
	height: 125px;
	background-color: black;
	font-weight: 500;
	align-items: center;
	justify-content: center;
	@media (min-width: 670px) {
		justify-content: flex-start;
		padding: 10px;
	}
	@media (min-width: ${(props) => {
			return props.theme.screen.medium;
		}}) {
		width: 100%;
	}
`;

export const ListContainer_2 = styled.ul`
	display: none;
	list-style: none;
	padding: 0 8px;
	gap: 30px;
	margin-left: 10%;
	width: 500px;
	height: 35px;
	justify-content: space-around;
	align-items: center;
	color: white;
	border-radius: 4px;
	background-color: ${(props) => props.theme.color.primary};
	@media (min-width: 670px) {
		display: flex;
	}
`;

export const ListContainer = styled.ul`
	color: white;

	list-style: none;
	font-size: 40px;
	font-weight: 900;

	padding: 0 8px;
	align-items: center;
	@media (min-width: 670px) {
		display: flex;
	}
`;

export const IconContainer = styled.div`
	/* display: flex;
	align-items: center;
	justify-content: end; */

	width: auto;
	margin-right: 10px;
	@media (min-width: 670px) {
		display: none;
	}
`;

export const ContainerHeader = styled.div`
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
