/** @format */
import {ChemBox} from "../styled-components/Chemistry";
import {Icon} from "@iconify/react";

function Chemistry() {
	return (
		<>
			<ChemBox>
				<div className="alchemyGlass">d</div>
				<Icon icon="ic:round-science" color="blue" width={35} />
				<Icon
					icon="ic:sharp-table-restaurant"
					color="brown"
					width={60}
				/>
			</ChemBox>
		</>
	);
}

export default Chemistry;
