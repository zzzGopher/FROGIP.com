/** @format */
import styled, {keyframes} from "styled-components";

const Rise = keyframes`
0%{top: -40px}0%{width: 5px}0%{height:5px}
10%{top:-60px}10%{width:7px}10%{height:7px}10%{right:35px}
20%{top: -80px}20%{width:9px}20%{height:9px}
30%{top:-100px}30%{width:12px}30%{height:12px}30%{right:45px}
`;

export const Bubbles = styled.div`
	width: 3px;
	height: 3px;
	background-color: black;
	position: absolute;
	top: -20px;
	border-radius: 100%;
	animation: ${Rise} 6s normal infinite;
`;

const Rise2 = keyframes`
0%{top: -45px}0%{width: 5px}0%{height:5px}
10%{top:-60px}10%{width:7px}10%{height:7px}10%{right:35px}
20%{top: -80px}20%{width:9px}20%{height:9px}
30%{top:-100px}30%{width:12px}30%{height:12px}30%{right:45px}`;

export const Bubbles2 = styled(Bubbles)`
	right: 30px;
	top: -30px;
	animation: ${Rise2} 6s linear infinite;
`;
