/** @format */

import {
	FooterContainer,
	SocialColumn,
	SocialRow,
	SvgRow,
} from "../styled-components/Styled-footer";
import {Icon} from "@iconify/react";

function Footer() {
	return (
		<FooterContainer>
			<SocialRow>
				<SocialColumn>
					<Icon
						icon="ant-design:facebook-filled"
						color="white"
						height={38}
					/>
					Facebook
				</SocialColumn>
				<SocialColumn>
					<Icon
						icon="ant-design:instagram-filled"
						color="white"
						width={38}
						height={38}
					/>
					Instagram
				</SocialColumn>
				<SocialColumn>
					<Icon
						icon="ant-design:twitter-square-filled"
						color="white"
						height={38}
					/>
					Twitter
				</SocialColumn>
			</SocialRow>
			<SvgRow>
				<img
					style={{
						width: "200px",
						height: "300px",
						overflow: "hidden",
						"margin-top": "250px",
						"mix-blend-mode": "darken",
					}}
					src="/iphone.png"
				></img>
			</SvgRow>
		</FooterContainer>
	);
}

export default Footer;
