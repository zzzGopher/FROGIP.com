/** @format */
import styled, {keyframes} from "styled-components";

const Rise = keyframes`
0%{top: -40%}0%{width: 5%}0%{height:5%}
10%{top:-60%}10%{width:7%}10%{height:7%}10%{right:35%}
20%{top: -80%}20%{width:9%}20%{height:9%}
30%{top:-100%}30%{width:12%}30%{height:12%}30%{right:45%}
50%{top:-180%}50%{width:15%}50%{height:15%}50%{right:35%}
70%{top:-240%}70%{width:15%}70%{height:15%}70%{right:45%}
90%{top:-280%}90%{width:12%}90%{height:12%}90%{right:35%}
100%{top:-350%}100%{width:9%}100%{height:9%}100%{right:45%}
`;

export const Bubbles = styled.div`
	width: 3px;
	height: 3px;
	background-color: black;
	position: absolute;
	top: -20px;
	border-radius: 100%;
	animation: ${Rise} 6s linear infinite;
`;

const Rise2 = keyframes`
0%{top: -45%}0%{width: 5px}0%{height:5%}
10%{top:-60%}10%{width:7%}10%{height:7%}10%{right:-5%}
20%{top: -100%}20%{width:9%}20%{height:9%}
30%{top:-140%}30%{width:12%}30%{height:12%}30%{right:15%}
50%{top:-180%}50%{width:15%}50%{height:15%}50%{right:-5%}
70%{top:-240%}70%{width:15%}70%{height:15%}70%{right:15%}
90%{top:-280%}90%{width:12%}90%{height:12%}90%{right:-5%}
100%{top:-350%}100%{width:9%}100%{height:9%}100%{right:15%}`;

export const Bubbles2 = styled(Bubbles)`
	right: 20%;
	top: -30px;
	animation: ${Rise2} 6s linear infinite;
`;

const Rise3 = keyframes`
0%{top: -45%}0%{width: 5px}0%{height:5%}
10%{top:-60%}10%{width:7%}10%{height:7%}10%{right:-25%}
20%{top: -100%}20%{width:9%}20%{height:9%}
30%{top:-140%}30%{width:12%}30%{height:12%}30%{right:25%}
50%{top:-180%}50%{width:15%}50%{height:15%}50%{right:-15%}
70%{top:-240%}70%{width:15%}70%{height:15%}70%{right:25%}
90%{top:-280%}90%{width:12%}90%{height:12%}90%{right:-15%}
100%{top:-350%}100%{width:9%}100%{height:9%}100%{right:-25%}100%{color:#AEAEAE}`;

export const Bubbles3 = styled(Bubbles2)`
	right: 30%;
	animation: ${Rise3} 4s linear infinite;
`;
