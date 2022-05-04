/** @format */
import {ChemBox, Icontainer} from "/styled-components/Home/Chemistry";
import {
	Bubbles,
	Bubbles2,
	Bubbles3,
} from "../../styled-components/Home/Bubbles";
import {Icon} from "@iconify/react";

function Chemistry() {
	return (
		<>
			<ChemBox>
				<Bubbles />
				<Bubbles2 />
				<Bubbles3 />
				<Icontainer>
					<Icon
						className="vial"
						icon="ic:round-science"
						color="#3CBFD4"
						width={35}
					/>
					<Icon
						icon="ic:sharp-table-restaurant"
						color="#291705"
						width={80}
					/>
				</Icontainer>
			</ChemBox>
		</>
	);
}

export default Chemistry;
