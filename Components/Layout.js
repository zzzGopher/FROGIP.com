/** @format */

import Nav from "./Index/Nav";
import Triangle from "./Index/Triangle";
import Footer from "./Footer";

export function Layout({children}) {
	return (
		<>
			<Nav />
			<Triangle />
			<main>{children}</main>
			<Footer />
		</>
	);
}
