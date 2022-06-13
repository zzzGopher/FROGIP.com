/** @format */
import styled, {keyframes} from "styled-components";

const Rise = keyframes`
0%{top: -40%;width: 5%;height:5%;right:4%}
10%{top:-60%;width:7%;height:7%;right:12%}
20%{top: -80%;width:9%;height:9%}
30%{top:-100%;width:12%;height:12%;right:45%}
50%{top:-180%;width:15%;height:15%;right:35%}
70%{top:-240%; width:15%; height:15%; right:45%}
90%{top:-280%; width:12%; height:12%; right:35%}
100%{top:-350%; width:9%; height:9%; right:45%}
`;

export const Bubbles = styled.div`
	width: 3px;
	height: 3px;
	background-color: black;
	position: absolute;
	top: -20px;
	border-radius: 100%;
	animation: ${Rise} 9s linear infinite;
`;

const Rise2 = keyframes`

0%{top: -45%;width: 5px;height:5%}
10%{top:-60%;width:7%;height:7%;right:-5%}
20%{top: -100%;width:9%;height:9%}
30%{top:-140%;width:12%;height:12%;right:15%}
50%{top:-180%;width:15%;height:15%;right:-5%}
70%{top:-240%; width:15%; height:15%; right:15%}
90%{top:-280%; width:12%; height:12%; right:-5%}
100%{top:-350%; width:9%; height:9%; right:15%}`;

export const Bubbles2 = styled(Bubbles)`
	right: 20%;
	top: -30px;
	animation: ${Rise2} 8s linear infinite;
`;

const Rise3 = keyframes`
0%{top: -40%;width: 5px;height:5%}
10%{top:-60%;width:7%;height:7%;right:-25%}
20%{top: -100%;width:9%;height:9%}
30%{top:-140%;width:12%;height:12%;right:25%}
50%{top:-180%;width:15%;height:15%;right:-15%}
70%{top:-240%; width:15%; height:15%; right:25%}
90%{top:-280%; width:12%; height:12%; right:-15%}
100%{top:-350%; width:9%; height:9%; right:-25%; color:#AEAEAE}`;

export const Bubbles3 = styled(Bubbles2)`
	right: 30%;
	animation: ${Rise3} 5s linear infinite;
`;

const Rise4 = keyframes`
0%{top: -40%;width: 5px;height:5%}
10%{top:-60%;width:7%;height:7%; right: 60%}
20%{top: -100%;width:9%;height:9%}
30%{top:-140%;width:12%;height:12%;right: 20%}
50%{top:-180%;width:15%;height:15%;}
70%{top:-240%; width:15%; height:15%; right:60%}
90%{top:-280%; width:12%; height:12%; right: 40%}
100%{top:-350%; width:9%; height:9%;right: 80%;  color:#AEAEAE}`;

export const Bubbles4 = styled(Bubbles2)`
	right: 70%;

	animation: ${Rise4} 5s linear infinite;
`;
