import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

function WorkExperience() {
	return (
		<Fragment>
			<Row>
				<Col xs={12} className="work-exp">
					<img src={""} alt="work experience" style={{ width: "100%" }} className="img-center" />
				</Col>
			</Row>
		</Fragment>
	);
}

export default WorkExperience;
