import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

function PetProjects() {
	const data = [
		{
			time: "Dec 2022- Feb 2023",
			name: "SumoTour",
			detail: `Project to book tours in Japan, manage users, and send emails when tours become available.
			I used Nestjs build Backend and ReactJS build Front-end, use mongoDb license free, use mailgun to send email
			to user, deploy to contabo VPS with docker and use nginx to reverse proxy, use Cloudflare to map DNS and
			https vertificate.`,
			technologies: `NestJS, MongoDb, ReactJS.`,
			link: "https://sumo-america-trading.com/",
			first: true,
		},
	];

	return (
		<Fragment>
			{data.map((d, index) => (
				<Row key={`project_${d.name}_${index}`}>
					<Col md={3} className={d["first"] ? "" : "project-intro"}>
						<Row>
							<Col xs={12}>{d.time}</Col>
						</Row>
						<Row>
							<Col md={4}>Name</Col>
							<Col className="bold">{d.name}</Col>
						</Row>
						<Row>
							<Col md={4}>Link</Col>
							<Col className="bold">
								<a href={d.link}>{d.link}</a>
							</Col>
						</Row>
					</Col>
					<Col className={d["first"] ? "" : "project"}>
						<Row>
							<div>{d.detail}</div>
							<div className="details bold">TECHNOLOGIES</div>
							<div>{d.technologies}</div>
						</Row>
					</Col>
				</Row>
			))}
		</Fragment>
	);
}

export default PetProjects;
