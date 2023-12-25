import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import { MdEmail } from "react-icons/md";
import { FaBirthdayCake, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { SiGooglestreetview } from "react-icons/si";
import avatar from "./resume/avatar.jpeg";
import Projects from "./resume/projects";
import PetProjects from "./resume/pet-projects";

function App() {
	return (
		<div className="App">
			<Container>
				<Row>
					<Col md={3}>
						<Row className="justify-content-md-center">
							<img src={avatar} alt="Kiet Tran" className="avt" />
						</Row>
						<Row>
							<Col>
								<Row>
									<Col xs={2}>
										<MdEmail />
									</Col>
									<Col>
										<a href="mailto:kiettranv@gmail.com">
											kiettranv@gmail.com
										</a>
									</Col>
								</Row>
								<Row>
									<Col xs={2}>
										<FaBirthdayCake />
									</Col>
									<Col>Nov 1996</Col>
								</Row>
								<Row>
									<Col xs={2}>
										<FaPhoneAlt />
									</Col>
									<Col>
										<a href="tel:+84949845485">
											+84 949845485
										</a>
									</Col>
								</Row>
								<Row>
									<Col xs={2}>
										<SiGooglestreetview />
									</Col>
									<Col>
										District 1, Ho Chi Minh City, VietNam
									</Col>
								</Row>
								<Row>
									<Col xs={2}>
										<FaLinkedin />
									</Col>
									<Col>
										<a href="https://www.linkedin.com/in/kiet-tran-555845129/">
											https://www.linkedin.com/in/kiet-tran-555845129/
										</a>
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>
					<Col>
						<div className="name">Trần Vũ Kiệt</div>
						<div className="position">FULLSTACK DEVELOPER</div>
						<div className="summary">
							Highly experienced full-stack developer with over 5
							years of experience building and maintaining web
							applications using .NET Core NodeJS and ReactJS.
							Proven ability to design, develop, and implement
							high-performance, scalable, and maintainable web
							applications. Expertise in all aspects of the
							full-stack development process, including front-end
							development, back-end development, and DevOps.
							Strong understanding of .NET Core, ReactJS,
							JavaScript, and related web technologies. Experience
							with RESTful APIs, microservices architecture, and
							cloud platforms such as AWS or Azure. Excellent
							problem-solving and analytical skills. Ability to
							work independently and as part of a team. Strong
							communication skills and hard working.
						</div>
					</Col>
				</Row>
				<Row>
					<div className="title">Skills</div>
				</Row>
				<Row>
					<Col>
						<Row>
							<Col xs={3}>Backend</Col>
							<Col className="bold">.NET core, NodeJS</Col>
						</Row>
						<Row>
							<Col xs={3}>FrontEnd</Col>
							<Col>ReactJS, Redux, Bootstrap, Tailwind</Col>
						</Row>
						<Row>
							<Col xs={3}>Database</Col>
							<Col>
								MSSQL, MySQL, Postgres, MongoDb, DynamoDb, Redis
							</Col>
						</Row>
						<Row>
							<Col xs={3}>Framework</Col>
							<Col>
								<Row>
									<Col>.NET core version: 3.1, 5, 6, 7</Col>
								</Row>
								<Row>
									<Col>NestJS, Express</Col>
								</Row>
							</Col>
						</Row>
					</Col>
					<Col>
						<Row>
							<Col xs={3}>API</Col>
							<Col>REST API, GRAPHQL</Col>
						</Row>
						<Row>
							<Col xs={3}>Message broker</Col>
							<Col>SNS - SQS, RabbitMQ, Azure service bus</Col>
						</Row>
						<Row>
							<Col xs={3}>CI/CD</Col>
							<Col>Azure pipeline, Jenkins</Col>
						</Row>
						<Row>
							<Col xs={3}>Hosting/DNS</Col>
							<Col>Cloudflare</Col>
						</Row>
						<Row>
							<Col xs={3}>VPS</Col>
							<Col>EC2, Contabo, Physical server</Col>
						</Row>
					</Col>
				</Row>
				{/* <Row>
					<div className="title">Work experience</div>
				</Row>
				<Row>
					<Col xs={2}>1 of 3</Col>
					<Col>2 of 3</Col>
				</Row> */}
				<Row>
					<div className="title">Projects</div>
				</Row>
				<Projects />
				<Row>
					<div className="title">Pet Projects</div>
				</Row>
				<PetProjects />
				<Row>
					<div className="title">Education</div>
				</Row>
				<Row className="last">
					<Col xs={4}>
						<Row>
							<Col xs={3}>School</Col>
							<Col className="bold">MEKONG UNIVERSITY</Col>
						</Row>
						<Row>
							<Col xs={3}>Major</Col>
							<Col>INFORMATION TECHNOLOGY</Col>
						</Row>
						<Row>
							<Col xs={3}>Time</Col>
							<Col>Oct 2014- Aug 2018</Col>
						</Row>
						<Row>
							<Col xs={3}>GPA</Col>
							<Col>3.6/4</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
