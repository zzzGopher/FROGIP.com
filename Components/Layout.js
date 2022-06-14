/** @format */

import Nav from "./Index/Nav";

import Footer from "./Footer";

export function Layout({children}) {
	return (
		<>
			<Nav />
			<main>{children}</main>
			<Footer />
		</>
	);
}
