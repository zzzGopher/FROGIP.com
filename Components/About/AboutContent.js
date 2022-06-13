/** @format */

import Image from "next/image";
import {
	ContentContainer,
	ContentHeader,
	ScribbleContainer,
	ListTitles,
	ListFlex,
	Paragraph,
} from "../../styled-components/About/Styled-Content";

function Content() {
	return (
		<ContentContainer>
			<ContentHeader>
				Work I Do
				<ScribbleContainer>
					<Image src={"/ContentScribble.svg"} layout="fill" />
				</ScribbleContainer>
			</ContentHeader>
			<ul style={{margin: 0, padding: 0}}>
				<ListFlex>
					<ListTitles>
						<div
							style={{
								width: "80px",
								height: "100px",
								position: "relative",
							}}
						>
							<Image src={"/about_bullets4.svg"} layout="fill" />
						</div>
						Search Ranking
					</ListTitles>
					<Paragraph>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ut temporibus, praesentium sequi quasi nostrum facilis
						officia iusto pariatur aspernatur eum debitis vero velit
						consequuntur doloribus nam incidunt, reprehenderit hic
						rerum?
					</Paragraph>
					<ListTitles>
						<div
							style={{
								width: "80px",
								height: "100px",
								position: "relative",
							}}
						>
							<Image src={"/about_bullets4.svg"} layout="fill" />
						</div>
						Better Practices
					</ListTitles>
					<Paragraph>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ut temporibus, praesentium sequi quasi nostrum facilis
						officia iusto pariatur aspernatur eum debitis vero velit
						consequuntur doloribus nam incidunt, reprehenderit hic
						rerum?
					</Paragraph>
					<ListTitles>
						<div
							style={{
								width: "80px",
								height: "100px",
								position: "relative",
							}}
						>
							<Image src={"/about_bullets4.svg"} layout="fill" />
						</div>
						More Views
					</ListTitles>
					<Paragraph>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ut temporibus, praesentium sequi quasi nostrum facilis
						officia iusto pariatur aspernatur eum debitis vero velit
						consequuntur doloribus nam incidunt, reprehenderit hic
						rerum?
					</Paragraph>
				</ListFlex>
			</ul>
		</ContentContainer>
	);
}

export default Content;
