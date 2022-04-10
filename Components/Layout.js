/** @format */

import Nav from "./Nav";
import Triangle from "./Triangle";
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
