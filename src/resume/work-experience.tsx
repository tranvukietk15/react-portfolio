import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import test from "./test.svg";
function WorkExperience() {
	return (
		<Fragment>
			<Row>
				<Col xs={12} className="work-exp">
					<img src={test} alt="Kiet Tran" style={{ width: "100%" }} />
				</Col>
			</Row>
		</Fragment>
	);
}

export default WorkExperience;
